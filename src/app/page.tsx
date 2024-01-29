
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { Github } from 'lucide-react';
import Image from 'next/image'
import data from "../../portfolio.json"
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  return (
    //  subheader
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
          <Link href={"https://github.com/" + data.github_username} target='_blank'>
            <Button className='gap-3 flex bg-black text-white hover:scale-105 hover:bg-black transition duration-300'>
              <Github />
              <Separator className='bg-white' orientation='vertical' />
              Follow me on Github
            </Button>
          </Link>
        </div>
      </div>

      {/* projects */}
      <div>
        <span className='text-2xl font-semibold'>Projects</span>
        <div className='gap-6 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          { data.projects.map((project, i) => (
            <Link target='_blank' href={"https://github.com/" + data.github_username + "/" + project.github_repo} key={i}>
              <div className='h-full overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 transition'>
                <div className='aspect-video bg-slate-400 relative'>
                  <Image src={project.image_url} alt="img" fill={true} />
                </div>
                <div className='p-4 flex flex-col w-full'>
                  <span className='text-black text-lg font-semibold'>{project.name}</span>
                  <span className='text-black line-clamp-2'>{project.description}</span>
                </div>
              </div>
            </Link>
          )) }
        </div>
      </div>

      {/* skills */}
      <div>
        <span className='text-2xl font-semibold'>Skills</span>
        <div className='gap-6 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          { data.skills.map((skill, i) => (
            <div key={i} className='bg-foreground rounded-lg p-4 flex flex-col gap-4'>
              <span className='text-primary font-semibold text-lg tracking-wide'>{skill.category}</span>
              <div className='grid grid-cols-5 gap-4'>
                { skill.tech_stack.map((val) => (
                  <Tooltip key={JSON.stringify(val)}>
                    <TooltipTrigger>
                      <div className='relative w-full aspect-square'>
                        <Image className='rounded-md' fill src={val.image_url} alt="" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      {val.name}
                    </TooltipContent>
                  </Tooltip>
                )) }
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}
