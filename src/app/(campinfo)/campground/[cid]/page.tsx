
import Image from "next/image"
import getCampground from "@/libs/getCampground"
import getUserProfile from "@/libs/getUserProfile"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function CardDetailPage({params}:{params:{cid:string}}) {
    const session = await getServerSession(authOptions)

    if(!session || !session.user.token) return <div className="flex justify-center items-center min-h-screen">
    <p className="text-red-500 mt-4 text-center">You need to be logged in look at campground.</p>
  </div>
    const VenueDetail = await getCampground(session?.user.token,params.cid)


    
    
    console.log("campssssssssssssssssssssssssssssssssssssssssss",VenueDetail)
    // Log the VenueDetail data to inspect it
    // console.log("VenueDetail: ", VenueDetail)

    return (
        <main className="text-center pt-[80px] px-5">
            <h1 className="text-center font-bold">{VenueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                {/* Assuming there's a valid picture URL */}
                <Image 
                    src={VenueDetail.data.picture} 
                    alt="Venue Image" 
                    width={500} 
                    height={300} 
                    className="rounded-lg w-[30%]"
                />
                <div className="flex flex-col my-5">
                    <div className="text-md mx-5">Name: {VenueDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {VenueDetail.data.address}</div>
                    <div className="text-md mx-5">District: {VenueDetail.data.district}</div>
                    <div className="text-md mx-5">Postal Code: {VenueDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {VenueDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {VenueDetail.data.dailyrate}</div>           
                </div>
                {session ? (
                <Link href={`/booking?id=${params.cid}&name=${VenueDetail.data.name}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                        Make Reservation
                    </button>
                </Link>
            ) : (
                <p className="text-red-500 mt-4">You need to be logged in to make a reservation.</p>
            )}
            </div>
        </main>
    )
}
