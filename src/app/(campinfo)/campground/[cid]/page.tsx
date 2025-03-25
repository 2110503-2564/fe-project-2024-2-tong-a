
import Image from "next/image"
import getCampground from "@/libs/getCampground"
import getUserProfile from "@/libs/getUserProfile"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function CardDetailPage({params}:{params:{cid:string}}) {
    const session = await getServerSession(authOptions)

<<<<<<< HEAD
    if(!session || !session.user.token) return <div className="flex justify-center items-center min-h-screen">
    <p className="text-red-500 mt-4 text-center">You need to be logged in look at campground.</p>
  </div>
    const CampgroundDetail = await getCampground(session?.user.token,params.cid)
    
    console.log("campssssssssssssssssssssssssssssssssssssssssss",CampgroundDetail)
    // Log the CampgroundDetail data to inspect it
    // console.log("CampgroundDetail: ", CampgroundDetail)

    return (
        <main className="pt-[80px] px-5">
            <h1 className="text-center font-bold text-3xl mb-5 text-[#569746]">{CampgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                {/* Assuming there's a valid picture URL */}
                <Image 
                    src={CampgroundDetail.data.picture} 
                    alt="Campground Image" 
                    width={500} 
                    height={300} 
                    className="rounded-lg w-[30%]"
                />
                <div className="flex flex-col my-5 text-left ">
                    
                    <div className="text-md mx-5">Name: {CampgroundDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {CampgroundDetail.data.address}</div>
                    <div className="text-md mx-5">District: {CampgroundDetail.data.district}</div>
                    <div className="text-md mx-5">Postal Code: {CampgroundDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {CampgroundDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {CampgroundDetail.data.dailyrate}</div>           
                    
                    <div className="flex flex-row items-center justify-center mt-4">                    {session ? (
                        <Link href={`/booking?id=${params.cid}&name=${CampgroundDetail.data.name}`}>
                        <button className="block bg-[#FF9BE6] text-[#DAFFD1] border border-[#FF9BE6] hover:bg-[#DAFFD1] hover:text-[#FF9BE6] font-semi py-2 px-4 rounded">
                            Make Reservation
                        </button>
                        </Link>
                    ) : (
                        <p className="text-red-500 mt-4">You need to be logged in to make a reservation.</p>
                    )}
                    </div>
||||||| 1c25602
    return(
        <main className="text-center pt-[80px] px-5">
            <h1 className="text-center font-bold">{VenueDetail.data.name}</h1>
            <div className="flex flex-row  my-5">
                <Image src={VenueDetail.data.picture} alt='Venue Image' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="flex flex-col  my-5">
                <div className="text-md mx-5">Name : {VenueDetail.data.name}</div>
                <div className="text-md mx-5">Address : {VenueDetail.data.address}</div>
                <div className="text-md mx-5">District : {VenueDetail.data.district}</div>
                <div className="text-md mx-5">Postal Code: {VenueDetail.data.postalcode}</div>
                <div className="text-md mx-5">Tel : {VenueDetail.data.tel}</div>
                <div className="text-md mx-5">Daily Rate : {VenueDetail.data.dailyrate}</div>           
=======
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
>>>>>>> test/patcharamon
                </div>
<<<<<<< HEAD

||||||| 1c25602
=======
                {session ? (
                <Link href={`/booking?id=${params.cid}&name=${VenueDetail.data.name}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                        Make Reservation
                    </button>
                </Link>
            ) : (
                <p className="text-red-500 mt-4">You need to be logged in to make a reservation.</p>
            )}
>>>>>>> test/patcharamon
            </div>
        </main>
    )
}