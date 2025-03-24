"use client"

import deleteBooking from "@/libs/deleteBooking";
import { useSession } from "next-auth/react";
import DateReserve from "./DateReserve";
import CampgroundReserve from "./CampgroundReserve";
import { useState } from "react";
import { Dayjs } from "dayjs";
import editBooking from "@/libs/editBooking";
import dayjs from "dayjs";

export default function DeleteEditBooking({ campground_id,booking_id,apptDate, campJson }: { campground_id: string,booking_id: string,apptDate:string, campJson: CampJson }) {
    const { data: session } = useSession();
    const [isEditing, setIsEditing] = useState(false); // State to control visibility of edit form
    const [bookingDate, setBookingDate] = useState<Dayjs>(dayjs(apptDate));
    const [bookingcampground, setBookingcampground] = useState<string|null>(campground_id);

    // If there's no session, don't render the component
    if (!session) return null;

    // Function to handle the "Edit Booking" button click
    const handleEditBookingClick = () => {
        console.log("bookingdateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",bookingDate);
        setIsEditing(true);
    };

    
    return (
        <div>
            {/* Remove booking button */}
            <button
                onClick={() => deleteBooking(session?.user.token, booking_id)}
                className="mt-2 text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-3 py-1 rounded"
            >
                Remove Booking
            </button>

            {/* Edit booking button */}
            <button
                onClick={handleEditBookingClick}
                className="mt-2 text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-3 py-1 rounded"
            >
                Edit Booking
            </button>

            {/* Render the edit form when isEditing is true */}
            {isEditing && (
                <div>
                    <CampgroundReserve  campsJson={campJson} onCampgroundChange={(value:string)=>setBookingcampground(value) }></CampgroundReserve>
                    <DateReserve
                          onDateChange={(value: Dayjs) => {setBookingDate(value); alert(value)}}
                    />
                    { bookingDate && bookingcampground &&(
                        <button  onClick={() => editBooking(session?.user.token,bookingDate.toString(),bookingcampground, booking_id)}
                        className="mt-2 text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-3 py-1 rounded">
                       submit edit {bookingDate.toString()} {bookingcampground}
                   </button>
                    )
                        
                    }
                </div>
                
                
            )}
        </div>
    );
}
