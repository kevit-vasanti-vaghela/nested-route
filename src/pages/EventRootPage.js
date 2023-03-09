import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

const EventRootPage = () => {
  return (
    <div>
        <EventsNavigation />
        <Outlet />
    </div>
  )
}

export default EventRootPage;

