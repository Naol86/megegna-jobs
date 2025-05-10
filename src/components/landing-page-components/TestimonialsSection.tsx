"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Thanks to Megegna Jobs, I landed my dream remote internship that perfectly matched my skills and career goals!",
    author: "Jane Smith",
    position: "Computer Science Student",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    quote:
      "Megegna Jobs found us the perfect candidate with excellent communication skills and technical abilities.",
    author: "John Wilson",
    position: "Hiring Manager, TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The recruitment process was smooth and efficient. I was placed in a hybrid role that offers the flexibility I need.",
    author: "Anna Rodriguez",
    position: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    quote:
      "As a small business, finding qualified candidates was challenging until we discovered Megegna Jobs. Their thorough vetting process saved us time and money.",
    author: "Michael Chen",
    position: "CEO, Innovate Studio",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients and candidates have to say about their
            experience with Megegna Jobs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="rounded-full w-24 h-24 object-cover border-4 border-brand-primary/20"
                  />
                </div>
                <div className="md:w-2/3">
                  <svg
                    className="h-10 w-10 text-brand-primary/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl text-gray-700 italic mb-6">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[activeIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-brand-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
