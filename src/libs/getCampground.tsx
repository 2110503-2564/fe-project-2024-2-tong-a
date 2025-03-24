

export default async function getCampground(token:string,id:string){
    const response = await fetch(`http://localhost:5000/api/v1/campgrounds/${id}`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`,
        }
    }
    )
    console.log(response)
    if(!response.ok){
        throw new Error("Failed to fetch vennue")
    }

    return await response.json()
}

