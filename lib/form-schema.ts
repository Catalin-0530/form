import * as z from "zod";

export const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters." })
      .max(50, { message: "First name must be less than 50 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters." })
      .max(50, { message: "Last name must be less than 50 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(1, { message: "Please enter a phone number." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password." }),
    referral: z.string({
      required_error: "Please select how you heard about us.",
    }),
    marketing: z.boolean(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof formSchema>;
