"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Swal from 'sweetalert2';

function ErrorWatcher() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const error = searchParams?.get('error');

    if (error) {
      let title = "AKSES DITOLAK!";
      let text = "Anda tidak memiliki izin untuk mengakses halaman tersebut.";

      if (error === 'unauthenticated') {
        title = "SESI HABIS";
        text = "Silakan login terlebih dahulu untuk melanjutkan.";
      } else if (error === 'unauthorized_admin') {
        text = "Halaman tersebut khusus untuk Administrator.";
      } else if (error === 'unauthorized_user') {
        text = "Admin tidak dapat mengakses halaman khusus pengguna biasa.";
      } else if (error === 'forbidden_role') {
        text = "Anda tidak memiliki hak akses (permission) untuk menu ini.";
      }

      Swal.fire({
        title,
        text,
        icon: 'warning',
        confirmButtonColor: '#1c1c1b',
        confirmButtonText: 'MENGERTI',
        customClass: {
          popup: 'rounded-none border-4 border-[#1c1c1b]',
          title: 'font-creato-title font-black uppercase',
          confirmButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest',
        }
      });

      const newParams = new URLSearchParams(searchParams?.toString());
      newParams.delete('error');
      const newUrl = `${pathname}${newParams.toString() ? `?${newParams.toString()}` : ''}`;
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, pathname, router]);

  return null;
}

export default function GlobalErrorWatcher() {
  return (
    <Suspense fallback={null}>
      <ErrorWatcher />
    </Suspense>
  );
}