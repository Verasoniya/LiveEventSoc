import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../gambar/profile.jpg";
import {
  FaUserCircle,
  FaPencilAlt,
  FaTrashAlt,
  FaPhone,
  FaMapMarker,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Layout from "../components/Layout";
import { CardMyJoined } from "../components/Card";
import Link from "next/link";
import axios from "axios";
import Myevent from "../components/Myevent";
import { useRouter } from "next/router";
const Profile = () => {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [full_name, setFull_name] = useState("");
  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setaddress] = useState("");
  const [create_at, setCreate_at] = useState("");
  const [image_url, setImage_url] = useState("");
  const [token, setToken] = useState("");

  const handleDeleteProfile = async () => {
    if (!window.confirm("Are you sure to delete your profile?")) {
      alert("user tidak jadi dihapus");
    }

    axios
      .delete(`https://live-event.social/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Delete Profile Success");
        localStorage.removeItem("token");
        router.push("/");
      })
      .catch((err) => console.log(error));
  };

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
      setToken(token);
    }

    axios
      .get("https://live-event.social/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        console.log(data);
        setFull_name(data.data.data.full_name);
        setUser_name(data.data.data.user_name);
        setEmail(data.data.data.email);
        setPhone_number(data.data.data.phone_number);
        setaddress(data.data.data.address);
        setId(data.data.data.id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className=" text-center">
          <Image
            src={profile}
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="">
          <div className="font-bold text-xl mb-4">{full_name}</div>
          <div className="flex items-center mb-4">
            <FaUserCircle className="w-5 h-5" />
            <p>{user_name}</p>
          </div>
          <div className="flex items-center mb-4">
            <MdEmail className="w-5 h-5" />
            <p>{email}</p>
          </div>
          <div className="flex gap-4 ">
            <button className="p-2 bg-blue-700 text-white">
              <Link id="to-profile" href="/editprofile/${id}">
                <FaPencilAlt />
              </Link>
            </button>
            <button className="p-2 bg-red-600 text-white">
              <FaTrashAlt onClick={handleDeleteProfile} />
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex items-center mb-4">
            <FaPhone className="w-5 h-5" />
            <p>{phone_number}</p>
          </div>
          <div className="flex items-center">
            <FaMapMarker className="w-5 h-5" />
            <p>{address}</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="text-center font-bold mb-10 mt-10">My Joined Event</div>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 gap-5">
        <Myevent />
      </div>
    </Layout>
  );
};

export default Profile;
