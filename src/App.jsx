import React from 'react'
import {Shop, Sales, FlexContent, Stories} from './components'
import { shopapi, popularsales, toprateslaes, highlight, sneaker, story} from './data/data'
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
    <Shop shopapi = {shopapi}/>
    <Sales endpoint={popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists/>
    <Sales endpoint={toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story = {story}/>
    </main>
    </>
  )
}

export default App