import React from 'react'
import GeneralNavbar from './GeneralNavbar'
import GeneralMainBody from './GeneralMainBody'

const GeneralPage = () => {
  return (
    <div className='overflow-x-hidden h-screen w-screen'>
        <GeneralNavbar/>
        <GeneralMainBody/>
    </div>
  )
}

export default GeneralPage