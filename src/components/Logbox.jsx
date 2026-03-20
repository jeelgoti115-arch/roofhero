import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logbox = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Simulate login by saving a flag in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    
    console.log("Login successful, redirecting...");
    
    // 2. Redirect to the HomeOwner dashboard
    navigate('/dashboard'); 
    
    // 3. Optional: Force a window refresh if Navbar doesn't update immediately
    // window.location.reload(); 
  };

  return (
    <div className='login-section'>
      <img src='public/hero-bg.png' alt='logo' className='login-logo'/>
      
      <div className='login-card'>
        <div className='login-header'>
          <h1><span className='span-login'>Homeowner Login</span> – Access Your Personalized Roofing Dashboard</h1>
          <p>Access Your Personalized Roofing Dashboard</p>
        </div>

        <form className='login-form' onSubmit={handleLogin}>
          <div className='input-group'>
            <label htmlFor='username'>User ID</label>
            <input type='text' id='username' placeholder='Enter your ID' required />
          </div>

          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter your password' required />
          </div>

          <button type="submit" className="cta-btn-login">
            Log In to My Dashboard <RiArrowRightUpLine size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Logbox;