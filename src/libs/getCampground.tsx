

export default async function getCampground(token:string,id:string){
    const response = await fetch(`http://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/campgrounds/${id}`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`,
        }
    }
    )
    console.log(response)
    if(!response.ok){
        throw new Error("Failed to fetch vennue")
    }

    return await response.json()
}

