import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Diverse professionals collaborating"
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-primary rounded-lg h-24 w-24 flex items-center justify-center">
                <span className="text-white font-bold text-4xl">10+</span>
              </div>
              <div className="absolute -top-6 -left-6 bg-brand-secondary rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-brand-primary"></span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              We are a platform dedicated to bridging the gap between talent and
              opportunity. Our mission is to empower students and professionals
              by connecting them with internships and full-time roles that match
              their skills and aspirations.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Whether you&apos;re seeking remote, hybrid, or in-person positions, we
              ensure a seamless recruitment process that benefits both
              candidates and employers.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">Trusted by 500+ companies</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">10,000+ placements</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">Global reach</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">98% success rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
