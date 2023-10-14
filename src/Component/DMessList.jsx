import { useState } from 'react'
import MessCard from './MessCard';
import Button from '@mui/material/Button';
import './MessCard.css'
import { TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DHeader from './DHeader';

const DMessList = () => {
    let [mess,setMess] = useState([{id:1,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},{id:16,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},
    {id:2,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},{id:12,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},
    {id:3,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},{id:13,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},
    {id:4,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"},{id:14,photo:"https://shorturl.at/dquNW",name:"saraiya",Hostel:"Vishwaraiya"}]);

    const navigate = useNavigate();
    function createMess(){
        navigate('/dashboard/mess/create');
    }

  return (
    <div style={{margin:'2rem'}}>
        
        <DHeader title={"MESS LIST"} buttonName={"Create Mess"} createFun={createMess}/>

        <div id='Card'>
            {
                mess.map(data=>{
                    return <MessCard key={data.id} {...data} /> ;
                })
            }
        </div>
    </div>
  )
}

export default DMessList