'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import {
  ArrowUpRightIcon,
  BellIcon,
  BookOpenIcon,
  Code2Icon,
  CreditCardIcon,
  HelpCircleIcon,
  Menu,
  X,
  SparklesIcon,
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Logo } from '@/components/ui/logo'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from '@/components/ui/resizable-navbar'

export const SiteMainHeader = () => {
  const [isOpen, setOpen] = useState(false)

  // Adicionando efeito de scroll para o cabeçalho
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Preços', link: '/pricing' },
    { name: 'Ajuda', link: '/help' },
    // { name: 'Blog', link: '/blog' }, 
    { name: 'Documentação', link: '/docs' },
    { name: 'Novidades', link: '/updates' },
  ]

  const navIcons = {
    Preços: CreditCardIcon,
    Ajuda: HelpCircleIcon,
    Blog: BookOpenIcon,
    Documentação: Code2Icon,
    Novidades: BellIcon,
  }

  return (
    <div className="w-full z-50 relative">
      <Navbar className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 dark:bg-black/90 dark:border-gray-800 h-14 rounded-b-xl mx-4 max-w-[calc(100%-2rem)]"
          : "bg-transparent h-16"
      )}>
        <NavBody>
          {/* Logo */}
          <div className="relative z-20 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="block"
              >
                <Logo />
              </motion.div>
            </Link>
          </div>

          {/* Navigation Items */}
          <NavItems items={navItems} />

          {/* CTA Button */}
          <div className="relative z-20 flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HoverBorderGradient
                as={Link}
                containerClassName="rounded-full shadow-lg hover:shadow-xl"
                className="bg-[#00a8cc] dark:bg-[#00a8cc] text-white flex items-center gap-2"
                duration={1.5}
                {...({ href: '/auth' } as any)}
              >
                <span className="font-semibold">Entrar</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </motion.div>
              </HoverBorderGradient>
            </motion.div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-medium text-[#00a8cc] dark:text-white">
                Urolaser
              </span>
            </Link>
            <MobileNavToggle isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setOpen(false)}>
            {navItems.map((item, idx) => {
              const Icon = navIcons[item.name as keyof typeof navIcons]
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:bg-neutral-100 rounded-md dark:text-neutral-300 dark:hover:bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <HoverBorderGradient
                as={Link}
                containerClassName="w-full rounded-md shadow-lg hover:shadow-xl"
                className="bg-[#00a8cc] dark:bg-[#00a8cc] flex items-center justify-center gap-2 w-full"
                duration={1.5}
                onClick={() => setOpen(false)}
                {...({ href: '/auth' } as any)}
              >
                <span className="font-medium text-[#00a8cc] dark:text-white">
                  Entrar na Urolaser
                </span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </HoverBorderGradient>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}