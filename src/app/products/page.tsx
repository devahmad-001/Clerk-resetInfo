"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";
export default function Products() {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <>
      <ol>
        <li>
          <h1>email: {user?.primaryEmailAddress?.emailAddress}</h1>
        </li>
        <li>
          {" "}
          <h1>name: {user?.fullName}</h1>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ol>
    </>
  );
}
