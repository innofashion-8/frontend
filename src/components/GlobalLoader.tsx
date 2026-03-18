"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InnoFashionLoader from "./InnoFashionLoader";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on route change
    setIsLoading(true);

    // Provide enough time for animation and fake loading progress
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <InnoFashionLoader isLoading={isLoading} />;
}
