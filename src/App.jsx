import React from 'react'
import Accordion from './components/Accordion'
import { accordionData } from './utils/Context'

const App = () => {
  return (
   <section>
    {accordionData.map(({title,content})=>{
      return <Accordion key={Math.random()} title={title} content={content}/>
    })}
   </section>
  )
}

export default App