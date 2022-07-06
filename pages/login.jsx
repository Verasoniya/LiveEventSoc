import React from "react";
import CustomButton from "../components/CustomButton";
import { Input } from "../components/Input";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <FaUserCircle className="w-40 h-40 mx-auto mb-5" />
        <form className="flex flex-col gap-4 min-w-[30%] " action="">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </form>

        <div className="flex flex-col gap-4 min-w-[30%] mt-8">
          <CustomButton
            id="btn-login"
            label="SUBMIT"

            //   loading={loading || disabled}
          />
          <p className="text-black text-center ">
            {`Don't`} have an account?{" "}
            <Link href="/register" className="text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
