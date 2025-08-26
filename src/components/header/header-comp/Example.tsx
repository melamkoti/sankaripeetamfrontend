import { useRef, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { NavListMobileData } from "./Navigation";

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      ref={containerRef}
      className={`absolute top-2 right-2  ${!isOpen && "bg-none"} `}
    >
      {/* Toggle button */}
      <button onClick={() => setIsOpen((prev) => !prev)} className="p-3 ">
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-12 right-0  mt-2 w-64 bg-white shadow-lg   p-4 overflow-y-auto h-full">
          {NavListMobileData.map((item, idx) => (
            <MenuItem
              key={idx}
              item={item}
              closeMenu={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

