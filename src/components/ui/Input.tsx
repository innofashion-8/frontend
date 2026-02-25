import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-bold text-if-dark mb-2">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full border-2 bg-if-bg px-4 py-3 rounded-xl text-if-dark placeholder:text-if-muted focus:outline-none focus:border-if-primary focus:ring-2 focus:ring-if-primary/20 transition-all ${
            error ? 'border-red-500 bg-red-50' : 'border-if-border'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-xs mt-2 font-semibold flex items-center gap-1">
            ⚠️ {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";