import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const RootPage = () => {
  const navigation = useNavigation();
  return (
    <>
        <MainNavigation />
        <main>
          {navigation.state === 'loading' && <p>Loading...</p>}
        </main>
        <Outlet />
    </>
  )
}

export default RootPage
