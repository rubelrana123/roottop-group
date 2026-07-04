 
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#1E2340] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-20 lg:py-16">
          {/* Background Text */}
          {/* <h2
            aria-hidden="true"
            className="absolute left-6 top-8 text-5xl font-black uppercase tracking-tight text-gray-200 sm:text-6xl md:left-12 md:text-7xl"
          >
            Newsletter
          </h2> */}

          {/* Small Label */}
          {/* <div className="relative z-10 mb-12">
            <span className="inline-block border-l-4 border-[#1d213b] pl-3 text-sm font-bold uppercase tracking-widest text-[#1d213b]">
              Newsletter
            </span>
          </div> */}


          {/* Content */}
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <h3 className="max-w-md text-3xl font-bold leading-tight text-[#1d213b] md:text-4xl">
                Get Instant Access To The Latest Business News
              </h3>
            </div>

            {/* Right */}
            <div>
              <p className="mb-8 max-w-lg text-base leading-7 text-gray-700 md:text-lg">
                Sign up today to receive the latest in business,
                technology, and industry updates.
              </p>

              <form
                className="flex flex-col gap-4 sm:flex-row"
                action="#"
                method="post"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL ADDRESS HERE..."
                  className="w-full border-0 border-b border-gray-400 bg-transparent px-0 py-4 text-sm uppercase tracking-wide placeholder:text-gray-500 focus:border-[#1d213b] focus:outline-none"
                />

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 border border-[#1d213b] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1d213b] transition-all duration-300 hover:bg-[#1d213b] hover:text-white"
                >
                  Submit
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