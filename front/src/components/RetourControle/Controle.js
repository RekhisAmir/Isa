import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './controle.css'

const Controle = () => {

  const [info, setInfo] = useState([])
  const [info2, setfInfo2] = useState([])

  useEffect(() => {
    const fetchData = async()=>{
        try {
            const res = await axios.get('http://localhost:4000/controle')
            const res2 = await axios.get('http://localhost:4000/operations')
            setInfo(res.data)
            setfInfo2(res2.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
  }, [])

  var count = 0; var prod = 0;

  for (let i=0; i<info.length;i++){
      count+=Number(info[i]?.QtePD)
  }

  for (let i = 0; i<=info2.length-1;i++){
    (info2[i]?.Operation_name.slice(0,5)==="Contr")||(info2[i]?.Operation_name.slice(0,5)==="contr")?
    prod+=Number(info2[i]?.quantity):prod=prod
}

  return (
    
    <div className='retour'><p>Indice qualité BC</p><div className='ind'>{Math.round((count/prod)*100)}%</div></div>
  )
}

export default Controle