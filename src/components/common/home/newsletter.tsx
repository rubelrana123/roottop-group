"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterData) => {
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
        {
          email: data.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Subscribed successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#1E2340] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-20 lg:py-16">
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="max-w-md text-3xl font-bold leading-tight text-[#1d213b] md:text-4xl">
                Get Instant Access To The Latest Business News
              </h3>
            </div>

            <div>
              <p className="mb-8 max-w-lg text-base leading-7 text-gray-700 md:text-lg">
                Sign up today to receive the latest in business,
                technology, and industry updates.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4 sm:flex-row"
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="ENTER YOUR EMAIL ADDRESS HERE..."
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "newsletter-email-error" : undefined
                    }
                    className={`w-full border-0 border-b bg-transparent px-0 py-4 text-sm uppercase tracking-wide placeholder:text-gray-500 focus:outline-none ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-400 focus:border-[#1d213b]"
                    }`}
                  />

                  {errors.email && (
                    <p
                      id="newsletter-email-error"
                      role="alert"
                      className="mt-2 text-sm text-red-500"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 border border-[#1d213b] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1d213b] transition-all duration-300 hover:bg-[#1d213b] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}