import React from "react";
import { Button } from "./ui/moving-border";
import EventsData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

interface Events {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isComing: boolean;
}
const UpcomingEvents = () => {
  const UpcomingEvents = EventsData.upcoming.filter(
    (event: Events) => event.isComing
  );

  return (
    <div className="w-full bg-[#101524] p-2 pb-8">
      <div className="flex flex-col items-center mt-10 mb-6 p-8 max-md:mt-2">
        <p className=" text-[#167C74] text-md font-semibold tracking-wide">
          FEATURED COURSES
        </p>
        <h1 className="mt-2 md:mt-0 text-2xl md:text-3xl font-bold bg-clip-text text-transparent  bg-white">
          Learn With the Best
        </h1>
      </div>

      <div className="max-w-[80%] mx-auto px-8">
      <HoverEffect items={UpcomingEvents}/>
    </div>

      <div className="flex justify-center p-2">
        <Link href={"/courses"}>
          <div className="max-w-[50rem] text-center mt-4 bg-gradient-to-b from-neutral-50 to-neutral-400 text-black text-md p-1.5 rounded-md   ">
            Explore All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
