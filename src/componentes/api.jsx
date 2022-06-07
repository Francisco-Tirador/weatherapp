import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Start from './Start'
import Datos from './Datos'


const Api = () => {
    
    
        const [onbj, setonbj] = useState(undefined)    
    
        let lon,lat
        const getLocali=()=>{
            
            const succes=pos=>{
                lon=pos.coords.longitude
                lat=pos.coords.latitude
                
                setonbj({lon,lat})
            }
            navigator.geolocation.getCurrentPosition(succes)
        }
    
        const key="09e84afaac8b893d782b82bd1c87ab0f"
        
       
        useEffect(() => {  
            if(onbj!==undefined){
        
         const url= `https://api.openweathermap.org/data/2.5/weather?lat=${onbj?.lat}&lon=${onbj?.lon}&appid=${key}`
          axios.get(url)
          .then(res=>setfirst(res.data))
          
        
        }
    }, [onbj])
        
        
                
            
    const [first, setfirst] = useState({})

    const [Cambio, setCambio] = useState(true)
   
    
    const TempFc=()=>{

        if(Cambio===true){
            setCambio(false)
        }
        else{
            setCambio(true)
        }

    }
    

  return (
     <div>
          <h1>WHEATHER APP</h1>
    <div className='counterDatos'>
      
        
        
        <div className='counterNubes'>
            <img className='imgNubes' src="https://www.fundacionaquae.org/wp-content/uploads/2017/04/nubes2.jpg" alt="nubes" />
            
        </div>
        
        <div >
        <Datos first={first} TempFc={TempFc} Cambio={Cambio}/>
       
        <Start get={getLocali}/>
        </div>
        
    </div></div>
  )
}

export default Api
