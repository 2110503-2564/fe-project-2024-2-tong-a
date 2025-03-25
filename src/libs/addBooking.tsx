"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/db/dbConnect';
import Booking from '@/db/models/Booking';
import { Dayjs } from 'dayjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { useSession } from 'next-auth/react';
import getUserProfile from './getUserProfile';

export default async function addBooking( token:string,camp_id: string, appData: string) {
   const session = await getServerSession(authOptions);
    
   
    if(!session)return null
    //    console.log('Session User add Booking:', session);
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeee:",session?.user.token)
     const profile = await getUserProfile(session?.user.token)
   //  const id = session?.user._id
   const id = profile.data._id
    // const user_id = profile.data._id    


    const response = await fetch(`http://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/campgrounds/${camp_id}/bookings`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${session?.user.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            appData,
            id
        }),
    })
    
    const response_json = await response.json();
    if(response.ok){
        return "good"
    }
    if (!response.ok) {
        console.log("responseeeeeeeeee",response_json);
        //throw new Error("Failed to addBooking");
        
    }
    

    return response_json.message
} 