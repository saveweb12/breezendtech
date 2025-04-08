"use client"
import UserCard from "@/components/UserCard";
import React from "react";
import { getGreeting } from '@/helpers/greet.js'
import { getUsername } from '@/helpers/auth.js'

const page = () => {
  const greet = getGreeting();
  const userName = getUsername();
  return (
    <div>
      <div className="flex justify-between m-5 mt-20 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div>Dashboard</div>
      </div>
      <hr className="mt-5" />
      <div className="mt-5 pl-7">
        {greet} <span className="text-2xl ">{userName}!</span> <br />
        <span className="text-purple-900">
          {" "}
          Here’s what’s happening with your site today.
        </span>
      </div>

      <div className="flex justify-between mt-2">
        <UserCard title={"Product"} count={0} />
        <UserCard title={"Projects"} count={0} />
        <UserCard title={"Pending Applications"} count={0} />
        <UserCard title={"Blogs"} count={70} />
      </div>
    </div>
  );
};

export default page;
