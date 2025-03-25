import { resolve } from "path"
export default async function getCampgrounds() {


    const response = await fetch(`https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/campgrounds`);


    if(!response.ok){
        throw new Error("Fail to fetch venues")
    }

    console.log(response.json);
    return await response.json()
}


