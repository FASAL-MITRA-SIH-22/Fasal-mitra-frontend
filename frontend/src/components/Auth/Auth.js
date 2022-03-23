import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import './Auth.css'

const Transition = ({setLoginActive, set, name})=>(
  <div className="container grid grid-rows-3 grid-flow-col content-center gap-4 px-5 my-auto">
    <div className="text-5xl text-white text-center">Proceed to {name} !</div>
    <p className="text-white text-center">
      To keep connected with us please {name} with your details
    </p>
    <div className="row-span mx-auto">
      <button
        className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-25"
        onClick={() => setLoginActive(set)}
      >
        {name}
      </button>
    </div>
  </div>
);

export default function Auth() {
  const [loginActive, setLoginActive] = useState(true);
  const handleClick = () => setLoginActive(value => !value);
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 h-screen">
      <div className={`${loginActive? 'bg-emerald-500 col-span-2 hide': 'bg-white col-span-4'} flex `}>
        {loginActive ? (
          <Transition
            setLoginActive={setLoginActive}
            set={false}
            name={"Signup"}
          />
        ) : (
          <Signup handleClick={handleClick}/>
          
          
        )}
      </div>
      <div className={`${!loginActive? 'bg-emerald-500 col-span-2 hide': 'bg-white col-span-4'} flex `}>
      {!loginActive ? (
         <Transition setLoginActive={setLoginActive} set={true} name={"Login"}/>
        ) : (
          <Login handleClick={handleClick}/>
        )}
      </div>
      {/* {<button onClick={handleClick}>Hello</button>} */}
    </div>
  );
}
