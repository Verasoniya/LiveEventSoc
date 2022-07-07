import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";

function UpdateEvent() {
  const router = useRouter();
  const [objSubmit, setObjSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const [event_name, setEventName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescrip] = useState("");
  const [date_start, setDateStart] = useState("");
  const [date_finish, setDateFinish] = useState("");
  const [start_at, setStartAt] = useState("");
  const [finish_at, setFinishAt] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [token, setToken] = useState(null);

  const getToken = `${localStorage.getItem("token")}`;
  setToken(getToken);

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcyMTIyODYsInVzZXJJZCI6OX0.hZ5HC06L8-4D2Ck6Ek2YV4VlCjwAIBCGjVDhA5f2Ynk";
  const { id } = router.query;

  useEffect(() => {
    fetchDetailEvent();
  }, []);

  const fetchDetailEvent = async () => {
    var requestDetailEvent = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`https://live-event.social/events/${id}`, requestDetailEvent)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        const { event_name, file, description, date_start, date_finish, start_at, finish_at, price, address, capacity } = data;

        setEventName(event_name);
        setDescrip(description);
        setDateStart(date_start);
        setDateFinish(date_finish);
        setStartAt(start_at);
        setFinishAt(finish_at);
        setPrice(price);
        setCapacity(capacity);
        setAddress(address);
        const insertHTTPS = image.replace("http", "https");
        setFile(insertHTTPS);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    fetch(`https://live-event.social/events/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert("Your Event is Updated");
        setObjSubmit({});
        router.push("/my-list-event");
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <>
      <Head>
        <title>Live Event Social - Update Event</title>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/les-logo2.png" />
      </Head>
      <Layout>
        <form className="flex flex-col items-center">
          <div className="my-10">
            <p className="font-semibold text-2xl">Create Your Event</p>
          </div>
          <div className="w-full md:w-2/4 mb-2 px-6 md:px-0">
            <label className="text-neutral-700">Image of Event</label>
            <Input
              type="file"
              placeholder="Image of Event"
              id="image-event"
              onChange={(e) => {
                setFile(URL.createObjectURL(e.target.files[0]));
                handleChange(e.target.files[0], "file");
              }}
            />
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Title of Event</label>
            <Input type="text" placeholder="Sheila on 7 Concert" id="title-event" value={event_name} onChange={(e) => handleChange(e.target.value, "event_name")} />
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Start Date</label>
              <Input type="date" placeholder="Start Date" id="date-start" value={date_start} onChange={(e) => handleChange(e.target.value, "date_start")} />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">End Date</label>
              <Input type="date" placeholder="End Date" id="date-end" value={date_finish} onChange={(e) => handleChange(e.target.value, "date_finish")} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Start Time</label>
              <Input type="time" placeholder="Start Time" id="time-start" value={start_at} onChange={(e) => handleChange(e.target.value, "start_at")} />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">End Time</label>
              <Input type="time" placeholder="End Time" id="time-end" value={finish_at} onChange={(e) => handleChange(e.target.value, "finish_at")} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Price</label>
              <Input type="number" placeholder="IDR 500.000" id="price" value={price} onChange={(e) => handleChange(e.target.value, "price")} />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">Capacity</label>
              <Input type="number" placeholder="Capacity" id="capacity" value={capacity} onChange={(e) => handleChange(e.target.value, "capacity")} />
            </div>
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Address of Event</label>
            <Input type="text" placeholder="Stadion GBK - Jakarta" id="address-event" value={address} onChange={(e) => handleChange(e.target.value, "address")} />
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Details of Event</label>
            <textarea
              className="resize-y h-32 w-full bg-neutral-300 placeholder-white text-neutral-900 font-normal focus:border focus:border-neutral-500 focus:ring-0 rounded-md p-2 pl-3"
              placeholder="This concert will show Sheila on 7 and other musicians"
              id="address-event"
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6 mb-16">
            <div className="w-full my-2">
              <CustomButton label="CANCEL" id="btn-cancel" color="red" onClick={(e) => handleCancel(e)} />
            </div>
            <div className="w-full my-2">
              <CustomButton label="UPDATE" id="btn-submit" onClick={(e) => handleSubmit(e)} />
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default UpdateEvent;
