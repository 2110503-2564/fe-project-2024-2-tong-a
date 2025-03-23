import getVenues from "@/libs/getVenues"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CampCatalog from "@/components/CampCatalog"
export default async function Card(){
    const camps = await getVenues()
    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Campground</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <CampCatalog campsJson={camps}/>
            </Suspense>
        </main>
    )
}