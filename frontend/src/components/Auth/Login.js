import React from 'react'
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).max(8).required(),
});

function Login() {
    const submitHandler = (data) => {
        console.log(data)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    console.log(errors);


    return (
        <form className="grid grid-rows-6 grid-flow-col gap-4 h-full"
            autoComplete="true"

            onSubmit={handleSubmit(submitHandler)}>
            <div className="row-span-2">
            <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Username
                    </span>
                    <input type="username" name="username" className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1 ${errors && errors.username ? "border-red-400 focus:border-red-500 focus:ring-red-500" :"focus:border-teal-500 focus:ring-teal-500"}`} placeholde="******" {...register('username')} />
                </label>
                {errors && errors.username ? (
                    <p className="text-red-500 text-sm italic ml-6 py-2">
                        {errors.username.message}
                    </p>
                ) : (
                    <></>
                )}
            </div>
            <div className="row-span-2">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1 ${errors && errors.password ? "border-red-400 focus:border-red-500 focus:ring-red-500" :"focus:border-teal-500 focus:ring-teal-500"}`} placeholde="******" {...register('password')} />
                </label>
                {errors && errors.password ? (
                    <p className="text-red-500 text-sm italic ml-6 py-2">
                        {errors.password.message}
                    </p>
                ) : (
                    <></>
                )}
            </div>
            <div className="flex row-span-2">
                <input type="submit" value="Login" className='mx-auto h-11 w-44 bg-teal-500 text-white rounded-xl hover:bg-teal-600 cursor-pointer' />
            </div>
        </form>
    )
}

export default Login