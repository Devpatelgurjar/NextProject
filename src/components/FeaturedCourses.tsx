"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import CoursesData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = CoursesData.courses.filter(
    (course: Course) => course.isFeatured
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

      <div className="flex flex-wrap gap-3 md:gap-4 justify-center px-18 mt-4">
        {featuredCourses.map((course: Course) => (
          <BackgroundGradient
            key={course.id}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <div className="h-[100%]">
              <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {course.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {course.description}
              </p>
              <p className="text-sm mt-1">Price: ${course.price}</p>
              {course.isFeatured && (
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span>
                </button>
              )}
            </div>
          </BackgroundGradient>
        ))}
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

export default FeaturedCourses;
