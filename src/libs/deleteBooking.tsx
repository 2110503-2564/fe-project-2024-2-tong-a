"use server"
export default async function deleteBooking(token:string,booking_id:string){
   

    const response = await fetch(`http://localhost:5000/api/v1/bookings/${booking_id}`,{
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