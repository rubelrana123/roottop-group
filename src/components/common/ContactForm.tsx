"use client";

import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(100),

  email: z.string().email("Please enter a valid email address"),

  phone: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(\+8801|8801|01)[3-9]\d{8}$/.test(value),
      {
        message: "Please enter a valid Bangladeshi phone number",
      }
    ),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(150),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully");
      toast.success("Message sent successfully");


      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F6F6F6] py-16">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-6xl space-y-7"
        >
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name *
            </label>

            <input
              type="text"
              {...register("fullName")}
              className={`w-full border bg-white px-4 py-3 outline-none transition
              ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-400 focus:border-primary"
              }`}
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email *
              </label>

              <input
                type="email"
                {...register("email")}
                className={`w-full border bg-white px-4 py-3 outline-none transition
                ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-400 focus:border-primary"
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone
              </label>

              <input
                type="text"
                {...register("phone")}
                className={`w-full border bg-white px-4 py-3 outline-none transition
                ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-400 focus:border-primary"
                }`}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Subject *
            </label>

            <input
              type="text"
              {...register("subject")}
              className={`w-full border bg-white px-4 py-3 outline-none transition
              ${
                errors.subject
                  ? "border-red-500"
                  : "border-gray-400 focus:border-primary"
              }`}
            />

            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message *
            </label>

            <textarea
              rows={5}
              {...register("message")}
              className={`w-full resize-none border bg-white px-4 py-3 outline-none transition
              ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-400 focus:border-primary"
              }`}
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center cursor-pointer gap-3 border border-primary bg-white px-6 py-3 text-sm font-medium uppercase transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
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
  );
}