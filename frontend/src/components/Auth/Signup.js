import * as yup from "yup";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios.config";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
  name: yup.string().min(6).max(25).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(8).required(),
});

function Signup() {

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const nameArray = data['name'].split(' ');
    var randomColor = "000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    data['avatar'] = `https://ui-avatars.com/api/?name=${nameArray[0]}+${nameArray[1] || ' '}&color=${randomColor}&background=ffd4d4&bold=true&size=256`
    console.log(data)
    axiosInstance.post('/account', data)
      .then((response) => {
        console.log(response)
        navigate('/collab')
      })
      .catch((error) => {
        console.log(error)
      })
  }
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
        <form className="container grid grid-rows-4 grid-flow-col content-center gap-2 my-auto" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
          <div className="row-span-1  py-2 mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors && errors.name ? 'border-red-500' : ''}`}
              id="name"
              type="text"
              placeholder="Enter your Full Name"
              {...register("name")}
            />
            {errors && errors.name ? <p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.name.message}</p> : <></>}
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors && errors.email ? 'border-red-500' : ''}`}
              id="email"
              type="text"
              placeholder="Enter your Email"
              {...register("email")}
            />
            {errors && errors.email ? <p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.email.message}</p> : <></>}
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors && errors.email ? 'border-red-500' : ''}`}
              id="password"
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors && errors.password ? <p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.password.message}</p> : <></>}
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