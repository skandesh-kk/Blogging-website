import z from 'zod'

export const signupInput = z.object({//this is a runtime variable 
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional()
})

//for also using in frontend 
//typeinference in zod 
//FE developer need not come here and see types they can just use types


//whatever bpoth modules need ,they need not talk to each other whatever both needs
// -extract into separate modules and independently deploy in npm wehich both of them can use 
// - MONOREPOS

export const signinInput= z.object({
    email: z.string().email(),
    password: z.string()
    })


export const createpostInput = z.object({
    title: z.string(),
    content:z.string(),
})


export const updatepostInput = z.object({
    title: z.string(),
    content:z.string(),
    id:z.string()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreatePostInput = z.infer<typeof createpostInput>
export type UpdatePostInput = z.infer<typeof updatepostInput>