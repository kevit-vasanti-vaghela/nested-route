import React from 'react'
import { Link } from 'react-router-dom'

const EventsPage = () => {
    const EVENTS = [
        {id: 'e1' , title: 'Event 1'},
        {id: 'e2' , title: 'Event 2'},
        {id: 'e3' , title: 'Event 3'},
    ]
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((eve) => (
            <li key={eve.id}><Link to={eve.id}>{eve.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default EventsPage
