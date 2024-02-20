"use client";
 
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import Navbar from '@/components/navbar';
import { useState } from "react";

const Index = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   console.log(email)
   e.preventDefault();
   
    router.push('/verify-email');
  };
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
     console.log(newEmail)
  };


  return (
    
    <>
      <Navbar />
     
      <div className="flex items-center justify-center h-[70vh] mt-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">
            Welcome Back, let's get you on board
          </h1>

          <p className="mb-4  max-w-prose text-muted-foreground">
            Get back your issues, projects and workspaces.
          </p>
          <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Input
              type="text"
              value="rifad@cybersquare.org"
              placeholder="name@company.com"
              className="px-4 py-2 border border-white rounded-md w-full"
              onChange={handleEmailChange}
            />
          </div>

          {/* Button */}
          <Button
           className="w-full mb-3" 
           disabled = { !isEmailValid }
           type="submit"
           >Continue</Button>
          </form>
           
          <div className="mt-4">
        <span> Don't have an account?</span><Link href="/verify-email"> Signup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index