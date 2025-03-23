'use client'
import React from "react";

export default function InteractiveCard({children, contentName}:{children:React.ReactNode,contentName:string}){
    
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg', 'bg-white')
            event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')
        }else{
            event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg', 'bg-white')
        }
    }

    
    return(
        <div className='w-[280px] h-[360px]  flex flex-col rounded-lg shadow-lg bg-white ' 
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}
        >
            {children}
        </div>
    );
}