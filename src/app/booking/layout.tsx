import BookingMenu from "@/components/BookingMenu";
import styles from './bookings.module.css'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";

export default async function BookingLayout ({children}:{children:React.ReactNode}){
    const nextAuthSession = await getServerSession(authOptions)
    
    return(
        <div className={styles.sectionlayout}>
        <NextAuthProvider session={nextAuthSession}>
            <BookingMenu/>
            {children}
            </NextAuthProvider>
        </div>
    );
}