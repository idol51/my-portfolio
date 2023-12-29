"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { Github } from 'lucide-react';
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className='flex flex-col flex-1 gap-6'>
      <div className='bg-banner text-secondary rounded-lg'>
        <div className='backdrop-blur-sm p-6 flex justify-between items-center'>
          <div className='flex gap-8'>
            <img src='/next.svg' className='w-32 aspect-square bg-white rounded-full border-4 border-white' />
            {/* <div className='flex flex-col justify-center'>
              <span className='text-4xl font-semibold'>Armaan Lodi</span>
              <span>MERN stack developer</span>
            </div> */}
          </div>
          <Button className='gap-3 flex bg-black text-white'>
            <Github />
            <Separator className='bg-white' orientation='vertical' />
            Follow me on Github
          </Button>
        </div>
      </div>

      <div>
        <span className='text-2xl font-semibold'>Projects</span>
        <div className='gap-6 mt-4 flex justify-between'>
          <div className='overflow-hidden flex-1 bg-white rounded-lg'>
            <div className='aspect-video bg-slate-400'></div>
            <div className='p-4 flex flex-col'>
              <span className='text-black'>Project name</span>
              <span className='text-black'>Skill stack used</span>
            </div>
          </div>
          <div className='overflow-hidden flex-1 bg-white rounded-lg'>
            <div className='aspect-video bg-slate-400'></div>
            <div className='p-4 flex flex-col'>
              <span className='text-black'>Project name</span>
              <span className='text-black'>Skill stack used</span>
            </div>
          </div>
          <div className='overflow-hidden flex-1 bg-white rounded-lg'>
            <div className='aspect-video bg-slate-400'></div>
            <div className='p-4 flex flex-col'>
              <span className='text-black'>Project name</span>
              <span className='text-black'>Skill stack used</span>
            </div>
          </div>
          <div className='overflow-hidden flex-1 bg-white rounded-lg'>
            <div className='aspect-video bg-slate-400'></div>
            <div className='p-4 flex flex-col'>
              <span className='text-black'>Project name</span>
              <span className='text-black'>Skill stack used</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
