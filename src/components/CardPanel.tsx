'use client'
import { useReducer,useState,useEffect } from "react"
import Card from "./Card"
import Link from "next/link";
import getVenues from "@/libs/getVenues";

export default function CardPanel() {

    // Initial Map with predefined venues and ratings of 0
    const initialMap = new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0],
    ]);

    const compareReducer = (mapNameRating: Map<string, number>, action: { type: string, venueName: string, venueRating: number }) => {
        switch (action.type) {
            case 'add': {
                // Update the rating of the venue
                mapNameRating.set(action.venueName, action.venueRating);
                return new Map(mapNameRating);  // Return a new Map after the update
            }
            case 'remove': {
                // Remove the venue from the Map
                mapNameRating.delete(action.venueName);
                return new Map(mapNameRating);  // Return a new Map after deletion
            }
            default:
                return mapNameRating;
        }
    }

    const [mapNameRating, dispatchCampare] = useReducer(compareReducer, initialMap);



    // const mockVenueRepo = [
    //     {vid:"001", name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
    //     {vid:"002", name: "Spark Space",        image: "/img/sparkspace.jpg" },
    //     {vid:"003", name: "The Grand Table",    image: "/img/grandtable.jpg" }
    // ]

    const [venueResponse,setVenueResponse]=useState<VenueJson | null>(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const venues = await getVenues()
            setVenueResponse(venues)
        }
        fetchData()
    })

    if(!venueResponse) return (<p>Card Panel is Loading ...</p>)

    return (
        <div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
            {
                    venueResponse.data.map((venueItem:VenueItem)=>(
                        <Link href={`/car/${venueItem.id}`} className="w-1/5">
                             <Card venueName={venueItem.name} imgSrc={venueItem.picture} onCompare={(venue: string, rating: number) => dispatchCampare({ type: 'add', venueName: venue, venueRating: rating })}/>
                        </Link>
                    ))
            }
            </div>

            <div className="w-full text-xl font-bold font-new-york">
                Venue List with Ratings: {mapNameRating.size}
            </div>

            {Array.from(mapNameRating).map(([venue, rating]) =>
                <div data-testid={venue} key={venue + rating} onClick={() => dispatchCampare({ type: 'remove', venueName: venue, venueRating: rating })} className="font-new-york">
                    {venue + " : " + rating}
                </div>
            )}
        </div>
    )
}
