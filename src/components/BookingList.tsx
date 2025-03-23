"use client"

import { useAppSelector, AppDispatch } from "@/redux/store"; // Custom hooks for accessing Redux state and dispatch
import { useDispatch } from "react-redux"; // Dispatch for triggering actions
import { removeBooking } from "@/redux/features/bookSlice"; // Import the removeBooking action

export default function BookingList() {
    // Get the venueBookings (reservations) from Redux store
    const venueBookings = useAppSelector((state) => state.bookSlice.bookItems); // Assuming 'bookItems' contains bookings
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="font-new-york">
            {venueBookings.length > 0 ? (
                // If there are bookings
                venueBookings.map((booking) => (
                    <div
                        className="bg-[#f0e5da] rounded px-5 mx-5 py-2 my-2" // Changed to a brown-gray color
                     
                    >
                        <div className="text-xl py-1">{booking.nameLastname}</div>
                        <div className="text-sm px-3">Contact Number: {booking.tel}</div>
                        <div className="text-sm px-3">Venue: {booking.venue}</div>
                        <div className="text-sm px-3">Booking Date: {booking.bookDate}</div>
                        <button onClick={() => dispatch(removeBooking(booking))}
                                className="mt-2 text-black text-base hover:text-gray-700 bg-[#a19589] border-none px-3 py-1 rounded"
                        >
                            Remove Booking
                        </button>

                    </div>
                ))
            ) : (
                // If there are no bookings
                <div className="text-center text-xl font-new-york">
                    No Venue Booking
                </div>
            )}
        </div>
    );
}
