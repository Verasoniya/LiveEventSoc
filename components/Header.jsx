import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const Header = () => {
  const [user_name, setUser_name] = useState("");
  const [token, setToken] = useState("");

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
        setUser_name(data.data.data.user_name);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between shadow-lg">
      <div className="text-2xl font-bold">
        <Link id="to-homepage" href="/">
          Event.
        </Link>
      </div>
      <div className="flex gap-4 font-bold">
        {token ? (
          <>
            <Link
              id="to-myevent"
              className="text-black font-bold"
              href="myevent"
            >
              My Event
            </Link>
            <Link
              id="to-profile"
              className="text-black font-bold"
              href="profile"
            >
              {user_name}
            </Link>
          </>
        ) : (
          <>
            <Link id="to-login" className="text-black font-bold" href="login">
              Login
            </Link>
            <Link
              id="to-register"
              className="text-black font-bold"
              href="register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
