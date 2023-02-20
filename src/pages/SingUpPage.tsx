import React, { useState } from "react";
import DefaultButton from "../components/button/DefaultButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { thunkRegister } from "../thunk/register.thunk";

const SignUpPage = () => {
  const {
    register,
    setValue,
    getValues,
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const data = watch();

  const onSubmit = (data: any) => {
    console.log(data.email);
    thunkRegister(data);
    navigate("/profile");
  };
  const navigate = useNavigate();

  return (
    <div className={"signUpPage"}>
      <form className={"default-block"} onSubmit={handleSubmit(onSubmit)}>
        <div className={"signUpPage__inner-container"}>
          <span className={"default-title"}>SIGN UP</span>
          <span>{errors.firstName?.message}</span>

          <div style={{ display: "flex" }}>
            <input
              placeholder={"First Name"}
              className={"default-input"}
              {...register("firstName", {
                required: "Enter your first name",
                minLength: {
                  value: 2,
                  message: "Minimum name length 2 characters",
                },
              })}
            />
            <input
              placeholder={"Last Name"}
              className={"default-input"}
              {...register("lastName", {})}
            />
          </div>
          <span>{errors.displayName?.message}</span>

          <input
            placeholder={"Display Name"}
            className={"default-input"}
            {...register("displayName", {
              required: "Enter your display name",
              minLength: {
                value: 2,
                message: "Minimum name length 2 characters",
              },
            })}
          />
          <span>{errors.email?.message}</span>
          <input
            placeholder={"Email Address"}
            className={"default-input"}
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
              required: "Enter your e-mail",
            })}
          />
          <span>
            {errors.password?.message || errors.confirmPassword?.message}
          </span>

          <div style={{ display: "flex" }}>
            <input
              placeholder={"Password"}
              className={"default-input"}
              type={"password"}
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
            />
            <input
              placeholder={"Confirm Password"}
              type={"password"}
              className={"default-input"}
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === data.password || "The passwords do not match",
              })}
            />
          </div>
        </div>
        <div className={"signUpPage__bottom-block"}>
          <span></span>
          <div style={{ display: "flex" }}>
            <input
              type={"checkbox"}
              {...register("terms", {
                required: { value: true, message: "false" },
              })}
              className={
                errors.terms?.message == "false"
                  ? "highlighted-input"
                  : "default-bloc"
              }
            />
            <span>Accept Terms of Services</span>
          </div>
          <div className={"signUpPage__bottom-buttons"}>
            <button
              className={"default-button"}
              onClick={() => {
                // if (passwordValidation(password) === true) axios.post("#");
              }}
              type={"submit"}
            >
              SIGN UP
            </button>
            <DefaultButton text={"SIGN IN"} link={"/sign-in"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
