"use server"
export default async function getBookings(token:string){
    const response = await fetch("http://localhost:5000/api/v1/bookings",{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`,
        }
    })


    if(!response.ok){
        throw new Error("Cannot get bookings")
    }
   // console.log(response.json())
   const data = await response.json();
   return data;
    
}