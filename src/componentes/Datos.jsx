import React from 'react'

const Datos = ({first, Cambio, TempFc}) => {

    const F=` ${Math.round((first.main?.temp_max -273.15)*9/5+32)} F`
    const C=` ${Math.round(first.main?.temp_max -273.15)} C`

  return (
    <div>
 <h3>{first.sys?.country}</h3>

    <h2>{first?.name}</h2>
           
        
         <ul><b>Clima</b>{first.weather?.[0].main}</ul> 
         <ul>{first.weather?.[0].description}</ul> 
       
        <ul><b>Temperatura maxima :</b>{Cambio?`${F}`:`${C}`}</ul>
    
    <button onClick={TempFc}>{Cambio?"Grados F":"Grados C"}</button>

    </div>
  )
}

export default Datos