'use client'
import Card from '@/components/Card'
import Link from 'next/link'

export default function CardPanel() {
    
    /*
        Mock Data for Demonstration Only
    */
   
   const mockVenueRepo = [
       { vid: "001", name: "The Bloom Pavilion", image:"/img/bloom.jpg", rating: 2.5 },
       { vid: "002", name: "Spark Space", image:"/img/sparkspace.jpg", rating: 3},
       { vid: "003", name: "The Grand Table", image:"/img/grandtable.jpg", rating: 5 }
    ];
    
    return (
        <div className="mt-[9%]">
            <div className="text-3xl text-black font-bold mb-[30px]">
                Hotel
            </div>
            <div className="flex justify-around mt-[20px]">
                {
                    mockVenueRepo.map((venueItem) => 
                        <Link key={venueItem.name} href={`/venue/${venueItem.vid}`} className="w-1/4">
                            <Card hotelName={venueItem.name} imgSrc={venueItem.image} rating={venueItem.rating}/>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}