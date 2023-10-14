import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import './StudentCard.css'

const FoodCard = (props) => {
    const {name,price} = props;
    console.log(name);
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        <div className='StudentCard'>
        <Typography>{name + 'h'}</Typography>
        <Typography>{price}</Typography>
        </div>
        {/* <Button variant='outlined' style={{height:'44px'}}>ADD ITEM</Button> */}
    </div>
  )
}

export default FoodCard