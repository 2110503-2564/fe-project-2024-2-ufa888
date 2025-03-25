'use client'
import DateReserve from '@/components/DateReserve'
import { Select, MenuItem, TextField, SelectChangeEvent } from '@mui/material'
import { MouseEventHandler, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addBooking } from '@/redux/features/bookSlice'
import { BookingItem } from '../../../interfaces'

export default function Booking() {

    const dispatch = useDispatch<AppDispatch>();

    
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);
    const [tel, setTel] = useState<string>("");
    const [nameLastname, setNameLastName] = useState<string>("");
    const [venue, setVenue] = useState<string>("Bloom");

    const makeBooking = () => {
        console.log("test");
        if(nameLastname && venue && tel && reserveDate) {
            const item:BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: dayjs(reserveDate).format("YYYY/MM/DD"),
            }
            dispatch(addBooking(item));
        }
    }
    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameLastName(event.target.value);
    }

    const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTel(event.target.value);
    }

    const handleVenueChange = (event: SelectChangeEvent<string>) => {
        setVenue(event.target.value);
    }

    return (
        <div>
            <form action="#" className="bg-slate-100 rounded-lg space-y-5 w-[100%] p-10 flex flex-col justify-center items-center">
                <TextField id="name" label="Name-Lastname" name="Name-Lastname" variant='standard' value={nameLastname} onChange={handleNameChange}/>
                <TextField id="contact" label="Contact-Number" name="Contact-Number" variant='standard' value={tel} onChange={handleTelChange}/>
                <Select variant="standard" id="venue" className="h-[2em] w-[200px]" value={venue} onChange={handleVenueChange}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
                <DateReserve onDateChange={(value:Dayjs)=>{setReserveDate(value);}}/>
                <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 p-3 shadow-sm text-white" onClick={makeBooking}>
                    Book Venue
                </button>
            </form>
        </div>
    )
}