import { useState } from 'react'
import './MessCard.css'
import { TextField, Typography } from '@mui/material';
import StudentCard from './StudentCard'
const DStdentList = () => {
    const [studentList , setStudentList] = useState([
        {id:1,name:'Shubham Kumar',rollNo:'20075085'},
        {id:2,name:'Shubham Kumar',rollNo:'20075085'},
        {id:3,name:'Shubham Kumar',rollNo:'20075085'},
        {id:4,name:'Shubham Kumar',rollNo:'20075085'},
        {id:5,name:'Shubham Kumar',rollNo:'20075085'},
        {id:6,name:'Shubham Kumar',rollNo:'20075085'},
        {id:7,name:'Shubham Kumar',rollNo:'20075085'},
        {id:8,name:'Shubham Kumar',rollNo:'20075085'},
        {id:9,name:'Shubham Kumar',rollNo:'20075085'},
        {id:9,name:'Shubham Kumar',rollNo:'20075085'},
        {id:9,name:'Shubham Kumar',rollNo:'20075085'},
        
    ])
  return (
    <div style={{margin:'2rem'}}>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <Typography variant='h4' style={{padding:'5px'}}>Student LIST</Typography>
        <TextField label='SEARCH'/>
        </div>
        <div id='Card' style={{height:'50vh',overflow: 'scroll',flexWrap:'nowrap',overflowX:'hidden' , marginTop:'10px'}}>
            {
                studentList.map(data=>{
                    return <StudentCard key={data.id} {...data} /> ;
                })
            }
        </div>
    </div>
  )
}

export default DStdentList