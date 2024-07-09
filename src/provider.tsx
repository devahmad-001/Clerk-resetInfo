"use client";

import React from "react";

import { Provider } from "react-redux";

import { MainStore } from "./components/store";

export function ProviderComp({ children }: any) {
  return <Provider store={MainStore}>{children}</Provider>;
}
