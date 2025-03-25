
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import deleteBooking from "@/libs/deleteBooking";
import { useSession } from "next-auth/react";
import DeleteEditBooking from "./DeleteEditBooking";

// Define the Booking and Campground types
interface Campground {
    _id: string;
    name: string;
    province: string;
    tel: string;
    id: string;
}

interface Booking {
    _id:Object;
    apptDate: string;
    user: string;
    campground: Campground; // campground is an object of type Campground
}

interface BookingJson {
    success:boolean,
    count: number,
    pagination: Object,
    data: Booking[]
}


export default  async function BookingList({bookingsJson,campJson}:{bookingsJson:Promise<BookingJson>,campJson:Promise<CampJson>}) {
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
    console.log("campground bookings", bookingsJsonResult);

    return (
        <div>
            {bookingsJsonResult.count > 0 ? (
                // If there are bookings
                bookingsJsonResult.data.map((booking: Booking) => ( // Explicitly define the type of 'booking'
                    <div
                        key={booking.apptDate} // Added a key prop to avoid React warning
                        className="bg-[#f0e5da] rounded px-5 mx-5 py-2 my-2" // Changed to a brown-gray color
                    >   
                        <div className="text-sm px-3">campground: {booking.campground.name}</div>
                        <div className="text-xl py-1">
  {new Date(booking.apptDate).toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })}
</div>
                        <div className="text-sm px-3">user: {booking.user}</div>
                        <div className="text-sm px-3">booking: {booking._id.toString()}</div>
                         {/* Accessing campground.name */}
                        <DeleteEditBooking campground_id={booking.campground._id} apptDate={booking.apptDate}booking_id= {booking._id.toString() } campJson={campsJsonResult}></DeleteEditBooking>
                    </div>
                ))
            ) : (
                // If there are no bookings
                <div className="text-center text-xl font-new-york">
                    No Campground Booking
                </div>
            )}
        </div>
    );
}
