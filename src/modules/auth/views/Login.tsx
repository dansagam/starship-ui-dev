import AuthLayout from "@/layouts/AuthLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginForm from "@/modules/auth/components/LoginForm";
import { useNavigate } from "react-router-dom";
import { BASE_PATH } from "@/routes/routes";
import { loginDefaultValues, loginResolver } from "../validation";

function Login() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: loginDefaultValues,
    resolver: loginResolver,
  });

  const onSubmit: SubmitHandler<typeof loginDefaultValues> = (values) => {
    console.log({ values });
    // Auth.setToken(import.meta.env.VITE_APP_TOKEN);
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
