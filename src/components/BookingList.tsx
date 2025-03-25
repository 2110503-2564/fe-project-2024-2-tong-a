
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import deleteBooking from "@/libs/deleteBooking";
import { useSession } from "next-auth/react";
import DeleteEditBooking from "./DeleteEditBooking";


// Define the Booking and Campground types
import { BookingJson,CampJson,Booking } from "../../interface";


export default  async function BookingList({bookingsJson,campJson}:{bookingsJson:BookingJson,campJson:CampJson}) {
 const bookingsJsonResult = await bookingsJson
 const campsJsonResult = await campJson
       const session = await getServerSession(authOptions);
// const {data:session}=useSession()
 //  console.log(session?.user.token)


    // Log the session object to the console

    // Get the venueBookings (reservations) from Redux store
    if (!session) return null;

   // const campBookings = await getBookings(session.user.token);
    console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    console.log("campground bookingssssssssssssssssss", bookingsJsonResult.data[0]);

    return (
        <div>
            {bookingsJsonResult.count > 0 ? (
                // If there are bookings
                bookingsJsonResult.data.map((booking: Booking) => ( // Explicitly define the type of 'booking'
                    <div
                        key={booking.apptDate} // Added a key prop to avoid React warning
                        className="bg-[#f0e5da] rounded px-5 mx-5 py-2 my-2" // Changed to a brown-gray color
                    >   
                        <div className="text-base "> campground: {booking.campground.name}</div>
                        <div className="text-base "> date: {new Date(booking.apptDate).toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })}
</div>

                         {/* Accessing campground.name */}
                        <DeleteEditBooking campground_id={booking.campground._id} apptDate={booking.apptDate}booking_id= {booking._id.toString() } campJson={campsJsonResult}></DeleteEditBooking>
                    </div>
                ))
            ) : (
                // If there are no bookings
                <div className="text-center text-xl py-5 text-[#569746]" >
                    No Campground Booking
                </div>
            )}
        </div>
    );
}
