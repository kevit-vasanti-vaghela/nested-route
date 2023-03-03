import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const RootPage = () => {
  return (
    <>
        <MainNavigation />
        <Outlet />
    </>
  )
}

export default RootPage
