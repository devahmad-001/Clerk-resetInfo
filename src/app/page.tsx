"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <SignInButton />
    </>
  );
}


// homepage=>signin btn 
// click signin btn=>  direct it to products page
// where user info rendered on UI signout btn 
// onclick signout btn => direct to home page 

// on SignUp=>directs to products again 
// click signin btn=>  direct it to products page
// onclick signout btn => direct to home page 

// routes define in .env file 
// middleware is used for the protected routes 
 