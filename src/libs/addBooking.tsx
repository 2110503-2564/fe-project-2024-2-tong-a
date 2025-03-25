"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/db/dbConnect';
import Booking from '@/db/models/Booking';
import { Dayjs } from 'dayjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { useSession } from 'next-auth/react';
import getUserProfile from './getUserProfile';

export default async function addBooking( user:string,token:string,camp_id: string, apptDate: string) {
//    const session = await getServerSession(authOptions);
    
   
    // if(!session)return null
    //    console.log('Session User add Booking:', session);
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeee:",camp_id)
//      const profile = await getUserProfile(session?.user.token)
//    //  const id = session?.user._id
//    const id = profile.data._id
    // const user_id = profile.data._id    


    const response = await fetch(`https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/campgrounds/${camp_id}/bookings`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            apptDate,
            user
        }),
    })
    
    const response_json = await response.json();
    if(response.ok){
        return "can make a booking"
    }
    if (!response.ok) {
        console.log("responseeeeeeeeee",response_json);
        //throw new Error("Failed to addBooking");
        
    }
    

    return response_json.message
} 