import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DHeader from './DHeader';
import './MessCard.css'
import FoodCard from './FoodCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadFood } from '../actions/foodAction';

const MessBoard = () => {
    const {id} = useParams();
    const mess = "SARAIYA"

    
    const navigate = useNavigate();
    function createFood(){
        navigate(`/dashboard/food/create/${id}`);
    }

    const [food] = useState([{name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'}
  ])
  
  const dispatch = useDispatch();

  const {foodList} = useSelector(store=>store.food);

  useEffect(()=>{
    dispatch(loadFood(id));
    console.log(foodList);
  },[dispatch])
  return (
    <>
    <div style={{margin:'2rem'}}>
      <DHeader title={mess} createFun={createFood} buttonName={"ADD Food Item"}/>
      <div id='Card'>
            {
                foodList.map(data=>{
                    return <FoodCard key={data.id} {...data} id={id} /> ;
                })
            }
        </div>
    </div>
    </>
  )
}

export default MessBoard