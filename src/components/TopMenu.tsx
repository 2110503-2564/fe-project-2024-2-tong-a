import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function TopMenu() {
    // Fetch the session
    const session = await getServerSession(authOptions);

    // Log the session object to the console
    console.log('Session User:', session);

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Booking' pageRef='/booking' />
            <div className='mx-5 flex items-center absolute left-0 h-full text-[10pt] text-gray-500'>
                {
                    session ? (
                        <Link href="/api/auth/signout" style={{ textDecoration: 'none' }}>
                            <div className={styles.itemcontainer} style={{ textDecoration: 'none' }}>
                                Sign-Out 
                                {/* of {session.user?.name} */}
                            </div>
                        </Link>
                    ) : (
                        <>
                            <Link href="/api/auth/signin" style={{ textDecoration: 'none' }}>
                                <div className={styles.itemcontainer} style={{ textDecoration: 'none' }}>
                                    Sign-in
                                </div>
                            </Link>
                            <Link href="/api/auth/register" style={{ textDecoration: 'none' }}>
                                <div className={styles.itemcontainer} style={{ textDecoration: 'none' }}>
                                    Register
                                </div>
                            </Link>
                        </>
                    )
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking" />
            </div>
        </div>
    );
}
