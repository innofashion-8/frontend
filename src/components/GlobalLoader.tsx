"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InnoFashionLoader from "./InnoFashionLoader";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Skip loader untuk halaman admin
  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    // Jangan tampilkan loader kalau di halaman admin
    if (isAdminPage) {
      setIsLoading(false);
      return;
    }

    // Trigger loader on route change
    setIsLoading(true);

    // Provide enough time for animation and fake loading progress
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [pathname, isAdminPage]);

  // Jangan render loader sama sekali kalau di admin
  if (isAdminPage) return null;

  return <InnoFashionLoader isLoading={isLoading} />;
}
