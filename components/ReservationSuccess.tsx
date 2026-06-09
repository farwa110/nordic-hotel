import { ArrowLeft } from "lucide-react";
type ReservationSuccessProps = {
  onBack: () => void;
};

export default function ReservationSuccess({ onBack }: ReservationSuccessProps) {
  return (
    <div className="mt-6 rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6">
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37]">
        <ArrowLeft size={18} />
        Back to booking review
      </button>
      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Reservation Sent</p>

      <h3 className="mt-4 font-(--font-playfair) text-3xl text-white">Thank you for your request</h3>

      <p className="mt-3 text-white/60">We have received your booking request. A confirmation email will be sent shortly. Payment can be completed on arrival.</p>

      <div className="mt-6 p-5">
        <p className="font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Included in your stay</p>

        <ul className="mt-4 space-y-3 text-white/70">
          <li>✓ Gourmet breakfast each morning</li>
          <li>✓ Private sauna access</li>
          <li>✓ Panoramic mountain & lake views</li>
          <li>✓ Premium retreat amenities</li>
        </ul>
      </div>
    </div>
  );
}
