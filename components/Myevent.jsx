import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardMyJoined } from "../components/Card";

const Myevent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }

    axios
      .get("https://live-event.social/events/mylists", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setData([...data, res.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data.map((item) => (
        <CardMyJoined
          key={item.id}
          TitleEvent={item.event_name}
          dateStart={item.date_start}
          timeStart={item.start_at}
          price={item.price}
          imageEvent={item.image_url}
        />
      ))}
    </>
  );
};

export default Myevent;
