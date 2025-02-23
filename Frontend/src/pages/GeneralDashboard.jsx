import React from 'react'

const GeneralDashboard = () => {
  return (
    <div id='gen' className='ml-[20%] pl-2'>
      <div className='text-2xl m-2'>Dashboard</div>
      <div className='p-6 h-[92vh] -z-10 w-[78vw] bg-cover bg-no-repeat font-semibold bg-[url("https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      </div>
        <div className='absolute top-[30%] left-[30%] z-20 backdrop-blur-sm backdrop-grayscale-25 p-4 '>
          <h1 className='text-6xl font-semibold text-teal-900'>Hello User,</h1>
          <p className='font-semibold'>Initial Path is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.</p>
        </div>
    </div>
  )
}

export default GeneralDashboard