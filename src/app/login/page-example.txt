"use client";

import { useState, useEffect } from "react";
import InnoFashionLoader from "@/components/InnoFashionLoader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <InnoFashionLoader
          show={loading}
          cycleDuration={1800}
          onComplete={() => console.log("Loader done!")}
        />
      )}

      {!loading && (
        <main style={{ background: "#000", color: "#fff", minHeight: "100vh", display: "grid", placeItems: "center" }}>
          <h1>Welcome to INNOFASHION SHOW</h1>
        </main>
      )}
    </>
  );
}
