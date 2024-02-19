"use client";
import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import Navbar from '@/components/navbar';

const Index = () => {
  const router = useRouter();

  const handleSubmit = () => {
  alert('hello')
    router.push('/sign-up');
  };

  return (
    <>
      <Navbar />
    <script src="https://accounts.google.com/gsi/client" async></script>
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
              placeholder="name@company.com"
              className="px-4 py-2 border border-white rounded-md w-full"
            />
          </div>

          {/* Button */}
          <Button className="w-full mb-3" >Continue</Button>
          </form>
          <span className="mb-4 mt-3 max-w-prose text-muted-foreground">
            or continue with
          </span>
          <div className="flex flex-row justify-around mt-2">
            <span>signin with google</span>
            <span>
              <div
                className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
              ></div>
            </span>
            <div className="flex flex-row gap-2">
              <Image
                src="/logos/github-black.png"
                height={25}
                width={25}
                alt="GitHub Logo"
              />
              <span>Sign in with GitHub</span>
            </div>
          </div>
          <div className="mt-4">
        <span> Don't have an account?</span><Link href="">Signup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index