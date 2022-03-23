import * as yup from "yup";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios.config";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./Auth.css";

const phoneRegex = /^\d{10}$/;
let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(phoneRegex, "Phone number is not valid"),
  password: yup.string().min(6).max(8).required(),
  type: yup.string().required(),
});

function Signup(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const firstName = data["firstName"];
    const lastName = data["lastName"];
    var randomColor = "000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    data["avatar"] = `https://ui-avatars.com/api/?name=${firstName}+${
      lastName || " "
    }&color=${randomColor}&background=ffd4d4&bold=true&size=256`;
    console.log(data);
    axiosInstance
      .post("/auth/account", data)
      .then((response) => {
        console.log(response);
        navigate("/disease-detection");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);

  return (
    <div className="container grid grid-rows-5 grid-flow-col content-center gap-1 px-5 my-auto">
      <div className="row-span-1">
        <div className="text-5xl text-emerald-500 text-center py-0">
          Create Your Account
        </div>
      </div>
      <div className="row-span-4">
        <form
          className="container grid grid-rows-2 grid-flow-col content-center gap-2 my-auto"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
        >
          <div className="row-span-1">
            <div className="flex flex-wrap content-center">
              <div className="row-span-1 items-center mx-auto">
                <div className="flex flex-wrap content-center  mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.firstName
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      id="firstName"
                      type="text"
                      placeholder="Enter First Name"
                      {...register("firstName")}
                    />
                    {errors && errors.firstName ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.firstName.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.lastName
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      id="lastName"
                      type="text"
                      placeholder="Enter Last Name"
                      {...register("lastName")}
                    />
                    {errors && errors.lastName ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.lastName.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="row-span-1 items-center mx-auto">
                <div className="flex flex-wrap content-center  mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.username
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      id="username"
                      type="text"
                      placeholder="Enter your Username"
                      {...register("username")}
                    />
                    {errors && errors.username ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.username.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.phone
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      type="text"
                      id="phone"
                      placeholder="Enter your Phone Number"
                      {...register("phone")}
                    />
                    {errors && errors.phone ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.phone.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="row-span-1 items-center mx-auto">
                <div className="flex flex-wrap content-center  mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.password
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      id="password"
                      type="password"
                      placeholder="Enter your Password"
                      {...register("password")}
                    />
                    {errors && errors.password ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.password.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-7"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      name="types"
                      className={`shadow appearance-none border rounded w-64 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors && errors.type
                          ? "border-red-500"
                          : "border-emerald-500"
                      }`}
                      {...register("type")}
                    >
                      <option value="farmer">Farmer</option>
                      <option value="expert">Expert</option>
                    </select>
                    {errors && errors.type ? (
                      <p className="text-red-500 text-xs italic w-64 ml-6 py-2 px-3">
                        {errors.type.message}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 items-center mx-auto py-7">
            <input
              className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-40"
              type="submit"
              value="Confirm"
            />
            <br></br>
            <br></br>
            <div className="unhide">
              <button
                className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-40"
                onClick={props.handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
