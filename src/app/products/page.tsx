"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
export default function Products() {
  let { user } = useUser();
  return <>{user && <UserButton />}</>;
}
