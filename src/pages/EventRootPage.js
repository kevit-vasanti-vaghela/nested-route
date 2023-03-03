import React from 'react'
import { Outlet } from 'react-router-dom'
import EventNavigation from './EventNavigation'

const EventRootPage = () => {
  return (
    <div>
        <EventNavigation />
        <Outlet />
    </div>
  )
}

export default EventRootPage;

