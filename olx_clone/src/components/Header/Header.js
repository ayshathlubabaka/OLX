import React, {useState} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Link } from 'react-router-dom';

function Header({ setSearchQuery }) {

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false)

  const handlePlaceSearchClick = () => {
    setIsClicked(!isClicked); 
  };
  const handleProductSearch = () => {
    setIsClicked1(!isClicked1)
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
        <Link to="/">
          <OlxLogo></OlxLogo>
        </Link>
        </div>
        <div className={`placeSearch ${isClicked ? 'clicked' : ''}`} id="placeSearch" onClick={handlePlaceSearchClick}>
          <Search></Search>
          <input type="text" placeholder='India' />
          <Arrow clicked={isClicked} />
        </div>
        <div className={`productSearch ${isClicked1 ? 'clicked' : ''}`} id="productSearch" onClick={handleProductSearch}>
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div>
          <select className='language'>
            <option value='english'>English</option>
            <option value='hindi'>Hindi</option>
          </select>
        </div>
        <div className="loginPage">
          <Link to='/login'>
          <span>Login</span>
          </Link>
          <hr />
        </div>

        <div className="sellMenu">
        <Link to="/create">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;