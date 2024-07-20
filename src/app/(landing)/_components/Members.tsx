"use client";

import React from "react";
import MemberCard from "@/components/UI/Member-Card";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Members = () => {
  const { data, error, isLoading } = useSWR<Responsive<Member[]>>(
    "https://reqres.in/api/users?page=1",
    fetcher
  );

  if (isLoading) return <p className="text-center mt-[80px]">loading...</p>;

  return (
    <>
      <h2 className="header-title">Members</h2>
      {/* Desktop */}
      <div className="hidden xl:flex justify-center">
        <div className="flex items-center gap-8">
          {data?.data.slice(0, 5).map((item, index) => (
            <MemberCard {...item} key={item.id} index={index} />
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="xl:hidden">
        <div className="grid grid-cols-6 items-center gap-5">
          {data?.data.slice(0, 5).map((item, index) => (
            <div
              key={item.id}
              className="col-span-6 ti:col-span-3 lg:col-span-2"
            >
              <MemberCard {...item} key={item.id} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
