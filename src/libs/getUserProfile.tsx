"use server"
export default async function getUserProfile(token:string){
    console.log(token)

    const response = await fetch(`http://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/auth/me`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`,
        }
    })

    console.log(response)

    if(!response.ok){
        throw new Error("Cannot get user profile")
    }

    return await response.json()
}