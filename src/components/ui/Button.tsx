import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export function Button({ children, variant = 'primary', isLoading, className = '', ...props }: ButtonProps) {
  const baseStyle = "w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Menggunakan warna dari config tailwind tadi (if-primary)
    primary: "bg-if-primary text-white hover:bg-if-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-1",
    outline: "bg-transparent border-2 border-if-primary text-if-primary hover:bg-if-primary/10",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
}