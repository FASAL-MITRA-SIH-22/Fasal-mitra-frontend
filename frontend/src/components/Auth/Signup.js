import * as yup from "yup";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios.config";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email(),
  //phone: yup.string().phone().required(),
  password: yup.string().min(6).max(8).required(),
  type: yup.string().required(),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const nameArray = data["name"].split(" ");
    var randomColor = "000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    data["avatar"] = `https://ui-avatars.com/api/?name=${nameArray[0]}+${
      nameArray[1] || " "
    }&color=${randomColor}&background=ffd4d4&bold=true&size=256`;
    console.log(data);
    axiosInstance
      .post("/account", data)
      .then((response) => {
        console.log(response);
        navigate("/collab");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);

  return (
    <div className="container grid grid-rows-6 grid-flow-col content-center gap-4 px-5 my-auto">
      <div className="row-span-1">
        <div className="text-5xl text-emerald-500 text-center">
          Create Your Account
        </div>
      </div>
      <div className="row-span-1">
        <p className="text-emerald-500 text-2xl text-center">
          Register yourself to get the full access!
        </p>
      </div>
      <div className="row-span-4">
        <form
          className="container grid grid-rows-4 grid-flow-col content-center gap-2 my-auto"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
        >
          <div className="row-span-1  py-2 mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            {/* <input
              className={`shadow appearance-none border rounded w-1/2 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors && errors.firstName ? "border-red-500" : ""
              }`}
              id="firstName"
              type="text"
              placeholder="Enter your First Name"
              {...register("firstName")}
            />
            {errors && errors.firstName ? (
              <p className="text-red-500 text-xs italic w-1/2 ml-6 py-2 px-3">
                {errors.firstName.message}
              </p>
            ) : (
              <></>
            )}
            <input
              className={`shadow appearance-none border rounded w-1/2 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors && errors.lastName ? "border-red-500" : ""
              }`}
              id="lastName"
              type="text"
              placeholder="Enter your Last Name"
              {...register("lastName")}
            />
            {errors && errors.lastName ? (
              <p className="text-red-500 text-xs italic w-1/2 ml-6 py-2 px-3">
                {errors.lastName.message}
              </p>
            ) : (
              <></>
            )} */}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email ID
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            {/* <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors && errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="text"
              placeholder="Enter your Email"
              {...register("email")}
            />
            {errors && errors.email ? (
              <p className="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">
                {errors.email.message}
              </p>
            ) : (
              <></>
            )} */}
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            {/* <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors && errors.email ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors && errors.password ? (
              <p className="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">
                {errors.password.message}
              </p>
            ) : (
              <></>
            )}*/}
          </div>
          <div className="row-span-1 items-center py-2 mx-auto">
            <input
              className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-25"
              type="submit"
              value="Confirm"
            />
          </div>
        </form>
      </div> 
    </div>
  );
}

export default Signup;
