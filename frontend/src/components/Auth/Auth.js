import React, { useState } from 'react'
import { Switch } from "@headlessui/react";
import Login from './Login';
import Signup from './Signup';
import googlePlus from '../../utils/images/loginSignupPage/google-plus.png'
import facebook from '../../utils/images/loginSignupPage/facebook.png'
import twitter from '../../utils/images/loginSignupPage/twitter.png'
import cropbg from '../../utils/images/loginSignupPage/crop-background.jpg'
function Auth() {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className="grid grid-cols-4 h-full bg-blend-darken" style={{
            backgroundImage: 'url(' + cropbg + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="col-span-4 md:col-start-3 md:col-span-2 py-auto flex justify-center align-middle">
                <div className="mx-auto w-3/4 sm:w-1/2 md:w-3/5 xl:w-1/3 my-auto">
                    <div className="grid grid-rows-6 grid-flow-col gap-4 h-1/2 rounded-lg border-1 bg-gray-500 bg-opacity-30 border-black px-4">
                        <div className="row-span-1 flex justify-center">
                            <Switch checked={enabled} onChange={setEnabled}>
                                <span className="bg-white rounded-full shadow p-0.5 h-10 w-48 flex">
                                    <span
                                        className={`flex justify-center items-center h-full w-1/2 rounded-full transition duration-300 ease-in-out transform bg-teal-500 text-white ${enabled ? " translate-x-full" : ""
                                            }`}
                                    >
                                        {enabled ? "Login" : "Sign Up"}
                                    </span>
                                </span>
                            </Switch>
                        </div>
                        <div className='row-span-4'>
                            {enabled ? <Login /> : <Signup />}
                            <hr />
                        </div>
                        <div className="row-span-1">
                            <div className="grid grid-cols-12 content-around p-4">
                                <div className='col-span-4 cursor-pointer hover:opacity-75'>
                                    <img src={googlePlus} alt="Google Plus" className='h-10 mx-auto' />
                                </div>
                                <div className='col-span-4 cursor-pointer hover:opacity-75'>
                                    <img src={facebook} alt="Google Plus" className='h-10 mx-auto' />

                                </div>
                                <div className='col-span-4 cursor-pointer hover:opacity-75'>
                                    <img src={twitter} alt="Google Plus" className='h-10 mx-auto' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth