import React, { useState } from "react";
import { Input } from "../components/Input";
import Layout from "../components/Layout";

const EditProfile = () => {
  const [file, setFile] = useState(null);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="px-10 py-10 min-w-[40%] shadow-xl">
          <form action="" className="flex flex-col gap-4 min-w-[40%] mb-4">
            <Input type="file" placeholder="Fullname" />
            <Input type="text" placeholder="Fullname" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="text" placeholder="No. Telp" />
            <Input type="text" placeholder="Address" />
          </form>
          <button className="text-white text-center bg-blue-700 p-2">
            UPDATE
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default editProfile;
