import { Home, StarsIcon, Workflow } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-80 rounded-lg bg-foreground p-8'>
      <ul className='mb-4'>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <Home />
          Home
        </li>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <Workflow />
          Projects
        </li>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <StarsIcon />
          Skills
        </li>
      </ul>

      <span className='text-lg font-semibold'>Socials</span>

      <ul className='my-4'>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <Home />
          Home
        </li>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <Workflow />
          Projects
        </li>
        <li className='flex ms-3 gap-2 text-primary mb-6'>
          <StarsIcon />
          Skills
        </li>
      </ul>
    </div>
  )
}
