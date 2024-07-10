"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function Home() {
  const { signOut } = useClerk();
  const { isSignedIn, user, isLoaded } = useUser();
  const Navigate = useRouter();
  return (
    <>
      {/* User can manage account info like email,name,password */}

      {/* @ts-ignore */}

      <UserButton />

      {/* After signout nevigate to signin page   */}

      {/* {isSignedIn ? <UserButton /> : Navigate.push("/signin")} */}

      {/* After signout nevigate to signin page   */}

      {/* {isSignedIn && (
        <button onClick={() => signOut({ redirectUrl: "/signin" })}>
          Sign out
        </button>
      )} */}
    </>
  );
}
