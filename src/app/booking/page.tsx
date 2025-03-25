'use client';

import DateReserve from "@/components/DateReserve";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { getSession } from "next-auth/react"; // Use `getSession` client-side instead
import addBooking from "@/libs/addBooking";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";

import Link from "next/link";
import { profile } from "console";
import { User } from "../../../interface";


export default function Bookings() {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
 // const [session, setSession] = useState<any>(null);  // Track session state

  const urlParams = useSearchParams();
  const cid = urlParams.get('id');
  const name = urlParams.get('name');



  const { data: session } = useSession();
  const user_id = session?.user._id
  

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-2xl font-medium font-new-york  text-[#569746]">New Booking</div>
      <div className="text-xl font-medium font-new-york text-[#FF9BE6]">{name}</div>
      <div className="w-fit space-y-2">
        <DateReserve onDateChange={(value: Dayjs) => setBookingDate(value)} />
      </div>
      {cid && bookingDate && session? (
        <button
          name="Book Campground"
          className="block bg-[#FF9BE6] text-[#DAFFD1] border border-[#FF9BE6] hover:bg-[#DAFFD1] hover:text-[#FF9BE6] font-semi py-2 px-4 rounded"
          onClick={async() => {const response =await addBooking(session?.user._id,session?.user.token,cid, bookingDate.toString());
            alert(response);
          
        }}
        >
          Book Campground
        </button>
      ) : null}
    </main>
  );
}
