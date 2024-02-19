import React from "react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { User, WavesIcon } from "lucide-react";

const OnBoardingUserName = () => {
  return (
    <>
    <div className="h-[25vh] mt-4   w-[50%]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-2">What do we call you?</h2>
        <p>
          <WavesIcon />
        </p>
      </div>

      <div className="flex gap-3">
        <div>
          <User />
        </div>
        <div className="w-full">
         
          <Input
            type="text"
            placeholder="enter wokspace name..."
            className="px-4 text-gray-500 w-[100%]"
            readOnly
          />
         
        </div>
      </div>
    </div>

    <div className="">
        <h3 className="text-2xl font-semibold text-muted-foreground mb-4">How you will use the app?</h3>
        <p className="text-muted-foreground">
            Choose just one.
        </p>

        <div className="flex text-muted-foreground gap-2 my-4">
            <p>Buid products</p>
            <p>Manage feedbacks</p>
            <p>Buid products</p>
           

        </div>
        
        <div className="flex text-muted-foreground gap-2 my-4">
            <p>Buid products</p>
            <p>Manage feedbacks</p>
            <p>Buid products</p>
           

        </div>
    </div>
    </>
  );
};

export default OnBoardingUserName;
