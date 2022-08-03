import React, { useState,useEffect} from 'react'
import axios from 'axios'
import './eng.css'
const Eng = () => {
    
    const [info, setInfo] = useState([])
    const [info2, setInfo2] = useState([])
    
     useEffect(() => {    
        const fetchData = async()=>{
            try {
                const res = await axios.get('http://localhost:4000/alloperations')
                const res2 = await axios.get('http://localhost:4000/operations')
                setInfo(res.data)
                setInfo2(res2.data)
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
 
    let tab1 = info.map(el=>el.Pack_id)
    let tab2 = info2.map(el1=>el1.Pack_id)
    let eng = 0; 

//    for (let i = 0; i<=tab.length-1;i++){
    
//       (tab.indexOf(info[i]?.Pack_id)===i)?eng+=Number(info[i]?.quantity):eng=eng
//    }


        for (let i = 0; i<=info2.length-1;i++){
        ((tab2.indexOf(info2[i]?.Pack_id)===i)&& (tab1.indexOf(info2[i]?.Pack_id)> (info.length-1) - (info2.length-1))) ?
        eng+=Number(info2[i]?.quantity):eng=eng
    } 
 

  return (
    <div className='eng'><p>Qté Eng</p><div className='ind'>{eng}</div></div>
  )
}

export default Eng