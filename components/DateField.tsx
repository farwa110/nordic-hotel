"use client";

import { Calendar } from "lucide-react";

type DateFieldProps = {
  label: string;
  value: string;
  min?: string;
  onChange: (value: string) => void;
};

export default function DateField({ label, value, min, onChange }: DateFieldProps) {
  return (
    <div>
      <label className="text-sm text-white/60">{label}</label>

      <div className="relative">
        <input type="date" value={value} min={min} onChange={(e) => onChange(e.target.value)} onClick={(e) => e.currentTarget.showPicker?.()} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 pr-12 text-white outline-none focus:border-[#D4AF37]" />

        <Calendar className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
      </div>
    </div>
  );
}
