"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { NavLink } from '../ui/NavLink';
import { ShimmerCard } from '../ui/ShimmerCard';

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();

  const navLinks = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'competitions', label: 'COMPETITIONS' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
      >
        <div className="w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent">
          <nav className="relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8">
            
            <div className="absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl" />

            <div className="relative z-10 w-full h-full flex items-center justify-between">
              {/* LOGO */}
              <div className="flex justify-start items-center ml-2 lg:ml-6">
                <Link href="/">
                  <img src="/photo/logo.png" alt="LOGO" className="h-7 md:h-12 w-auto object-contain cursor-pointer" />
                </Link>
              </div>

              {/* NAV LINKS — underline hover */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navLinks.map((link) => (
                  <NavLink key={link.id} label={link.label} onClick={() => handleScroll(link.id)} />
                ))}
              </div>

              {/* CTA BUTTONS — ShimmerCard (desktop only) */}
              <div className="hidden md:flex items-center space-x-3 mr-4">
                {status === 'authenticated' ? (
                  <>
                    {pathname === '/dashboard' ? (
                      <ShimmerCard href="/">HOME</ShimmerCard>
                    ) : (
                      <>
                        <ShimmerCard href="/dashboard">DASHBOARD</ShimmerCard>
                        <ShimmerCard onClick={handleLogout}>LOGOUT</ShimmerCard>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ShimmerCard href="/login">REGISTER</ShimmerCard>
                    <ShimmerCard href="/login">SIGN IN</ShimmerCard>
                  </>
                )}
              </div>

              <button
                className="lg:hidden text-white mr-4 z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE NAVBAR — style lama */}
      <div className={`fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center space-y-6 w-full">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-white font-black italic text-2xl tracking-tighter uppercase"
            >
              {link.label}
            </button>
          ))}

          <div className="flex flex-col space-y-4 pt-6 w-full px-12">
            {status === 'authenticated' ? (
              <>
                {pathname === '/dashboard' ? (
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
                  >
                    HOME
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
                    >
                      DASHBOARD
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
                    >
                      LOGOUT
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
                >
                  REGISTER
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
                >
                  SIGN IN
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;