"use client";

import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { Input, Text, Button, Password, Switch } from "rizzui";
import { useMedia } from "@core/hooks/use-media";
import { Form } from "@core/ui/form";
import { routes } from "@/config/routes";
import { loginSchema, LoginSchema } from "@/validators/login.schema";

const initialValues: LoginSchema = {
  email: "admin@admin.com",
  password: "admin",
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log("Sign in form data", data);
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: "onChange",
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? "lg" : "xl"}
              label="Email"
              placeholder="Informe seu Email"
              className="[&>label>span]:font-medium border-0"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Informe sua Senha"
              size={isMedium ? "lg" : "xl"}
              className="[&>label>span]:font-medium border-0"
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between lg:pb-2">
              <Switch label="Lembrar-me" {...register("rememberMe")} />
              <Link
                href={routes.auth.forgotPassword3}
                className="h-auto p-0 text-sm font-semibold text-gray-600 underline transition-colors hover:text-primary hover:no-underline"
              >
                Esqueceu a Senha?
              </Link>
            </div>

            <Button
              className="w-full h-12 text-white bg-orange-400"
              type="submit"
              size={isMedium ? "lg" : "xl"}
            >
              Login
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
