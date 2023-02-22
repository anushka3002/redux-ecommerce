import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CgSpinnerAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { loginDetect } from "../redux/action";

const Register = () => {

    const {register,handleSubmit} = useForm()
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onSubmit =(data)=>{
        setLoading(true)
        axios.post("https://63e9b70a811db3d7efffb3b2.mockapi.io/api/v1/nearkode",data).then((data)=>{
            navigate("/")
            // console.log(data.name,"data.name in register")
            localStorage.setItem("logged user",JSON.stringify(data.data.name))
            dispatch(loginDetect())
            console.log(data,"register")
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className="h-screen w-screen bg-[#eeeff1]">
      <div className=" align-middle flex flex-col justify-center items-center my-auto z-50 w-full p-4 overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:gray-600">
                Sign up to our platform
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label
                    htmlFor="name"
                    className="block text-start mb-2 text-sm font-medium text-gray-900 dark:gray-600"
                  >
                    Name
                  </label>
                  <input
                  {...register("name")}
                    type="name"
                    name="name"
                    id="name"
                    className="text-white mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:gray-600"
                    placeholder="xyz"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="block mb-2 text-start text-sm font-medium text-gray-900 dark:gray-600"
                  >
                    Email
                  </label>
                  <input
                  {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="text-white mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:gray-600"
                    placeholder="xyz@company.com"
                    required
                  />
                   <label
                    htmlFor="phone number"
                    className="block text-start mb-2 text-sm font-medium text-gray-900 dark:gray-600"
                  >
                    Phone number
                  </label>
                  <input
                  {...register("phone")}
                    type="phone"
                    name="phone"
                    id="phone"
                    className="text-white mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:gray-600"
                    placeholder="1234567890"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="block text-start mb-2 text-sm font-medium text-gray-900 dark:gray-600"
                  >
                    Password
                  </label>
                  <input
                  {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:gray-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 pt-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {loading? <CgSpinnerAlt className="text-center mx-auto text-white transition-all animate-spin text-30 mt-2 mb-2" />:
                  <p>Create your account</p>}
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-600">
                  Account already exists?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Login
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

export default Register;
