'use client'
import DateReserve from '@/components/DateReserve'
import { Select, MenuItem, TextField, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { useSearchParams } from 'next/navigation'
import BookingList from '@/components/BookingList'
import { useEffect } from 'react'
import getHotel from '@/libs/getHotel'
import { useSession } from 'next-auth/react'

export default function Booking() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    
    const { data:session } = useSession();

    const [checkInDate, setCheckInDate] = useState<Dayjs|null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Dayjs|null>(null);
    
    if(!session) return (
        <div>
            <script>
                window.location.path = "/api/v1/auth/signin"
            </script>
        </div>
    )
    
    if(!id) return (
        <div>
            <BookingList/>
        </div>
    );

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await getHotel(id);

                if(!response) throw new Error("Failed to fetch data.");

                setItem(response);
                
            } catch(err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();

    }, []);

    if(loading) return (<div></div>)

    const makeBooking = () => {
        if(checkInDate && session && checkOutDate) {
            alert("test");
        }
    }

    return (
        <div className="w-full">
            <div className="text-2xl text-center text-black mb-[3%]">{item.data.name}</div>
            <form action="#" className="bg-slate-100 rounded-lg space-y-5 w-[100%] p-10 flex flex-col justify-center items-center">
                <div>
                    <div className="text-md text-black">Check-In Date</div>
                    <DateReserve onDateChange={(value:Dayjs)=>{setCheckInDate(value);}}/>
                </div>
                <div>
                    <div className="text-md text-black">Check-Out Date</div>
                    <DateReserve onDateChange={(value:Dayjs)=>{setCheckOutDate(value);}}/>
                </div>
                <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 p-3 shadow-sm text-white" onClick={makeBooking}>
                    Book Hotel
                </button>
            </form>
        </div>
    )

}