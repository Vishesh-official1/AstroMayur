"use client";

import { ShieldCheck } from "lucide-react";

export default function ConsultationSections() {
  return (
    <>
      <section className="bg-yellow-50">
        {/* 6. Pricing & Packages */}
        <section className="bg-yellow-50 py-12 text-center text-black">
          <h2 className="text-3xl font-extrabold mb-3">Pricing & Packages</h2>
          <p className="mb-6 text-gray-800 text-lg">
            Transparent rates for every session
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="bg-white border rounded-2xl p-6 shadow-md w-72 transition hover:shadow-lg">
              <h3 className="font-bold text-xl mb-2">Per Minute</h3>
              <p className="text-lg">₹30 / min</p>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-md w-72 transition hover:shadow-lg">
              <h3 className="font-bold text-xl mb-2">First Session</h3>
              <p className="text-lg">₹99 for 15 mins</p>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="max-w-6xl mx-auto px-4 py-12 bg-yellow-50 text-black">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border p-6 rounded-xl shadow-md">
              <p className="italic text-lg">
                “Thanks to AstroKapil’s advice, I avoided a major business
                loss!”
              </p>
              <p className="mt-4 font-semibold text-gray-900">– Rohan S.</p>
            </div>
            <div className="bg-white border p-6 rounded-xl shadow-md">
              <p className="italic text-lg">
                “I found peace and clarity in my love life after consulting.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">– Priya M.</p>
            </div>
          </div>
        </section>

        {/* 8. Trust Badges */}
        <section className="bg-gray-100 py-8 flex flex-wrap items-center justify-center gap-8 text-black">
          <div className="flex items-center gap-2 text-lg">
            <ShieldCheck className="text-green-600" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <ShieldCheck className="text-green-600" />
            <span>Verified Astrologers</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <ShieldCheck className="text-green-600" />
            <span>Secure Payments</span>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-black">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-lg border shadow-sm">
              <h3 className="font-semibold text-lg">
                How long is the consultation?
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                Consultations can range from 5 to 30 minutes depending on your
                choice.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border shadow-sm">
              <h3 className="font-semibold text-lg">Are my details private?</h3>
              <p className="text-sm text-gray-700 mt-1">
                Yes, all sessions are 100% confidential and secure.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border shadow-sm">
              <h3 className="font-semibold text-lg">
                Can I talk to the same astrologer again?
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                Yes, you can book the same expert again based on availability.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
