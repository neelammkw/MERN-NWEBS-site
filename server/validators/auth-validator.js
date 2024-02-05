const  { z } = require("zod");
const loginSchema = z.object({email: z.string({ required_error: "email is required"})
.trim()
.min(3, { message: "email must not be less than 3 characters" })
.max(255, { message: "email must not be more than 255 characters" }),
password: z.string({ required_error: "password is required"})
.trim()
.min(3, { message: "password must not be less than 3 characters" })
.max(255, { message: "password must not be more than 255 characters" }),

});

const signupSchema = z.object({
username: z.string({ required_error: "Name is required"})
.trim()
.min(3, { message: "name must not be less than 3 characters" })
.max(255, { message: "name must not be more than 255 characters" }),
email: z.string({ required_error: "email is required"})
.trim()
.min(3, { message: "email must not be less than 3 characters" })
.max(255, { message: "email must not be more than 255 characters" }),

phone: z.string({ required_error: "phone is required"})
.trim()
.min(3, { message: "phone must not be less than 3 characters" })
.max(255, { message: "phone must not be more than 255 characters" }),
password: z.string({ required_error: "password is required"})
.trim()
.min(3, { message: "password must not be less than 3 characters" })
.max(255, { message: "password must not be more than 255 characters" }),
});

module.exports = {signupSchema, loginSchema};
