import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({venueName, imgSrc, rating}:{venueName:string, imgSrc:string, rating: number}) {

    return (
        <InteractiveCard>
            <div className={`w-full h-[70%] relative rounded-t-lg`}>
                <Image src={imgSrc}
                alt={venueName}
                fill={true}
                style={{objectFit: 'cover'}}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className={`w-full h-[15%] p-[10px] text-black`}>
                {venueName}
            </div>
            <Rating
                className={`p-[10px]`}
                value={rating || 0}
                precision={0.5}
                readOnly
            />
        </InteractiveCard>
    )
}