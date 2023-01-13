import React from 'react'
import {Shop, Sales} from './components'
import { shopapi, popularsales, toprateslaes } from './data/data'
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
    <Shop shopapi = {shopapi}/>
    <Sales endpoint={popularsales} ifExists/>
    <Sales endpoint={toprateslaes}/>
    </main>
    </>
  )
}

export default App