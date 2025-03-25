import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dbConnect } from "@/db/dbConnect";
import Booking from "@/db/models/Booking";
import User from "@/db/models/User";

// Define the interface for a booking item without `createdAt`
interface BookingItem {
  apptDate: string; // Appointment date
  user: string; // User ID or information
  campground: string; // Campground name or ID
}

type BookingState = {
  bookItems: BookingItem[]; // Array to store booking items
};

const initialState: BookingState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // Add a new booking or update an existing one
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const newBooking = action.payload;

      
  },
}});

// Export the actions
export const { addBooking } = bookSlice.actions;

// Export the reducer to be used in the store
export default bookSlice.reducer;
