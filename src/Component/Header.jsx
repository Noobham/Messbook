
import './MessCard.css'
import { Link } from 'react-router-dom'



export const Header = () => {

  
  return (
    <div id='sub-header'>
      <Link to={'/dashboard/mess'} >
        <span className='sub_name'>Mess Book</span>
      </Link>
    </div>
  )
}
