import { useEffect, useState } from 'react'
import MessCard from './MessCard';
import Button from '@mui/material/Button';
import './MessCard.css'
import { TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DHeader from './DHeader';
import { useDispatch, useSelector } from 'react-redux';
import { loadMess } from '../actions/messAction';

const DMessList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function createMess(){
        navigate('/dashboard/mess/create');
    }

    const {mess} = useSelector(store => store.mess);

    useEffect(()=>{
        dispatch(loadMess());
    },[]);

    const {isLoading} =useSelector(store=>store.user);
    if(isLoading){
        return <>Loading...</>
    }
  return (
    <div style={{margin:'2rem'}}>
        
        <DHeader title={"MESS LIST"} buttonName={"Create Mess"} createFun={createMess}/>

        <div id='Card'>
            {
                mess.map(data=>{
                    return <MessCard key={data._id} {...data} /> ;
                })
            }
        </div>
    </div>
  )
}

export default DMessList