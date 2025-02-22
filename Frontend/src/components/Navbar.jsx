import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='h-20 shadow-2xl'>
      <div className='h-screen fixed bg-white shadow-2xl shadow-gray-500 w-[20%] pl-2 justify-between'>
        <div className='flex mb-10 pl-2 pt-4 h-20 text-center items-center gap-2'>
        <Link className='flex gap-2 items-center shadow-lg w-full pb-2' to={'/'}><h1 className='w-[80%] p-5 pl-8 pr-8 border-2 border-blue-400 rounded-xl'>Logo</h1><i className="ri-menu-fold-2-fill text-2xl"></i></Link>
        </div>
        <div className='pl-8'>
          <div className='leading-4 mb-4 bg-red-100 rounded-xl mr-4 p-2'>
            <h2 className='text-2xl font-semibold text-orange-600'>General</h2>
            <p>Dashboard</p>
          </div>
          <div className='flex flex-col text-lg font-semibold gap-2'>
            <a className='bg-red-400 p-3 rounded-xl mr-4' href=""><i class="ri-computer-line"></i>Dashboard</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-money-rupee-circle-fill"></i>Transactions</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-arrow-down-double-line"></i>Start Here</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-question-line"></i>FAQ</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-book-open-line"></i>Learning Modules</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-star-smile-line"></i>Rewards</a>
            <a className='bg-amber-300 p-3 rounded-xl mr-4' href=""><i class="ri-feedback-line"></i>Feedback</a>
          </div>
        </div>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Navbar