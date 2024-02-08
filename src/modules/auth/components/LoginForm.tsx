import { UseFormReturn } from "react-hook-form";
import ControlledInput from "@/shared/input/ControlledInput";
import { loginDefaultValues } from "@/modules/auth/views/Login";

type LoginFormProps = {
  form: UseFormReturn<typeof loginDefaultValues>;
};
function LoginForm(props: LoginFormProps) {
  // const
  const { control } = props.form;

  return (
    <div className=" grid grid-rows-2 gap-3">
      <ControlledInput control={control} name="email" label="Email Address" />
      <ControlledInput control={control} name="password" label="Password" />
    </div>
  );
}

export default LoginForm;
