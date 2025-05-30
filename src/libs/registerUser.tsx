"use server"
export default async function registerUser(name: string, tel: string, email: string, password: string, role: string) {
    const response = await fetch("https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            tel,
            email,
            password,
            role
        }),
    });

    if(response.ok){
        return ("Registration successful! Please log in.")
    }
    if (!response.ok) {
        return("Registration failed. Please try again.")
       // throw new Error("Failed to register user");
    }

    return await response.json();
}
