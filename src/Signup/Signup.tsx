import Card from "../Card/Card.tsx";
import React from "react";
import styles from "./Signup.module.css";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SignupProps = {
  // TODO
};

export const SignupSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password length is less than 8")
    .max(20, "Password length is greater than 20"),
  confirmPassword: z
    .string()
    .min(8, "Password length is less than 8")
    .max(20, "Password length is greater than 20"),
});

export default function Signup() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  });

  function handleFormSubmit(data: z.infer<typeof SignupSchema>) {
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles["top-text"]}>Signup for a new account</div>
      <Card>
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <Input label="Email" type="email" {...register("email")} />
          {errors.email && (
            <div className={styles.error}>{errors.email.message}</div>
          )}
          <Input
            label="Password"
            type="password"
            autocomplete="on"
            {...register("password")}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
          <Input
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className={styles.error}>{errors.confirmPassword.message}</div>
          )}
          <Button size="md">Signup</Button>
          <div className={styles["bottom-text"]}>
            Already have an account ? LOGIN
          </div>
        </form>
      </Card>
    </div>
  );
}
