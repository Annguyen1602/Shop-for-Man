import React from 'react'
import Shop from './components/Shop'
import { shopapi } from './data/data'
const App = () => {
  return (
    <>
    <Shop shopapi = {shopapi}/>
    </>
  )
}

export default App