import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Links=<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/">Update Profile</NavLink></li>
    
            
            
    </>
    return (
        <div className=' mt-3 flex justify-between'>
            <div>
                 <h1>Real Estate</h1>
            </div>
            <div className='flex gap-3 list-none'>
              {
                Links
              }
            </div>
            <div>
                <button className='btn btn-primary'>LogIn</button>
            </div>
        </div>
    );
};

export default Navbar;