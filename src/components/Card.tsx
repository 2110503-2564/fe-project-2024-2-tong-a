//import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({campName,imgSrc,rating,onRate}:{campName:string,imgSrc:string, rating?: number, onRate?: (rating: number) => void}) {
    
    return(
        <InteractiveCard contentName={campName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Camp'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px]'>
                <h1>{campName}</h1>           
            </div>
            {rating !== undefined && onRate && (
            <Rating
                id={`${campName} Rating`}
                name={`${campName} Rating`}
                data-testid={`${campName} Rating`}
                value={rating}
                onChange={(_, newValue) => { if (onRate) onRate(newValue ?? 0); }}
            />
            )}
        </InteractiveCard>
        
    );
}