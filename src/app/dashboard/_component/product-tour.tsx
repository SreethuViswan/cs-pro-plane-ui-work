import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button";
import Image from 'next/image';
type Props = {
    name:any
}
const ProductTour:React.FC<Props>  = ({name}) => {
  return (
    <div className="w-80 border-blue text-sm max-w-prose text-foreground">
        <div className="flex h-[70vh]  ml-6">
      <div className="">
        <Image
        src="/images/plane.jpg"
        width={500}
        height={500}
        alt="Picture of the plane"
        />
        <h2 className='mt-3 flex justify-start my-3 text-sm max-w-prose text-foreground'>Welcome to plane, {name}</h2>

        <p className='mr-10 text-sm max-w-prose my-4 text-foreground'>We're glad that you decided to try out Plane. You can now manage your projects with ease. Get started by creating a project.</p>
    
        <div className="flex">

        <Button className="w-half mb-3">Take a Product Tour</Button>
        <Button className="w-half mb-3 bg-white text-black">No thanks, i will explore it myself</Button>
    
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProductTour