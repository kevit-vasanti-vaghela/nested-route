import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <div>
      <header>
        <ul>
            <li><NavLink to="" className={({isActive}) => isActive ? 'active' : '' }>Home</NavLink></li>
            <li><NavLink to='events' className={({isActive}) => isActive ? 'active' : '' }>Events</NavLink></li>
        </ul>
      </header>
    </div>
  )
}

export default MainNavigation
