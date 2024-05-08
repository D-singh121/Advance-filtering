import './Nav.css'
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

import Input from '../../components/Input';


// accepting props from parent App
const Navbar = ({ query, handleInputChange }) => {
  return (
    <nav className='navbar'>
      <div>
        <a href='/'>
          <h1 className='logo'>Dee.</h1>
        </a>
      </div>

      <div className='search'>
        <Input
          type='text'
          placeholder='Search here...'
          name='search'
          value={query}
          userClassName='search_input'
          handleInputChange={handleInputChange}
        />

        <span> <IoIosSearch /> </span>
      </div>

      <div className='logos'>
        <a href='/'>
          <IoMdHeartEmpty className='icon' />
        </a>

        <a href='/'>
          <IoCartOutline className='icon' />
        </a>

        <a href='/'>
          <AiOutlineUserAdd className='icon' />
        </a>


      </div>


    </nav>
  )
}

export default Navbar