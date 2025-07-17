import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {     
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId:string
    }
}>();

//below is a middleware to check if the user is authenticated 
blogRouter.use('/*', async (c, next) => {//assuming no Bearer used as first word before token
	
    const authHeader= c.req.header("Authorization") || "";
    try{
        const user = await verify(authHeader,c.env.JWT_SECRET)
        if(user){
        c.set("userId",user.id as string);
        await next();
        }else {
        c.status(401);
        return c.json({
            message: "Unauthorized"
        })
        }
    } catch(e){//when jwt secret changed - jwt changed so
        c.status(401);
        return c.json({
            message: "Unauthorized"
        })
    }
    
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs= await prisma.post.findMany()
    return c.json<{ blogs: any[] }>({
        blogs
    })

	// return c.text('getting all blogs')
})

blogRouter.get('/:id',async (c) => {
    const id =await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        //get a single first blog
        const blog = await prisma.post.findFirst({
            where:{
                id: id
            },
        })
        return c.json({
            blog
        })
    } catch(e){
        c.status(411);
        return c.json({
            message: "Blog not found"
        })
    }
})

blogRouter.post('/', async (c) => {

    const body= await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId // Assuming jwtPayload contains user id
        }
        });
        console.log(userId);
	    return c.json({
        post
        })
    } catch (e) {
        c.status(411);
        return c.json({ error: "Error creating post" });
    }
    
})



blogRouter.put('/', async (c) => {
    const body=await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs= await prisma.post.update({
        where: {
            id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
    })
    return c.json(blogs)

	//updating blog
})