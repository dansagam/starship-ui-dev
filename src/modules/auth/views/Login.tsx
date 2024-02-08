import AuthLayout from "@/layouts/AuthLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginForm from "@/modules/auth/components/LoginForm";
import Auth from "@/api/Auth";
import { useNavigate } from "react-router-dom";
import { BASE_PATH } from "@/routes/routes";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
type LoginPayloadProps = yup.InferType<typeof schema>;
export const loginDefaultValues: LoginPayloadProps = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: loginDefaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<typeof loginDefaultValues> = (values) => {
    console.log({ values });
    Auth.setToken(import.meta.env.VITE_APP_TOKEN);
    navigate(BASE_PATH.OVERVIEW);
  };

  return (
    <AuthLayout
      title="Login"
      subTitle="Kindly enter your details to log in "
      actionText="Log in"
      nextLink="#"
      nextLinkText="Forgot your password?"
      onAction={form.handleSubmit(onSubmit)}
    >
      <div>
        <div>
          <LoginForm form={form} />
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
