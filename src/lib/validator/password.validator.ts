import { z } from 'zod';

export const PasswordValidator = z.object({
    
    password: z.string().min(8, {
        message: 
        'Password Should be minimum 8 characters long.'
    })

})

export type TPasswordValidator = z.infer<typeof PasswordValidator>