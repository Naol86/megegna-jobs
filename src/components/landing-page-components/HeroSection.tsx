"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building,
  Clock,
  Globe,
  GraduationCap,
  Home,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Floating icons on the left */}
      <div className="hidden absolute left-0 inset-y-0 w-1/3 lg:flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-1/4 animate-float-slow">
            <GraduationCap className="h-10 w-10 text-primary/70" />
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float">
            <Building className="h-8 w-8 text-primary/60" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float-slow-reverse">
            <Globe className="h-12 w-12 text-primary/50" />
          </div>
          <div className="absolute top-2/3 left-1/2 animate-float-reverse">
            <Home className="h-9 w-9 text-primary/40" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl lg:w-3/4 mx-auto font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Your Gateway to{" "}
          <span className="text-brand-primary">Internships</span> and{" "}
          <span className="text-brand-primary">Dream Jobs!</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 md:pr-10 mx-auto mt-6 max-w-2xl sm:text-xl text-muted-foreground">
          Connecting students and professionals with quality remote, hybrid, and
          in-person opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">Apply as a Candidate</Button>
            <Button variant="outline" className="btn-outline">
              Hire Talent
            </Button>
          </div>
        </div>
      </div>

      {/* Floating icons on the right */}
      <div className="hidden absolute right-0 inset-y-0 md:w-1/3 lg:flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/3 right-1/4 animate-float">
            <Users className="h-11 w-11 text-primary/60" />
          </div>
          <div className="absolute top-1/2 right-1/3 animate-float-slow">
            <Laptop className="h-9 w-9 text-primary/70" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float-reverse">
            <Clock className="h-10 w-10 text-primary/50" />
          </div>
          <div className="absolute top-2/3 right-1/2 animate-float-slow-reverse">
            <MapPin className="h-8 w-8 text-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
