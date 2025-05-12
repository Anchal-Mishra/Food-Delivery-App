import {useEffect, useState} from "react"


function useStatus(){
    const [status, setStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setStatus(true)
        })
        window.addEventListener("offline",()=>{
            setStatus(false)
            return ()=>{
                window.removeEventListener("online")
                window.removeEventListener("offline")
            }
        })
           
    },[])
    return status 
}

export default useStatus;