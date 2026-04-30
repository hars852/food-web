import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>A food delivery app is a convenient digital platform that allows users to browse a wide range of restaurants and dishes, place orders online, and have their food delivered directly to their doorstep. It offers an easy-to-use interface for browsing menus, selecting meals, customizing orders, and making secure payments.</p>
    <button onClick={() => {
  const section = document.getElementById('explore-menu');
  section?.scrollIntoView({ behavior: 'smooth' });
}}>
  View Menu
</button>

      </div>
    </div>
  )
}

export default Header
