"use client";

import { useState } from "react";
// import Button from "./Button";
import FormField from "./FormField";
import DateField from "./DateField";
import LoadingSpinner from "./LoadingSpinner";
import { calculateNights } from "@/utils/booking";
import BookingReview from "./BookingReview";
import ReservationSuccess from "./ReservationSuccess";
import PaymentNotice from "./PaymentNotice";
import Image from "next/image";

type Room = {
  title: string;
  description: string;
  price: string;
  images: string[];
};

type BookingUserProps = {
  selectedRoom?: Room;
};

export default function BookingUser({ selectedRoom }: BookingUserProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("arrival");
  const [showSummary, setShowSummary] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "success" | "payment">("idle");

  const today = new Date().toISOString().split("T")[0];

  const pricePerNight = Number(selectedRoom?.price.replace("$", "") || 0);
  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = nights * pricePerNight;

  function handleCalculatePrice() {
    if (!checkIn || !checkOut || nights <= 0) return;

    setShowSummary(false);
    setIsCalculating(true);

    setTimeout(() => {
      setIsCalculating(false);
      setShowSummary(true);
    }, 1200);
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {selectedRoom && (
        <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
          {/* <img src={selectedRoom.images[0]} alt={selectedRoom.title} className="h-72 w-full rounded-2xl object-cover" /> */}
          {/* <Image src={selectedRoom.images[0]} alt={selectedRoom.title} className="h-96 w-full rounded-2xl object-cover" /> */}
          <Image src={selectedRoom.images[0]} alt={selectedRoom.title} width={900} height={600} loading="eager" className="h-96 w-full rounded-2xl object-cover" />
          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Selected Retreat</p>

            <h2 className="mt-3 font-(--font-playfair) text-3xl md:text-4xl">{selectedRoom.title}</h2>

            <p className="mt-3 text-white/60">{selectedRoom.description}</p>

            <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">From {selectedRoom.price} / Night</p>
          </div>

          <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4">
            <p className="font-semibold text-[#D4AF37]">Pay on arrival</p>
            <p className="mt-2 text-sm text-white/60">Your booking request will be confirmed by email. Payment is completed when you arrive at the retreat.</p>
          </div>
        </div>
      )}

      <form className="rounded-3xl border border-white/10 bg-white/3 p-6">
        {bookingStatus === "success" ? (
          <ReservationSuccess onBack={() => setBookingStatus("idle")} />
        ) : bookingStatus === "payment" ? (
          <PaymentNotice onBack={() => setBookingStatus("idle")} />
        ) : !showSummary ? (
          <>
            <h2 className="font-(--font-playfair) text-3xl">Guest Details</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <FormField label="Full Name" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

              <FormField label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

              <DateField label="Check-in" value={checkIn} min={today} onChange={setCheckIn} />

              <DateField label="Check-out" value={checkOut} min={checkIn || today} onChange={setCheckOut} />

              <div>
                <label className="text-sm text-white/60">Guests</label>

                <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]">
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>

              <FormField label="Phone" type="tel" placeholder="+45 12 34 56 78" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="mt-5">
              <label className="text-sm text-white/60">Special Request</label>
              <textarea placeholder="Arrival time, extra notes, preferences..." rows={4} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
            </div>

            <div className="mt-8">
              <button type="button" onClick={handleCalculatePrice} disabled={!checkIn || !checkOut || isCalculating} className="inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50">
                <span className="flex items-center gap-2">
                  {isCalculating && <LoadingSpinner />}
                  {isCalculating ? "Calculating..." : "Calculate Stay Price"}
                </span>
              </button>
            </div>
          </>
        ) : (
          <BookingReview
            fullName={fullName}
            email={email}
            phone={phone}
            guests={guests}
            checkIn={checkIn}
            checkOut={checkOut}
            nights={nights}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            onEdit={() => setShowSummary(false)}
            onReserve={() => {
              if (paymentMethod === "arrival") {
                setBookingStatus("success");
              } else {
                setBookingStatus("payment");
              }
            }}
          />
        )}
      </form>
    </div>
  );
}
