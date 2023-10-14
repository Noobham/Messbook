import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DHeader from './DHeader';
import './MessCard.css'
import FoodCard from './FoodCard';

const MessBoard = () => {
    const {id} = useParams();
    const mess = "SARAIYA"

    const navigate = useNavigate();
    function createFood(){
        navigate('/dashboard/food/create');
    }

    const [food] = useState([{name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'},
    {name:'Chicken',price:'120'}
  ])
  console.log(id);

  return (
    <>
    <div style={{margin:'2rem'}}>
      <DHeader title={mess} createFun={createFood} buttonName={"ADD Food Item"}/>
      <div id='Card'>
            {
                food.map(data=>{
                    return <FoodCard key={data.id} {...data} id={id} /> ;
                })
            }
        </div>
    </div>
    </>
  )
}

export default MessBoard