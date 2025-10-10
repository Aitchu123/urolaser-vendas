"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Navbar Container
export const Navbar = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <nav
      className={cn(
        "bg-white dark:bg-[#00a8cc] border-b border-neutral-200 dark:border-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

// Navbar Body
export const NavBody = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto px-4 h-16 flex items-center justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Navbar Logo
export const NavbarLogo = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn("flex items-center space-x-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Navigation Items
export const NavItems = ({
  items,
  className,
  ...props
}: {
  items: { name: string; link: string }[];
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center space-x-6 text-sm font-medium",
        className
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

// Mobile Navigation
export const MobileNav = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn("md:hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Mobile Navigation Header
export const MobileNavHeader = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 h-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Mobile Navigation Toggle
export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
  ...props
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
};

// Mobile Navigation Menu
export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
  className,
  ...props
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#00a8cc]/20 dark:bg-[#00a8cc]/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className={cn(
              "fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white dark:bg-[#00a8cc] border-l border-neutral-200 dark:border-neutral-800 z-50 p-4 overflow-y-auto",
              className
            )}
            {...props}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};