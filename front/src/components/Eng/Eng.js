import React, { useState,useEffect} from 'react'
import axios from 'axios'
import './eng.css'
const Eng = () => {
    
    const [info, setInfo] = useState([])
    
     useEffect(() => {    
        const fetchData = async()=>{
            try {
                const res = await axios.get('http://localhost:4000/operations')
                setInfo(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }    
        }
        fetchData()
     },[])
     
    
   /*info[0]?.T_start!=null?eng+=Number(info[0]?.Qte):eng=eng

   for (let i = 1; i<=info.length-2;i++){
       (info[i]?.N_pipelette!==info[i+1]?.N_pipelette)&(info[i+1]?.T_start!=null)?eng+=Number(info[i+1]?.Qte):eng=eng
   }
   console.log(eng)*/
 
    let tab = info.map(el=>el.Pack_id)
   var eng = 0; 

   for (let i = 0; i<=tab.length-1;i++){
      (tab.indexOf(info[i]?.Pack_id)===i)?eng+=Number(info[i]?.quantity):eng=eng
   }


  return (
    <div className='eng'><p>Qté Eng</p><div className='ind'>{eng}</div></div>
  )
}

export default Eng