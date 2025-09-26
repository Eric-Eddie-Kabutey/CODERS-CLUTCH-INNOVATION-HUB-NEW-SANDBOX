import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f3fef2] pt-60 pb-24">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-[6rem] xl:px-[8rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <p className="text-green-600 text-sm font-medium">
              250+ Startups launched from our programs.
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Where <span className="font-serif italic font-bold text-[#111828]"> Ideas Spark</span>  <br />
              And Futures are Built
            </h1>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#34cc33] text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition">
                Join the Hub
              </button>
              <button className="bg-white text-[#34cc33] border border-[#34cc33] px-6 py-3 rounded-full font-medium hover:bg-green-50 transition">
                Explore Programs
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 lg:pl-11"> {/* Added lg:pl-8 to move right-side content slightly right */}
            <p className="text-gray-800 text-base leading-relaxed">
              Empowering entrepreneurs, startups, and changemakers <br />
              with the tools, mentorship, and community they need <br />
              to scale impact.
            </p>

            <div className="space-y-3">
              <div className="overflow-hidden">
                <div className="flex -space-x-3 ">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-green-500 bg-gray-200 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              <span className="text-green-600 font-medium block">
                Guided by 5+ Experts
              </span>
            </div>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-6 animate-slide">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="min-w-[350px] h-56 bg-gray-200 rounded-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
