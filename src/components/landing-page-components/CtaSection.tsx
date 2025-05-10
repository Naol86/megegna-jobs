import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-primary/90 to-brand-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of students, professionals, and employers who trust
            us to find the perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-primary hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors text-lg">
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 py-3 px-8 rounded-md font-medium transition-colors text-lg"
            >
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
