import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CgSpinnerAlt } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [loginData, setLoginData] = useState([]);
  const {register,handleSubmit} = useForm()
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [validUser,setValidUser] = useState(false)
  const navigate = useNavigate(); 
console.log(validUser,"validUser")
  useEffect(() => {
    axios
      .get("https://63e9b70a811db3d7efffb3b2.mockapi.io/api/v1/nearkode")
      .then((data) => {
        setLoginData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit=(data)=>{
    setLoading(true)
    let userCount = 0
    loginData.map((e)=>{
      if(e.email===data.email && e.password ===data.password){
        console.log(e.email,e.password,"e.email")
        userCount++
        setError(false)
        setLoading(true)
        navigate("/")
        setValidUser(true)
      }
    })
    if(userCount==0){
      console.log("0")
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen bg-[#eeeff1]">
      <div className=" align-middle flex flex-col justify-center items-center my-auto z-50 w-full p-4 overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-600 dark:text-gray-600">
                Sign in to our platform
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-start text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                  {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="text-white mb-4 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"
                    placeholder="xyz@company.com"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="block text-start mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                  {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="text-white border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"
                    required
                  />
                {error?<p className="text-[red] text-[12px] text-start mt-1">Email or password is incorrect</p>:<></>}
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 pt-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {loading? <CgSpinnerAlt className="my-auto justify-center flex text-white transition-all text-30" />:
                  <p>Login</p>}
                </button>
                <div className=" text-gray-500 dark:text-gray-600">
                  Not registered yet?{" "}
                  <Link
                    to={"/register"}
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
