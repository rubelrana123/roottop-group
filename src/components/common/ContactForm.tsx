"use client";

import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const form = e.currentTarget;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully");

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#F6F6F6] py-16">
        <div className="container mx-auto px-4">

          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-6xl space-y-7"
          >

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name *
              </label>

              <input
                type="text"
                name="fullName"
                required
                className="w-full border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#4FA73F]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#4FA73F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  className="w-full border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#4FA73F]"
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Subject *
              </label>

              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#4FA73F]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message *
              </label>

              <textarea
                rows={5}
                name="message"
                required
                className="w-full resize-none border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#4FA73F]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex items-center gap-3 border border-gray-500 bg-white px-6 py-3 text-sm font-medium uppercase transition hover:bg-[#171A3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}