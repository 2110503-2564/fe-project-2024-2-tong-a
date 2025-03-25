import { resolve } from "path"
export default async function getCampgrounds() {

    // await new Promise((resolve)=>setTimeout(resolve,300))
    const response = await fetch("http://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/campgrounds");


    if(!response.ok){
        throw new Error("Fail to fetch venues")
    }
    return await response.json()
}


