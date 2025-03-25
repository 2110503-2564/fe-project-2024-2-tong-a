'use client'
import { Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

interface CampItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
}


export default function CampgroundReserve({ onCampgroundChange, campsJson }: { onCampgroundChange: Function, campsJson: CampJson }) {
    const [campground, setCampground] = useState<string>("");


    return (
        <div className="flex justify-center items-center">
            <Select
                variant="standard"
                name="Location"
                id="location"
                value={campground}
                onChange={(e) => {
                    setCampground(e.target.value);
                    onCampgroundChange(e.target.value);
                }}
            >
                {/* Dynamically map over the campgrounds and create a MenuItem for each */}
                {campsJson.data.map((camp) => (
                    <MenuItem value={camp._id} >
                        {camp.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
