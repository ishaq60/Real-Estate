import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Links=<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/">Update Profile</NavLink></li>
    
            
            
    </>
    return (
        <div className=' horizontal  mt-3 flex justify-between'>
            <div>
                 <h1 className='text-3xl'>Real Estate</h1>
            </div>
            <div className='flex gap-3 mt-2 list-none'>
              {
                Links
              }
            </div>
            <div>
                 <NavLink to="/login"><button  className='btn btn-primary'>LogIn</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;