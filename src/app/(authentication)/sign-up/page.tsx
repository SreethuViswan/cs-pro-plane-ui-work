"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <script src="https://accounts.google.com/gsi/client" async></script>
      <div className="flex items-center justify-center h-[70vh]  mt-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1">Moving to the runway</h1>
          <p className="mt-3  max-w-prose text-muted-foreground">
            Paste the code you got at
          </p>

          <p className="mb-1  max-w-prose text-muted-foreground">
            <span className="text-blue-400">mohammed@gmail.com </span> below
          </p>

          <div className="mb-6">
            <Input
              type="text"
              value="mohammed@gmail.com"
              className="px-4   border border-white rounded-md w-full"
              readOnly
            />
          </div>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="gets-sets-flys"
              className="px-4 border border-white rounded-md w-full"
            />
          </div>

          <div className="flex justify-end my-3">
            <span className=" text-sm max-w-prose text-muted-foreground">Request new code</span>
          </div>

          {/* Button */}
          <Button className="w-full mb-3">Continue</Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
