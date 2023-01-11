import React from 'react'
import {Shop, Sales} from './components'
import { shopapi, popularsales, toprateslaes } from './data/data'
const App = () => {
  return (
    <>
    <main>
    <Shop shopapi = {shopapi}/>
    <Sales endpoint={popularsales}/>
    <Sales endpoint={toprateslaes}/>
    </main>
    </>
  )
}

export default App