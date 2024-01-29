import { Github, Home, Instagram, Linkedin, StarsIcon, Workflow } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import data from "../../../portfolio.json"

export default function Sidebar() {
  return (
    <div className='w-80 rounded-lg bg-foreground p-8 hidden xl:block'>
      <ul className='mb-4'>
        <Link href={"/"}>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <Home />
            Home
          </li>
        </Link>
        <Link href={"/"}>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <Workflow />
            Projects
          </li>
        </Link>
        <Link href={"/"}>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <StarsIcon />
            Skills
          </li>
        </Link>
      </ul>

      <span className='text-lg font-semibold'>Socials</span>

      <ul className='my-4'>
        <Link href={"https://www.linkedin.com/in/" + data.linkedin_username} target='_blank'>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <Linkedin />
            LinkedIn
          </li>
        </Link>
        <Link href={"/"}>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <Github />
            Github
          </li>
        </Link>
        <Link href={"/"}>
          <li className='hover:scale-110 hover:cursor-pointer origin-left transition flex ms-3 gap-2 text-primary mb-6'>
            <Instagram />
            Instagram
          </li>
        </Link>
      </ul>
    </div>
  )
}
