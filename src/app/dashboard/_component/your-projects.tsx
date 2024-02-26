import React from 'react'
import CustomDropdown from '@/app/onboarding/_components/custom-dropdown'
import { Settings } from "lucide-react";
import { Contrast } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Layers3 } from 'lucide-react';
import { FileVideo } from 'lucide-react';
import { Dice4 } from 'lucide-react';
const YourProjects = () => {
   
    const dropDownItems:any = [
          [<Layers3 /> ,"Issues",],
          [<Contrast /> ,"Cycles"],
          [<Dice4 />, "Modules"],
          [<FileVideo /> ,"views"],
          [<FileText /> ,"Pages"],
          [<Settings /> ,"Settings"]
        ]
  return (
    <div>

        <div className="mt-3 flex justify-start my-3 text-sm max-w-prose text-muted-foreground">
        <CustomDropdown dropDownTitle="Your Projects" dropDownItems={dropDownItems}/>   


      </div>
    </div>
  )
}

export default YourProjects
