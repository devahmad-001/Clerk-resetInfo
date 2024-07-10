"use client";
import { SignInButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <SignInButton />
    </>
  );
}


// homepage=> SignInButton
// click => SignInButton direct it to products page
// where UserButton rendered on UI 
// UserButton contains user's info even it will allow the user to reset its info
// onclick signout btn => redirect to home page 

// on SignUp=>directs to products again 
// click SignInButton=>  direct it to products page
// onclick SignOutButton => direct to home page 

// routes define in .env file 
// as onclick SignInButton which is provided by CLerk it will redirect to sign page 
// middleware is used for the protected routes 
// if user not loged in no route will active
 