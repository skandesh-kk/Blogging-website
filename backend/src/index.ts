import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
const app = new Hono<{//way to specify environment var
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();
//and cant get env var outside
//so everytime in req we can access it like this by client

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);






export default app
