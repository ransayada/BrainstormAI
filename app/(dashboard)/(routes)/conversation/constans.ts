import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1,{
        message: "Prompt message us required in order to ge response"
    })
})