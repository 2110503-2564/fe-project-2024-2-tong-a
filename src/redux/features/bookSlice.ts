import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type BookingState = {
  bookItems: BookingItem[]; // Array to store booking items
};

const initialState: BookingState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // Add or update a booking item in the state
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const newBooking = action.payload;

      // Check if there is already a booking with the same date and venue
      const existingBookingIndex = state.bookItems.findIndex(
        (item) => item.bookDate === newBooking.bookDate && item.venue === newBooking.venue
      );

      if (existingBookingIndex === -1) {
        // If no existing booking, add the new booking
        state.bookItems.push(newBooking);
      } else {
        // If a booking with the same date and venue exists, update its name and phone number
        state.bookItems[existingBookingIndex] = {
          ...state.bookItems[existingBookingIndex],
          nameLastname: newBooking.nameLastname, // Replace the name
          tel: newBooking.tel, // Replace the phone number
        };
      }
    },

    // Remove a booking item from the state
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainingBookings = state.bookItems.filter(
        (item) =>
          item.nameLastname !== action.payload.nameLastname ||
          item.tel !== action.payload.tel ||
          item.venue !== action.payload.venue ||
          item.bookDate !== action.payload.bookDate
      );
      state.bookItems = remainingBookings;
    },
  },
});

// Export the actions
export const { addBooking, removeBooking } = bookSlice.actions;

// Export the reducer to be used in the store
export default bookSlice.reducer;
