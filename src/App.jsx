import React from 'react'
import {Shop, Sales} from './components'
import { shopapi } from './data/data'
const App = () => {
  return (
    <>
    <main>
    <Shop shopapi = {shopapi}/>
    <Sales/>
    </main>
    </>
  )
}

export default App