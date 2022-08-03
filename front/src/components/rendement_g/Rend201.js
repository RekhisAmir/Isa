import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './rend201.css'

const Rend201 = () => {

  const [info, setInfo] = useState([])
     useEffect(() => {
        const fetchData = async()=>{
            try {
                const res = await axios.get('http://localhost:4000/performance')
                setInfo(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }    
        }
        fetchData()
     },[])


  let currentDate = new Date();  let day = currentDate.toLocaleDateString();

  var sum = 0; 

  let tab = info.filter(el=>el.cur_day===day)

  for (let i=0;i<tab.length;i++){
    sum+=tab[i]?.performance
  }

  var rend = tab.length !==0 ?sum/(tab.length):0



  return (
    <div className='rend'><p>Rendement Ligne Dos</p><div className='ind'>{rend*100}%</div></div>
  )
}

export default Rend201