import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isStrongPassword } from "class-validator";
export const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .test({
      test: (values) =>
        isStrongPassword(values, { minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1 }),
      message: "At least one uppercase, lowercase, number, symbol is required with length min 8",
    }),
});
export type LoginPayloadProps = yup.InferType<typeof schema>;
export const loginDefaultValues: LoginPayloadProps = {
  email: "",
  password: "",
};

export const loginResolver = yupResolver(schema);
