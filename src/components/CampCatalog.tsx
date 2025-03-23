'use client'
import Link from "next/link";
import Card from "./Card";

interface CampItem {
    _id: string,
    name: string,
    address: string,
    district:string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
}
interface CampJson {
    success:boolean,
    count: number,
    pagination: Object,
    data: CampItem[]
}

export default async function CampCatalog({campsJson}:{campsJson:Promise<CampJson>}){
    const campsJsonResult = await campsJson

    return (
        <>
        Explore {campsJsonResult.count} camps in our catalog
        <div style={{margin:"20px" , display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"space-around" , padding:"10px", alignContent:"space-around"}}>
                {
                    campsJsonResult.data.map((campItem : CampItem)=>(
                        <Link key={campItem.id} href={`/camp/${campItem.id}`} className="w-1/5" >
                        <Card campName={campItem.name} imgSrc={campItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}