import React from "react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { User, WavesIcon } from "lucide-react";

const OnBoardingUserName = () => {
  return (
    <>
      <div className="h-[25vh] mt-4   w-[50%]">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold ">What do we call you?</h2>
          <p>
            <WavesIcon />
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <User />
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="enter your name..."
              className="px-4 text-gray-500 w-[100%]"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
          How you will use the app?
        </h3>
        <p className="text-muted-foreground">Choose just one.</p>

        <div className="flex gap-4 my-4">
          <p>Buid products</p>
          <p>Manage feedbacks</p>
          <p>Buid products</p>
        </div>

        <div className="flex  gap-4 my-4">
          <p>Field force management</p>
          <p>Code repository integration</p>
          <p>Bug tracking</p>
        </div>
      </div>
      <div className="">
            <Button>Continue</Button>
      </div>
    </>
  );
};

export default OnBoardingUserName;
