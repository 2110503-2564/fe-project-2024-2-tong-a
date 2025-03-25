"use server"

import getCampground from "./getCampground";

export default async function editBooking(token:string,apptDate:string,campground_id:string,booking_id:string){

    const c = await getCampground(token,campground_id)

   const campground_object = c.data

    const response = await fetch(`https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/bookings/${booking_id}`,{
        method:"PUT",
        headers:{
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            apptDate,
            campground:campground_object,
        }),

    });

   
    console.log(campground_object,"editttttttttttttttttttttttttttttttttttt:",response)
    if(!response.ok){
        throw new Error("Cannot edit booking")
    }

    return await response.json()
}


// "use server"
// export default async function editBooking(token:string,apptDate:string,campground_id:string,booking_id:string){
   

//     const response = await fetch(`http://localhost:5000/api/v1/bookings/${booking_id}`,{
//         method:"PUT",
//         headers:{
//             authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             apptDate,
//             campground:campground_id,
//         }),

//     });

   
//     console.log(response)
//     if(!response.ok){
//         throw new Error("Cannot edit booking")
//     }

//     return await response.json()
// }