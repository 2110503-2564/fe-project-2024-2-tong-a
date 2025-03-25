'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    let [index,setIndex] =useState(0)
    const router = useRouter()

    const {data:session}=useSession()
    console.log("Bannner_sessionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",session?.user.token)
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#569746] text-center py-10">
                TONG-A CampGrounds
            </h1>
        <div className="w-full flex items-center justify-between px-10 py-5 space-x-10 relative">
            <div className="relative w-1/2 h-[400px]">
                <Image src="/img/banner.jpg"
                    alt="cover"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between items-center p-6 ">
                <h3 className="text-2xl text-gray-400 font-light px-6 py-10 rounded-lg ">
                    Book with us and enjoy an unforgettable <br />
                    camping experience! When you reserve your spot, <br />
                    you’re not just booking a campsite  <br />
                    — you’re securing great service, a seamless stay,  <br />
                    and the adventure of a lifetime.<br />
                    Let nature meet comfort and create memories that last! 
                </h3>
                <button 
                    className="bg-[#FF9BE6] text-[#DAFFD1] border border-[#FF9BE6] font-semibold py-2 px-4 rounded 
                    hover:bg-[#DAFFD1] hover:text-[#FF9BE6] transition"
                    onClick={(e) => { e.stopPropagation(); router.push('/campground') }}
                >
                    Select your campground
                </button>
            </div>
        </div>
            <h3 className="text-xl text-gray-400 text-center font-light px-6 py-20 rounded-lg ">
            Adventure Starts Here - Book Now for a Hassle-Free Camping Trip!
            </h3>
        </div>
    );
}