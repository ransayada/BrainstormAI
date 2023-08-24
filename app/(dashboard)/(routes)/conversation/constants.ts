import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1,{
        message: "Prompt message is required in order to get response"
    })
})