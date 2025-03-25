"use client"

import deleteBooking from "@/libs/deleteBooking";
import { useSession } from "next-auth/react";
import DateReserve from "./DateReserve";
import CampgroundReserve from "./CampgroundReserve";
import { useState } from "react";
import { Dayjs } from "dayjs";
import editBooking from "@/libs/editBooking";
import dayjs from "dayjs";
import { CampJson } from "../../interface";
export default function DeleteEditBooking({
    campground_id,
    booking_id,
    apptDate,
    campJson
}: {
    campground_id: string,
    booking_id: string,
    apptDate: string,
    campJson: CampJson
}) {
    const { data: session } = useSession();
    const [isEditing, setIsEditing] = useState(false); // State to control visibility of edit form
    const [bookingDate, setBookingDate] = useState<Dayjs>(dayjs(apptDate));
    const [bookingcampground, setBookingcampground] = useState<string | null>(campground_id);

    // If there's no session, don't render the component
    if (!session) return null;

    // Function to handle the "Edit Booking" button click
    const handleEditBookingClick = () => {
        setIsEditing(true);
    };

    return (
        <div className="space-y-2">
            {/* Remove booking button */}
            <button
                onClick={() => deleteBooking(session?.user.token, booking_id)}
                className="w-full sm:w-auto text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-4 py-2 rounded-lg"
            >
                Remove Booking
            </button>

            {/* Edit booking button */}
            <button
                onClick={handleEditBookingClick}
                className="w-full sm:w-auto text-black text-base mx-5 hover:text-gray-700 bg-[#a19589] border-none px-4 py-2 rounded-lg"
            >
                Edit Booking
            </button>

            {/* Render the edit form when isEditing is true */}
            {isEditing && (
                <div className="space-y-4">
                    <CampgroundReserve campsJson={campJson} onCampgroundChange={(value: string) => setBookingcampground(value)} />
                    <DateReserve onDateChange={(value: Dayjs) => setBookingDate(value)} />

                    {bookingDate && bookingcampground && (
                        <button
                            onClick={() => editBooking(session?.user.token, bookingDate.toString(), bookingcampground, booking_id)}
                            className="w-full sm:w-auto text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-4 py-2 rounded-lg"
                        >
                            Submit Edit
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
