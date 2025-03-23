'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers= ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    let [index,setIndex] =useState(0)
    const router = useRouter()

    const {data:session}=useSession()
    console.log(session?.user.token)
    //

    return (
        <div className = {styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src = {covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>
                    Turn any event into a celebration, Rent everything you need for an unforgettable party</h3>
            </div>
            {
                session?<div className="z-30 absolute top-5 right-10  text-base text-white">
                    Welcome {session.user?.name}
                </div>:null
            }
            <button 
                className="text-white text-sm py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:text-gray-500 flex items-center"
                onClick={(e) => { e.stopPropagation(); router.push('/venue') }}
                >
                Select Venue
                {/* Right Arrow Icon */}
                <svg 
                    className="w-4 h-4 ml-2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M5 12h14M12 5l7 7-7 7"
                    />
                </svg>
                </button>
        </div>
    );
}