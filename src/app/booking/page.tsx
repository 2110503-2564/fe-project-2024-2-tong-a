'use client'
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux"; // Correct import here, no need for UseDispatch
import { AppDispatch } from "@/redux/store"; // Import AppDispatch
import { addBooking, removeBooking } from "@/redux/features/bookSlice"; // Import removeBooking


export default function Bookings() {
    // Correct usage of useDispatch
    const dispatch = useDispatch<AppDispatch>();

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [venue, setVenue] = useState<string>("");

    const [bookedItems, setBookedItems] = useState<BookingItem[]>([]); // Local state to store current bookings

    // The booking handler function
    const makeBooking = () => {
        if (name && number && venue && bookingDate) {
            const item: BookingItem = {
                nameLastname: name,
                tel: number,
                venue: venue,
                bookDate: bookingDate.format("YYYY/MM/DD"), // assuming bookingDate is a Dayjs object
            };

            // Dispatch the action to add the booking
            dispatch(addBooking(item)); // Correctly passing the payload

            // Update local state (you could also update the store directly instead)
            setBookedItems([...bookedItems, item]);
        } else {
            // Optional: Handle case where fields are missing
            console.log("All fields must be filled.");
        }
    };

    // Remove a booking handler
    const removeBookingHandler = (item: BookingItem) => {
        dispatch(removeBooking(item)); // Dispatch removeBooking action
        setBookedItems(bookedItems.filter((booking) => booking.tel !== item.tel)); // Update local state
    };

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium font-new-york">New Reservation</div>
            <div className="w-fit space-y-2">
                <DateReserve
                    onDateChange={(value: Dayjs) => setBookingDate(value)}
                    onNameChange={(value: string) => setName(value)}
                    onNumberChange={(value: string) => setNumber(value)}
                    onVenueChange={(value: string) => setVenue(value)}
                />
            </div>

            <button
                name="Book Venue"
                className="block rounded-md bg-[#7d6d5c] hover:bg-[#594c3f] px-3 py-2 text-white shadow-sm font-new-york"
                onClick={makeBooking}
            >
                Book Venue
            </button>

         
        </main>
    );
}
