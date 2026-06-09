type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  min?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormField({ label, type = "text", placeholder, value, min, onChange }: FormFieldProps) {
  return (
    <div>
      <label className="text-sm text-white/60">{label}</label>
      <input type={type} placeholder={placeholder} value={value} min={min} onChange={onChange} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
    </div>
  );
}
