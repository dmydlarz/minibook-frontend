import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { connect, useDispatch } from "react-redux";
import { thunkLogin } from "../thunk/login.thunk";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SignInPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const {
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues,
    watch,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = watch();

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    dispatch(thunkLogin(data));
  };

  return (
    <div className={"signInPage"}>
      <form
        className={"default-block signInPage__container"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={"signInPage__inner-container"}>
          <span className={"default-title"}>LOGIN</span>
          <input
            placeholder={"Email address"}
            className={"default-input"}
            type="text"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
              required: "Enter your e-mail",
            })}
          />
          <span>{errors.email?.message}</span>
          <input
            placeholder={"Password"}
            type={"password"}
            className={"default-input"}
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 6,
                message: "Minimum password length 6 characters",
              },
              maxLength: {
                value: 16,
                message: "Maximum password length 16 characters",
              },
            })}
          />
          <span>{errors.password?.message}</span>

          <div className={"signInPage__checkbox"}>
            <input type={"checkbox"} /> <span>Remember me</span>
          </div>
          <button
            className={"default-button"}
            type={"submit"}
            onClick={() => {
              // console.log(errors);
              // alert(datas.password);
              // navigate("/profile");
            }}
          >
            SIGN IN
          </button>
        </div>
        <div className={"signInPage__bottom-container"}>
          <Link to={"/sign-up"} className={"no-link"}>
            <div>New around here? Sign up</div>
          </Link>
          <Link to={"/forgotten-password"} className={"no-link"}>
            <div>Forgot password?</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
