"use server"

export default async function getBookings(token:string) {
    const response = await fetch("http://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/bookings", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    

    if (!response.ok) {
        const errorMessage = `Failed to fetch bookings. Status: ${response.status}, Message: ${response.text}`;
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
}
