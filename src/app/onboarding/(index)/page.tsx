import React from "react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

const OnBoardingIndex = () => {
  return (
    <div className="flex h-[70vh] mt-4 ml-5 ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">
          What will your workspace be?
        </h1>
        <p className="mt-3 flex justify-start my-3 text-sm max-w-prose text-muted-foreground">
          Name it.
        </p>

        <div className="mb-3">
          <Input
            type="text"
            placeholder="enter wokspace name..."
            className="px-4 text-gray-500 w-full"
            readOnly
          />
        </div>
        <span className="flex justify-start max-w-prose text-muted-foreground">
          You can edit the slug.
        </span>
        <div className="mb-3">
          <Input
            type="text"
            value="plane.pro.cybersquare.org/"
            className="px-4 text-gray-500 w-full"
            readOnly
          />
        </div>

        <Button className="w-full mb-3">Make it live</Button>
      </div>
    </div>
  );
};

export default OnBoardingIndex;
