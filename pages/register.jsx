import React, { useEffect, useState } from "react";
import { Input } from "../components/Input";
import CustomButton from "../components/CustomButton";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if ((fullname && username && password, email, phone, address, file)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fullname, username, password, email, phone, address, file]);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("full_name", fullname);
    formData.append("user_name", username);
    formData.append("phone_number", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("file", file);

    axios
      .post("https://live-event.social/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = async (e) => {
  //   setLoadiing(true);
  //   e.preventDefault();
  //   const body = {
  //     full_name: fullname,
  //     user_name: username,
  //     email,
  //     password,
  //     phone_number: phone,
  //     address,
  //   };
  //   var requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   };
  //   fetch("https://live-event.social/users", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       const { message, data } = result;
  //       if (result.code == 200) {
  //         if (data) {
  //           router.push("/login");
  //         }
  //       }
  //       alert(message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error.toString());
  //     })
  //     .finally(() => setLoading(false));
  // };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <FaUserCircle className="w-40 h-40 mx-auto mb-5" />
        <form
          className="flex flex-col gap-4  "
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="file"
            placeholder="Input Your File"
            onChange={handleFileSelect}
          />
          <Input
            type="text"
            placeholder="Fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <Input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Addres"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="flex flex-col gap-4 min-w-[30%] mt-8">
            <CustomButton
              id="btn-login"
              label="SUBMIT"
              loading={loading || disabled}
            />
          </div>
        </form>
        <p className="text-black text-center ">
          have an account?{" "}
          <Link href="/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
