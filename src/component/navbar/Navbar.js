import React,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isActive,setisActive] = useState(false);
  return (
    <div className='navbar'>
        <div className="navbar-box">
              <div className="portfolio-logo">
                <h3>Mohd Zaid</h3>
              </div>
             <div className="menubar-hide">
             <div className="portfolio-menubar">
                   <a href="/about">Home</a>
                   <a href="/about">About</a>
                   <a href="/about">review</a>
                   <a href="/about">contact us</a>
              </div>
              <button class="upsale-button">
                 <span>Download</span>
              </button>
             </div>
             <div onClick={() => setisActive(!isActive)} className="menu-bar-icon">
               {isActive ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
             </div>
            
        </div>
        {
            isActive && (
                <div onClick={() => setisActive(false)} className="toogle-menu">
                  <div className="portfolio-menubar">
                   <a href="/about">Home</a>
                   <a href="/about">About</a>
                   <a href="/about">review</a>
                   <a href="/about">contact us</a>
              </div>
              <button class="upsale-button">
                 <span>Download</span>
              </button>
         </div>
            )
        }
    </div>
  )
}

export default Navbar
