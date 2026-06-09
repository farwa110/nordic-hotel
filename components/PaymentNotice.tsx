import { ArrowLeft } from "lucide-react";
type PaymentNoticeProps = {
  onBack: () => void;
};

export default function PaymentNotice({ onBack }: PaymentNoticeProps) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-8">
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37]">
        <ArrowLeft size={18} />
        Back to booking review
      </button>
      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Secure Payment</p>

      <h2 className="mt-4 font-(--font-playfair) text-4xl text-white">Complete your reservation</h2>

      <p className="mt-3 max-w-xl text-white/60">You selected Pay Now. Secure online payment will be available through Stripe Checkout.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#050816] p-5">
          <p className="font-medium text-white">Stripe</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#050816] p-5">
          <p className="font-medium text-white">Apple Pay</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#050816] p-5">
          <p className="font-medium text-white">Google Pay</p>
        </div>
      </div>

      <button disabled className="mt-8 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black opacity-70">
        Proceed to Payment
      </button>
    </div>
  );
}
