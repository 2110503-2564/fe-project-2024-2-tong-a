import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function CardDetailPage({params}:{params:{vid:string}}){
    const VenueDetail = await getVenue(params.vid)

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
                </div>
            </div>
            
        </main>
    )
}
