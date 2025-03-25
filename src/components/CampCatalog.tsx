'use client'
import Link from "next/link";
import Card from "./Card";
import { CampJson,Campground } from "../../interface";



export default async function CampCatalog({campsJson}:{campsJson:CampJson}){
    const campsJsonResult : CampJson = await campsJson
    console.log(campsJsonResult)


    return (
        <>
        Explore {campsJsonResult.count} camps in our catalog
        <div style={{margin:"20px" , display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"space-around" , padding:"10px", alignContent:"space-around"}}>
                {
                    campsJsonResult.data.map((campItem : Campground)=>(
                        <Link key={campItem._id} href={`/campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-1 sm:p-4 md:p-4 lg:p-8">
                        <Card campName={campItem.name} imgSrc={"/img/"+campItem.name+".jpg"} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}