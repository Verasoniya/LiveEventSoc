import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardMyEvent } from "../components/Card";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import logo from "../assets/les-logo-2.png";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
// import { FaPlus } from "react-icons/fa";

function MyListEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [mylist, setMyList] = useState([]);

  useEffect(() => {
    fetchMyList();
  }, []);

  const fetchMyList = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcyMDY4MjIsInVzZXJJZCI6OX0.hUnTrOSxipIRGGuo4VqtImY1l6WAT7V9AWuG217rrkM";
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://live-event.social/events/mylists", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        console.log(data);
        setMyList(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <div className="flex justify-center content-center">
        <div className="flex flex-col h-screen justify-center ">
          <Image src={logo} alt="Loading" width={200} height={200} className="animate-pulse" />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>Live Event Social - My List Event</title>
          <link rel="shortcut icon" type="image/png" sizes="16x16" href="/les-logo2.png" />
        </Head>
        <Layout>
          <div className="w-14 h-14 text-3xl absolute bottom-12 right-8 md:bottom-14 md:right-16">
            <CustomButton label={"+"} radius={"50%"} onClick={() => router.push("create-event")} />
          </div>
          <div className="flex justify-center">
            <div className="flex self-start w-3/4 mt-10">
              <p className="font-semibold text-2xl">My List Event</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="grid grid-flow-row auto-rows-max w-full gap-8 my-8 mx-10 lg:mx-36 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 content-center">
              {mylist.map((item) => (
                <CardMyEvent
                  key={item.id}
                  imageEvent={item.image_url}
                  titleEvent={item.event_name}
                  dateStart={item.date_start}
                  timeStart={item.start_at}
                  price={item.price}
                  onClickDetailEvent={() => router.push(`/detail-event/${item.id}`)}
                />
              ))}
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default MyListEvent;
