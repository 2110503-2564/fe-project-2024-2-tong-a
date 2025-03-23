'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select,MenuItem,TextField } from "@mui/material";

export default function DateReserve(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-col justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>

            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/>
            <TextField variant="standard" name=" Contact-Number" label=" Contact-Number"/>

            <Select variant="standard" name="campground" id="campground" className="h-[2em] w-[200px]">
                <MenuItem value="camp1">The Bloom Pavilion</MenuItem>
                <MenuItem value="camp2">Spark Space</MenuItem>
                <MenuItem value="camp3"> The Grand Table</MenuItem>
                <MenuItem value="camp4"> The Grand Table</MenuItem>
            </Select>
        </div>
    );
}