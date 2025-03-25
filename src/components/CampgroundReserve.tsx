'use client'
import { Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Campground ,CampJson} from "../../interface";




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
    className="w-full sm:w-96" // Adjusts width to 100% on smaller screens, 24rem (96) on larger screens
    style={{ minWidth: "300px" }} // Minimum width to ensure it doesn’t shrink too small
>
    {/* Dynamically map over the campgrounds and create a MenuItem for each */}
    {campsJson.data.map((camp:Campground) => (
        <MenuItem key={camp._id} value={camp._id}>
            {camp.name}
        </MenuItem>
    ))}
</Select>

        </div>
    );
}
