import AuthLayout from "@/layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout
      title="Login"
      subTitle="Kindly enter your details to log in "
      actionText="Log in"
      nextLink="#"
      nextLinkText="Forgot your password?"
      onAction={() => {}}
    >
      <div>
        <div>
          <div>Login</div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
