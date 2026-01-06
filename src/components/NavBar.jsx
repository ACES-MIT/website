import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconUser, IconUsers, IconLogin, IconCalendarEvent } from "@tabler/icons-react";
import logo from './logo.png';

const Navbar = () => {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Teams",
      link: "/our-team",
      icon: <IconUsers className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconCalendarEvent className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Login",
      link: "/login",
      icon: <IconLogin className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "RSVP",
      link: "/register",
      icon: <IconCalendarEvent className="h-5 w-5 text-neutral-500 dark:text-white" />,
      isButton: true,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems} 
        logo={<img src={logo} alt="ACES Logo" className="h-8 w-auto cursor-pointer" />}
      />
    </div>
  );
};

export default Navbar;