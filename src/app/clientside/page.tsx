"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";

const ClientSide = () => {
  useLayoutEffect(() => {
    const session = sessionStatus;
    if (!session) redirect("/");
  }, []);

  return <div>This page is protected route on client side.</div>;
};

export default ClientSide;
