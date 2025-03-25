"use server"
export default async function deleteBooking(token:string,booking_id:string){
   

    const response = await fetch(`https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/bookings/${booking_id}`,{
        method:"DELETE",
        headers:{
            authorization: `Bearer ${token}`,
        }
    })

   

    if(!response.ok){
        throw new Error("Cannot delete booking")
    }

    return await response.json()
}