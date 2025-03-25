
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
    const CampgroundDetail = await getCampground(session?.user.token,params.cid)

    console.log("campssssssssssssssssssssssssssssssssssssssssss",CampgroundDetail)
    // Log the CampgroundDetail data to inspect it
    // console.log("CampgroundDetail: ", CampgroundDetail)

    return (
        <main className="text-center pt-[80px] px-5">
            <h1 className="text-center font-bold">{CampgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                {/* Assuming there's a valid picture URL */}
                <Image 
                    src={CampgroundDetail.data.picture} 
                    alt="Campground Image" 
                    width={500} 
                    height={300} 
                    className="rounded-lg w-[30%]"
                />
                <div className="flex flex-col my-5">
                    <div className="text-md mx-5">Name: {CampgroundDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {CampgroundDetail.data.address}</div>
                    <div className="text-md mx-5">District: {CampgroundDetail.data.district}</div>
                    <div className="text-md mx-5">Postal Code: {CampgroundDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {CampgroundDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {CampgroundDetail.data.dailyrate}</div>           
                </div>
                {session ? (
                <Link href={`/booking?id=${params.cid}&name=${CampgroundDetail.data.name}`}>
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