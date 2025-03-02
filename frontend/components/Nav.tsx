import { cn } from "@/lib/utils";
import React from "react";

const Nav = () => {
  const circles = ["#EF5350", "#FFEB3B", "#66BB6A"];

  return (
    <nav className="h-12 bg-[#1C2229] flex items-center px-3">
      <div className="gap-1 flex">
        {circles.map((circle) => (
          <div
            key={circle}
            style={{ backgroundColor: circle }}
            className="rounded-full w-3 aspect-square"
          />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
