import React from 'react'
import { Link } from 'react-router-dom'

const EventNavigation = () => {
  return (
    <div>
        <header>
            <ul>
                <li><Link to='/events'>All Events</Link></li>
                <li><Link to='/events/new'>New Event</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default EventNavigation
