import React,{useState,useEffect} from 'react'
import './encours.css'
import axios from 'axios'

const Encours = () => {

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
    }, [])
    
   /* var eng = 0; var prod = 0; 

   info[0]?.T_start!=null?eng+=Number(info[0]?.Qte):eng=eng

   for (let i = 1; i<=info.length-2;i++){
       (info[i]?.N_pipelette!==info[i+1]?.N_pipelette)&(info[i+1]?.T_start!=null)?eng+=Number(info[i+1]?.Qte):eng=eng
   }
   
   info[info.length-1]?.T_end!=null?prod+=Number(info[info.length-1]?.Qte):prod=prod
 
   for (let i = 0; i<=info.length-2;i++){
       (info[i]?.N_pipelette!==info[i+1]?.N_pipelette)&(info[i]?.T_end!=null)?prod+=Number(info[i]?.Qte):prod=prod
   }*/

   let tab = info.map(el=>el.Pack_id)
   var eng = 0; var prod = 0; 

   for (let i = 0; i<=tab.length-1;i++){
      (tab.indexOf(info[i]?.Pack_id)==i)?eng+=Number(info[i]?.quantity):eng=eng
   }

   for (let i = 0; i<=info.length-1;i++){
    (info[i]?.Operation_name.slice(0,5)==="Contr")||(info[i]?.Operation_name.slice(0,5)==="contr")?
    prod+=Number(info[i]?.quantity):prod=prod
}
   

  return (
    <div className='encours'><p>Encours</p><div className='ind'>{eng-prod}</div></div>
  )
}

export default Encours