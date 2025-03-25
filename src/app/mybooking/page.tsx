
import BookingList from "@/components/BookingList"
import getBookings from "@/libs/getBookings"
import getCampgrounds from "@/libs/getCampgrounds";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { BookingJson,CampJson } from "../../../interface";
export default async function CartPage(){
    const session = await getServerSession(authOptions);

    if(!session) return null
    const bookings : BookingJson= await getBookings(session?.user.token)
    const campgrounds : CampJson= await getCampgrounds()
    return(
        <main>
            <BookingList bookingsJson={bookings} campJson={campgrounds}></BookingList>
        </main>
    )
}