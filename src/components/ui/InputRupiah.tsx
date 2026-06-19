import React, { useState, useEffect } from 'react';
import { formatRupiah, parseRupiah } from '@/utils/calculatorHelper';

interface InputRupiahProps {
  id: string;
  label: string;
  value: number;
  onChange: (val: number) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  error?: string;
  info?: string;
}

export const InputRupiah: React.FC<InputRupiahProps> = ({
  id,
  label,
  value,
  onChange,
  disabled = false,
  placeholder = '0',
  required = false,
  error,
  info,
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    setDisplayValue(formatRupiah(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;
    
    // If input is empty, treat as 0
    if (rawInput === '') {
      setDisplayValue('0');
      onChange(0);
      return;
    }

    const numeric = parseRupiah(rawInput);
    setDisplayValue(formatRupiah(numeric));
    onChange(numeric);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (value === 0) {
      setDisplayValue('');
    }
  };

  const handleBlur = () => {
    if (value === 0 || isNaN(value)) {
      setDisplayValue('0');
    }
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-between">
        <span>
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      
      <div className="relative flex items-center rounded-lg shadow-sm">
        <span className="absolute left-3 text-sm font-semibold text-slate-400 select-none">
          Rp
        </span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 transition-all font-mono font-medium ${
            error
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950 focus:border-red-500'
              : 'border-slate-200 dark:border-slate-700 focus:ring-bps-blue-light/20 focus:border-bps-blue-light'
          } ${disabled ? 'bg-slate-100 dark:bg-slate-900 text-slate-400 cursor-not-allowed' : ''}`}
        />
      </div>
      
      {error && (
        <span className="text-[11px] md:text-xs text-red-500 font-medium">
          {error}
        </span>
      )}
      
      {info && !error && (
        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          {info}
        </span>
      )}
    </div>
  );
};
