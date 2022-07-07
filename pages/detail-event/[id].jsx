import Image from "next/image";
import React, { useEffect, useState } from "react";

import CustomButton from "../../components/CustomButton";
import { Comments } from "../../components/Comments";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Head from "next/head";
import { useRouter } from "next/router";
import logo from "../../assets/les-logo-2.png";

function DetailEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [event_name, setEventName] = useState("");
  const [full_name, setFullName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescrip] = useState("");
  const [date_start, setDateStart] = useState("");
  const [date_finish, setDateFinish] = useState("");
  const [start_at, setStartAt] = useState("");
  const [finish_at, setFinishAt] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    fetchDetailEvent();
  }, []);

  useEffect(() => {
    if (content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [content]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcyMTIyODYsInVzZXJJZCI6OX0.hZ5HC06L8-4D2Ck6Ek2YV4VlCjwAIBCGjVDhA5f2Ynk";
  const { id } = router.query;

  const fetchDetailEvent = async () => {
    var requestDetailEvent = { method: "GET" };

    fetch(`https://live-event.social/events/${id}`, requestDetailEvent)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        const { event_name, image_url, description, date_start, date_finish, start_at, finish_at, price, address } = data;
        const { full_name } = data.user;
        console.log(image_url);

        setEventName(event_name);
        setFullName(full_name);
        setImageUrl(image_url);
        setDescrip(description);
        setDateStart(date_start);
        setDateFinish(date_finish);
        setStartAt(start_at);
        setFinishAt(finish_at);
        setPrice(price);
        setAddress(address);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => fetchAttendees());
  };

  const fetchAttendees = async () => {
    var requestAttendees = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://live-event.social/attendees/events/${id}`, requestAttendees)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        console.log(data);
        setAttendees(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => fetchComments());
  };

  const fetchComments = async () => {
    var requestComments = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`https://live-event.social/comments/${id}`, requestComments)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setLoading(false));
  };

  const handleAddComments = async (e) => {
    const event_id = parseInt(id);
    setLoading(true);
    e.preventDefault();
    const body = {
      event_id,
      content,
    };
    var requestAddComments = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    };
    fetch(`https://live-event.social/comments`, requestAddComments)
      .then((response) => response.json())
      .then((result) => {
        alert("Your Comments are Added!");
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => fetchComments());
  };

  const handleJoin = async () => {
    var requestJoin = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://live-event.social/attendees/events/${id}`, requestJoin)
      .then((response) => response.json())
      .then((result) => {
        alert("Successfully to Join!");
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setLoading(false));
  };

  // const handleCancelJoin = async () => {
  //   var requestJoin = {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   fetch(`https://live-event.social/attendees/${id}`, requestJoin)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       alert("Canceled to Join!");
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     })
  //     .finally(() => setLoading(false));
  // };

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
          <title>Live Event Social - Detail Event</title>
          <link rel="shortcut icon" type="image/png" sizes="16x16" href="/les-logo2.png" />
        </Head>
        <Layout>
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-start my-10 px-4 md:px-0 w-full md:w-3/4">
              <p className="font-semibold text-2xl mb-2">{event_name}</p>
              <Image src={image_url} alt={image_url} width={"100%"} height={300} className="my-5" />
              <p className="font-semibold text-lg my-2">{full_name.toUpperCase()}</p>
              <div className="flex flex-col md:flex-row mt-6">
                <div className="flex flex-col w-full md:w-2/3">
                  <p className="font-semibold text-lg mb-4">Details of Event</p>
                  <p className="text-base">{description}</p>
                </div>
                <div className="flex flex-col w-full md:w-1/3 ml-0 md:ml-8 mt-4 md:mt-0">
                  <div className="bg-white shadow-xl rounded-lg px-8 py-4 text-sm">
                    <div className="flex my-1">
                      <FaCalendarAlt className="mr-2 self-center" />
                      <p>
                        {date_start} - {date_finish}
                      </p>
                    </div>
                    <div className="flex my-1">
                      <FaClock className="mr-2 self-center" />
                      <p>
                        {start_at} - {finish_at} WIB
                      </p>
                    </div>
                    <div className="flex my-1">
                      <FaDollarSign className="mr-2 self-center" />
                      <p>IDR {price}</p>
                    </div>
                    <div className="flex my-1">
                      <FaMapMarkerAlt className="mr-2 self-center" />
                      <p>{address}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <CustomButton label="JOIN NOW!" onClick={() => handleJoin()} />
                  </div>
                  <div className="mt-8">{/* <CustomButton label="CANCEL" color="red" onClick={() => handleCancelJoin()} /> */}</div>
                </div>
              </div>
              <p className="font-semibold text-lg mt-16 mb-4">Attendees</p>
              <div className="grid w-full md:w-3/4 grid-cols-1 md:grid-cols-2 gap-4">
                {attendees.map((item) => (
                  <div className="flex" key={item.key}>
                    <Image src={item.user.image_url} alt={item.user.image_url} width={40} height={40} className="rounded-full" />
                    <p className="text-base self-center ml-3">{item.user.user_name}</p>
                  </div>
                ))}
              </div>
              <hr className="my-10 border border-neutral-700"></hr>
              <p className="font-semibold text-lg mb-4">Comments</p>
              {comments.map((item) => (
                <div className="my-1" key={item.key}>
                  <Comments userComments={item.content} username={item.user.user_name} imageProfile={item.user.image_url} />
                </div>
              ))}
              <form className="my-8 w-full md:w-2/4 self-end" onSubmit={(e) => handleAddComments(e)}>
                <Input type="text" placeholder="Add your comments" onChange={(e) => setContent(e.target.value)} />
                <div className="flex justify-end">
                  <div className="w-24 mt-6">
                    <CustomButton label="Send" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default DetailEvent;
