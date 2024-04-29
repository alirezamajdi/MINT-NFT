"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const session = sessionStatus;
    useLayoutEffect(() => {
      if (!session) redirect("/");
    }, [session]);

    if(!session) return null
    return <Component {...props}/>
  };
}
