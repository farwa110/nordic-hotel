import Button from "./Button";

type BookingReviewProps = {
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: number;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  onEdit: () => void;
  onReserve: () => void;
};

export default function BookingReview({ fullName, email, phone, guests, checkIn, checkOut, nights, totalPrice, paymentMethod, setPaymentMethod, onEdit, onReserve }: BookingReviewProps) {
  return (
    <div className="mt-6 rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6">
      <button type="button" onClick={onEdit} className="mb-6 text-sm text-white/60 transition hover:text-[#D4AF37]">
        ← Edit guest details
      </button>

      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Booking Review</p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm text-white/50">Name</p>
          <p className="text-xl text-white">{fullName}</p>
        </div>

        <div>
          <p className="text-sm text-white/50">Email</p>
          <p className="text-xl text-white">{email}</p>
        </div>

        <div>
          <p className="text-sm text-white/50">Phone</p>
          <p className="text-xl text-white">{phone}</p>
        </div>

        <div>
          <p className="text-sm text-white/50">Guests</p>
          <p className="text-xl text-white">{guests} guest(s)</p>
        </div>

        <div>
          <p className="text-sm text-white/50">Stay</p>
          <p className="text-xl text-white">
            {checkIn} → {checkOut}
          </p>
        </div>

        <div>
          <p className="text-sm text-white/50">Nights</p>
          <p className="text-xl text-white">{nights} night(s)</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-sm text-white/50">Total Stay Price</p>

        <p className="mt-2 text-5xl font-semibold text-[#D4AF37]">${totalPrice}</p>

        <p className="mt-3 text-sm text-white/60">Breakfast, sauna access and retreat amenities included.</p>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm text-white/50">Payment Method</p>

        <div className="grid gap-4 md:grid-cols-2">
          <label className={`cursor-pointer rounded-2xl border p-4 transition ${paymentMethod === "arrival" ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-white/10 bg-[#050816]"}`}>
            <input type="radio" name="payment" value="arrival" checked={paymentMethod === "arrival"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />

            <span className="font-medium text-white">Pay on Arrival</span>

            <p className="mt-2 text-sm text-white/60">No payment required today.</p>
          </label>

          <label className={`cursor-pointer rounded-2xl border p-4 transition ${paymentMethod === "now" ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-white/10 bg-[#050816]"}`}>
            <input type="radio" name="payment" value="now" checked={paymentMethod === "now"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />

            <span className="font-medium text-white">Pay Now</span>

            <p className="mt-2 text-sm text-white/60">Secure your reservation immediately.</p>
          </label>
        </div>
      </div>

      <div className="mt-8">
        <button type="button" onClick={onReserve} className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-white transition hover:opacity-90">
          Reserve Your Stay
        </button>
      </div>
    </div>
  );
}
