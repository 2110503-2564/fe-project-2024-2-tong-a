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

import Link from "next/link";

interface BookingItem {
  apptDate: string;
  user: string;
  campground: string;
}

export default function Bookings() {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
 // const [session, setSession] = useState<any>(null);  // Track session state

  const urlParams = useSearchParams();
  const cid = urlParams.get('id');
  const name = urlParams.get('name');

  const {data:session} =useSession()
  const user_id = session?.user._id

  // useEffect(() => {
  //   // Fetch the session and log it
  //   const fetchSession = async () => {
  //     const sessionData = await getSession();
  //     setSession(sessionData); // Store session in state
  //     console.log("Session dataaaaaaaaaaaaaaaaaaaa");
  //     console.log("Session data:", sessionData);  // Log session to the console
  //   };
  //   fetchSession();
  // }, []); // Empty dependency array ensures this runs only once when component mounts

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",session,"name:",name)
  


  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium font-new-york">New Reservation</div>
      <div className="text-xl font-medium font-new-york">{name}</div>
      <div className="w-fit space-y-2">
        <DateReserve onDateChange={(value: Dayjs) => setBookingDate(value)} />
      </div>
      {cid && bookingDate && session? (
        <button
          name="Book Venue"
          className="block rounded-md bg-[#7d6d5c] hover:bg-[#594c3f] px-3 py-2 text-white shadow-sm font-new-york"
          onClick={async() => {const response =await addBooking(session?.user.token,cid, bookingDate.toString());
            alert(response);
          
        }}
        >
          Book Venue
        </button>
      ) : null}
    </main>
  );
}
