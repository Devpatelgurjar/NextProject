"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Guitar Fundamentals",
    description: "Learn the basics of playing the guitar with our comprehensive beginner's course.",
    content: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCxHqPztYwvCCSvZE0Rad97zwHI-OgCBqlQ&s"
        alt="Guitar"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Piano Basics",
    description: "Master foundational piano skills and start playing your favorite songs.",
    content: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-_oCyMNRntzUch7Pi9Qbt8UNi5pyQPnPmw&s"
        alt="Piano"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Photography Essentials",
    description: "A complete guide to digital photography for aspiring photographers.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Photography"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Web Development Bootcamp",
    description: "Become a web developer by learning HTML, CSS, JavaScript, and more.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        alt="Web Development"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Digital Marketing Mastery",
    description: "Unlock the secrets to effective digital marketing with this in-depth course.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
        alt="Digital Marketing"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Creative Writing Workshop",
    description: "Explore techniques to inspire and improve your writing skills.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
        alt="Creative Writing"
        className="w-full h-full object-cover"
      />
    ),
  },
];



function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs
