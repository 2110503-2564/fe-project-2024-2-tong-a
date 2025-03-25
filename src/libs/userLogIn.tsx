export default async function userLogIn(userEmail:string,userPassword:string){
    const response = await fetch(`https://backend-campground-3g25u15y1-patcharamons-projects.vercel.app/api/v1/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email:userEmail,
            password:userPassword
        }),
    })
    if(!response.ok){
        throw new Error("Failed to log-in")
    }
  //  console.log("login:",response)
    return await response.json()
}