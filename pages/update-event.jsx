import Head from "next/head";
import React from "react";
import CustomButton from "../components/CustomButton";
import { Input } from "../components/Input";
import Layout from "../components/Layout";

function UpdateEvent() {
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
            <Input type="file" placeholder="Image of Event" id="image-event" value={""} onChange={""} />
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Title of Event</label>
            <Input type="text" placeholder="Sheila on 7 Concert" id="title-event" />
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Start Date</label>
              <Input type="date" placeholder="Start Date" id="date-start" />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">End Date</label>
              <Input type="date" placeholder="End Date" id="date-end" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Start Time</label>
              <Input type="time" placeholder="Start Time" id="time-start" />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">End Time</label>
              <Input type="time" placeholder="End Time" id="time-end" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6">
            <div className="w-full my-2">
              <label className="text-neutral-700">Price</label>
              <Input type="number" placeholder="IDR 500.000" id="price" />
            </div>
            <div className="w-full my-2">
              <label className="text-neutral-700">Capacity</label>
              <Input type="number" placeholder="Capacity" id="capacity" />
            </div>
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Address of Event</label>
            <Input type="text" placeholder="Stadion GBK - Jakarta" id="address-event" />
          </div>
          <div className="w-full md:w-2/4 my-2 px-6 md:px-0">
            <label className="text-neutral-700">Details of Event</label>
            <textarea
              className="resize-y h-32 w-full bg-neutral-300 placeholder-white text-neutral-900 font-normal focus:border focus:border-neutral-500 focus:ring-0 rounded-md p-2 pl-3"
              placeholder="This concert will show Sheila on 7 and other musicians"
              id="address-event"
            />
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/4 px-6 md:px-0 justify-center gap-0 md:gap-6 mb-16">
            <div className="w-full my-2">
              <CustomButton label="CANCEL" id="btn-cancel" color="red" onClick={""} />
            </div>
            <div className="w-full my-2">
              <CustomButton label="UPDATE" id="btn-submit" onClick={""} />
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default UpdateEvent;
