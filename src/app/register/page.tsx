'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    type: 'EXTERNAL',
    institution: '',
    phone: '',
    line: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.data) {
          setErrors(data.data);
        }
        throw new Error(data.message || 'Registrasi gagal');
      }

      toast.success('Registrasi berhasil! Silakan login.');
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea3c8565?q=80&w=2574')"
        }}
      />
      
      {/* Header Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-white">
          <h1 className="text-2xl font-bold tracking-wider">INNOFASHION</h1>
          <p className="text-xs tracking-widest">SHOW</p>
        </div>
        <div className="flex items-center gap-6 text-white text-sm font-light">
          <Link href="/" className="hover:text-gray-300 transition">ABOUT US</Link>
          <Link href="/" className="hover:text-gray-300 transition">TIMELINE</Link>
          <Link href="/" className="hover:text-gray-300 transition">COMPETITIONS</Link>
          <Link href="/" className="hover:text-gray-300 transition">EVENTS</Link>
          <Link href="/" className="hover:text-gray-300 transition">CONTACT US</Link>
          <Link href="/" className="hover:text-gray-300 transition">DFT PROFILE</Link>
          <Link href="/register" className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-500 transition">REGISTER</Link>
          <Link href="/login" className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">SIGN IN</Link>
        </div>
      </nav>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <h2 className="text-6xl font-bold text-white text-center mb-12 tracking-wider">REGISTER</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />
            {errors?.name && <p className="text-red-400 text-sm px-8">{errors.name[0]}</p>}

            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />
            {errors?.email && <p className="text-red-400 text-sm px-8">{errors.email[0]}</p>}

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />
            {errors?.phone && <p className="text-red-400 text-sm px-8">{errors.phone[0]}</p>}

            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />
            {errors?.password && <p className="text-red-400 text-sm px-8">{errors.password[0]}</p>}

            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={formData.password_confirmation}
              onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />

            <select
              required
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            >
              <option value="INTERNAL">Mahasiswa UK Petra</option>
              <option value="EXTERNAL">Umum / Eksternal</option>
            </select>

            {formData.type === 'EXTERNAL' && (
              <input
                type="text"
                placeholder="Institution"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
              />
            )}

            <input
              type="text"
              placeholder="Line ID (Optional)"
              value={formData.line}
              onChange={(e) => setFormData({ ...formData, line: e.target.value })}
              className="w-full px-8 py-5 rounded-full bg-gray-200/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? 'Loading...' : 'REGISTER'}
            </button>
          </form>

          <p className="text-center text-white mt-6">
            Already have an account?{' '}
            <Link href="/login" className="underline hover:text-gray-300">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
