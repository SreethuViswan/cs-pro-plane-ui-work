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
      <div className="flex items-center justify-center h-[70vh] mt-4">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-1">Set your password</h1>
          <p className="mt-3 text-sm max-w-prose text-muted-foreground">
            If you'd like to do away with codes, set a password here
          </p>

          <div className="mb-6">
            <Input
              type="text"
              value="mohammed@gmail.com"
              className="px-4 text-gray-500 w-full"
              readOnly
            />
          </div>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="enter password"
              className="px-4 border border-white rounded-md w-full"
            />
          </div>

          <div className="flex mb-4">
            <span className=" text-sm max-w-prose  text-muted-foreground inline-block text-wrap">
                You can update the password later also.
            </span>
          </div>

          {/* Button */}
          <Button className="w-full mb-3">Set Password</Button>

          <Button className="bg-white text-blue-500 hover:bg-white w-full">Skip to Workspace</Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
