import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CardHome } from "../components/Card";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import logo from "../assets/les-logo-2.png";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    fetchAllEvent();
  }, []);

  const fetchAllEvent = async () => {
    const res = await fetch("https://live-event.social/events");
    const data = await res.json();
    console.log(data.data.data);
    setAllEvent(data.data.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center content-center">
        <div className="flex flex-col h-screen justify-center ">
          <Image
            src={logo}
            alt="Loading"
            width={200}
            height={200}
            className="animate-pulse"
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>Live Event Social - Home</title>
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
            href="/les-logo2.png"
          />
        </Head>
        <Layout>
          <div className="flex items-center my-10">
            <div className="grid grid-flow-row auto-rows-max w-full gap-8 my-8 mx-10 lg:mx-36 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 content-center">
              {allEvent.map((item) => (
                <CardHome
                  key={item.id}
                  imageEvent={item.image_url}
                  titleEvent={item.event_name}
                  dateStart={item.date_start}
                  timeStart={item.start_at}
                  price={item.price}
                  onClickDetailEvent={() =>
                    router.push(`/detail-event/${item.id}`)
                  }
                />
              ))}
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
