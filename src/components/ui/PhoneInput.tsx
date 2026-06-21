import React, { useState, useRef, useEffect } from 'react';
import palette from '@/config/palette';

export const countryCodes = [
  { code: '+62', label: 'Indonesia' },
  { code: '+60', label: 'Malaysia' },
  { code: '+65', label: 'Singapore' },
  { code: '+66', label: 'Thailand' },
  { code: '+63', label: 'Philippines' },
  { code: '+84', label: 'Vietnam' },
  { code: '+86', label: 'China' },
  { code: '+886', label: 'Taiwan' },
  { code: '+81', label: 'Japan' },
  { code: '+82', label: 'South Korea' },
  { code: '+91', label: 'India' },
  { code: '+90', label: 'Turkey' },
  { code: '+971', label: 'UAE' },
  { code: '+966', label: 'Saudi Arabia' },
  { code: '+61', label: 'Australia' },
  { code: '+64', label: 'New Zealand' },
  { code: '+1', label: 'USA/Canada' },
  { code: '+44', label: 'UK' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+31', label: 'Netherlands' },
  { code: '+39', label: 'Italy' },
  { code: '+34', label: 'Spain' },
  { code: '+7', label: 'Russia/Kazakhstan' },
  { code: '+55', label: 'Brazil' },
  { code: '+52', label: 'Mexico' },
  { code: '+54', label: 'Argentina' },
  { code: '+27', label: 'South Africa' },
  { code: '+20', label: 'Egypt' },
];

interface PhoneInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  required?: boolean;
  bgClass?: string;
  pClass?: string;
  containerClass?: string;
}

export default function PhoneInput({ 
  label = "WHATSAPP CONTACT", 
  value, 
  onChange, 
  error, 
  disabled = false,
  required = true,
  bgClass = palette.obsidian,
  pClass = "p-4",
  containerClass = "w-full"
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitialCode = (fullNumber: string) => {
    if(!fullNumber) return '+62';
    for (const c of countryCodes) {
      if (fullNumber.startsWith(c.code)) return c.code;
    }
    return '+62';
  };

  const code = getInitialCode(value);
  const local = value ? value.replace(code, '') : '';

  const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocal = e.target.value.replace(/\D/g, ''); 
    onChange(code + newLocal);
  };

  const hasError = !!error;
  const errorMsg = typeof error === 'string' ? error : null;

  return (
    <div className={containerClass}>
      <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
        {label} {required && '*'}
      </label>
      <div className="flex relative">
        {/* Custom Dropdown */}
        <div 
          ref={dropdownRef}
          className="relative"
          style={{ width: '100px', flexShrink: 0 }}
        >
          <div 
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={`w-full h-full border border-r-0 ${pClass} flex items-center justify-between transition-all select-none text-sm font-medium tracking-widest ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:brightness-110'}`}
            style={{ 
              backgroundColor: bgClass, 
              borderColor: hasError ? '#ef4444' : palette.graphite, 
              color: palette.stucco 
            }}
          >
            <span>{code}</span>
            <span className="text-[8px] transition-transform duration-200" style={{ color: palette.greige, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
          </div>

          {isOpen && (
            <div 
              className="absolute left-0 top-[105%] w-[250px] z-50 border max-h-[300px] overflow-y-auto shadow-2xl custom-scrollbar"
              style={{ backgroundColor: bgClass, borderColor: palette.graphite }}
            >
              {countryCodes.map(c => (
                <div 
                  key={c.code}
                  className="p-4 text-sm cursor-pointer transition-colors"
                  style={{ 
                    color: code === c.code ? palette.stucco : palette.greige,
                    backgroundColor: code === c.code ? 'rgba(255,255,255,0.05)' : 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = code === c.code ? 'rgba(255,255,255,0.05)' : 'transparent'}
                  onClick={() => {
                    onChange(c.code + local);
                    setIsOpen(false);
                  }}
                >
                  <span className="font-bold w-[60px] inline-block" style={{ color: palette.stucco }}>{c.code}</span> 
                  {c.label}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <input 
          type="tel" 
          required={required} 
          placeholder="8123456789" 
          value={local} 
          onChange={handleLocalChange} 
          disabled={disabled}
          className={`w-full text-sm border ${pClass} transition-all focus:outline-none font-medium tracking-widest placeholder:text-white/20 disabled:opacity-50 disabled:cursor-not-allowed`}
          style={{ 
            backgroundColor: bgClass, 
            borderColor: hasError ? '#ef4444' : palette.graphite, 
            color: palette.stucco 
          }}
        />
      </div>
      {errorMsg && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-wider animate-pulse">⚠️ {errorMsg}</p>}
    </div>
  );
}
