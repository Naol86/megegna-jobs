"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Book, Check, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to{" "}
              <span className="text-brand-primary">Internships</span> and{" "}
              <span className="text-brand-primary">Dream Jobs!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-10">
              Connecting students and professionals with quality remote, hybrid,
              and in-person opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Apply as a Candidate</Button>
              <Button variant="outline" className="btn-outline">
                Hire Talent
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96">
              <div className="absolute top-10 left-10 p-4 bg-white rounded-lg shadow-lg animate-float">
                <Briefcase size={32} className="text-brand-primary mb-2" />
                <p className="font-medium">Find Internships</p>
              </div>

              <div className="absolute top-40 left-40 p-4 bg-white rounded-lg shadow-lg animate-float-delay">
                <Users size={32} className="text-brand-secondary mb-2" />
                <p className="font-medium">Connect Teams</p>
              </div>

              <div className="absolute bottom-10 left-20 p-4 bg-white rounded-lg shadow-lg animate-float">
                <Star size={32} className="text-brand-primary mb-2" />
                <p className="font-medium">Grow Skills</p>
              </div>

              <div className="absolute right-0 top-20 p-4 bg-white rounded-lg shadow-lg animate-float-delay">
                <Book size={32} className="text-brand-secondary mb-2" />
                <p className="font-medium">Learn & Develop</p>
              </div>

              <div className="absolute right-20 bottom-0 p-4 bg-white rounded-lg shadow-lg animate-float">
                <Check size={32} className="text-brand-primary mb-2" />
                <p className="font-medium">Get Hired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
