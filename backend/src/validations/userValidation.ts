import Joi from "joi";

export const userSignupValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(4).required(),
});
