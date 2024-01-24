
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { Github } from 'lucide-react';
import Image from 'next/image'
import data from "../../portfolio.json"

export default function Home() {
  return (
    <div className='flex flex-col flex-1 gap-6'>
      <div className='bg-banner text-secondary rounded-lg'>
        <div className='backdrop-blur-sm p-6 flex justify-between items-center'>
          <div className='flex gap-8'>
            <div className='w-32 aspect-square overflow-hidden rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-4 border-white relative'>
              <Image src={data.profile_pic} className='object-cover brightness-110' alt="profile" fill={true} />
            </div>
            <div className='flex flex-col justify-center'>
              <span className='text-4xl text-black font-semibold'>{data.name}</span>
              <span className='text-black'>{data.designation}</span>
            </div>
          </div>
          <a href={"https://github.com/" + data.github_username} target='_blank'>
            <Button className='gap-3 flex bg-black text-white hover:scale-105 hover:bg-black transition duration-300'>
              <Github />
              <Separator className='bg-white' orientation='vertical' />
              Follow me on Github
            </Button>
          </a>
        </div>
      </div>

      <div>
        <span className='text-2xl font-semibold'>Projects</span>
        <div className='gap-6 mt-4 grid grid-cols-4'>
          { data.projects.map((project, i) => (
            <div key={i} className='overflow-hidden bg-white rounded-lg'>
              <div className='aspect-video bg-slate-400 relative'>
                <Image src={project.image_url} alt="img" fill={true} />
              </div>
              <div className='p-4 flex flex-col w-full'>
                <span className='text-black'>{project.name}</span>
                <span className='text-black'>{project.description}</span>
              </div>
            </div>
          )) }
        </div>
      </div>

      <div>
        <span className='text-2xl font-semibold'>Skills</span>
      </div>
    </div>
  )
}
