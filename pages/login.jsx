import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { Input } from "../components/Input";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
// import { TokenContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
  // const { login, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://live-event.social/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { status, message, data } = result;
        if (status === "success") {
          const { token } = data;
          localStorage.setItem("token", token);
          router.push("/");
        }
        alert(message);
        console.log(result);
      })
      .catch((err) => {
        alert(err.toString());
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <FaUserCircle className="w-40 h-40 mx-auto mb-5" />
        <form
          className="flex flex-col gap-4 min-w-[30%] "
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex flex-col gap-4 min-w-[30%] mt-8">
            <CustomButton
              id="btn-login"
              label="SUBMIT"
              loading={loading || disabled}

              //   loading={loading || disabled}
            />
          </div>
        </form>
        <p className="text-black text-center ">
          {`Don't`} have an account?{" "}
          <Link href="/register" className="text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
