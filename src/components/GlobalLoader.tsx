"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InnoFashionLoader from "./InnoFashionLoader";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Skip loader untuk halaman admin dan homepage
  const isAdminPage = pathname?.startsWith('/admin');
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Jangan tampilkan loader kalau di halaman admin atau homepage
    if (isAdminPage || isHomePage) {
      setIsLoading(false);
      return;
    }

    // Trigger loader on route change
    setIsLoading(true);

    // Provide enough time for animation and fake loading progress
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600); // Dikurangi dari 2800ms ke 1500ms

    return () => clearTimeout(timer);
  }, [pathname, isAdminPage, isHomePage]);

  // Jangan render loader sama sekali kalau di admin atau homepage
  if (isAdminPage || isHomePage) return null;

  return <InnoFashionLoader isLoading={isLoading} />;
}
