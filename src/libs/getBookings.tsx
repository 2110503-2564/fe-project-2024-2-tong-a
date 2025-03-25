"use server"
export default async function getBookings(token:string){
    const response = await fetch("https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/bookings",{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`,
        }
    })


    if(!response.ok){
        throw new Error("Cannot get bookings")
    }
   
   const data = await response.json();
   return data;
    
}