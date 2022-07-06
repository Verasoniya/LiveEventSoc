import React from "react";
import { Input } from "../components/Input";
import CustomButton from "../components/CustomButton";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <FaUserCircle className="w-40 h-40 mx-auto mb-5" />
        <form className="flex flex-col gap-4  " action="">
          <Input type="text" placeholder="Fullname" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Phone" />
          <Input type="text" placeholder="Addres" />
        </form>
        <div className="flex flex-col gap-4 min-w-[30%] mt-8">
          <CustomButton
            id="btn-login"
            label="SUBMIT"
            //   loading={loading || disabled}
          />
          <p className="text-black text-center ">
            have an account?{" "}
            <Link href="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
