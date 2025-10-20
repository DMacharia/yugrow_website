"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Calendar,
  Star,
} from "lucide-react";
import Link from "next/link";
import { BookingCalendar } from "@/components/booking-calendar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function YuGrowPage() {
  interface SelectedPackage {
    name: string;
    price?: string;
  }

  const steps = [
    {
      number: 1,
      title: "Free Introductory Meeting",
      text: "30-min meeting to discuss your needs, career goals, and aspirations. This session helps us determine the best way forward and whether our program is the right fit for you.",
    },
    {
      number: 2,
      title: "Sign-Up",
      text: "Once you’re ready to move forward, you’ll complete your enrollment through our Sign-Up Page. We capture your details and career goals, and share program structure and payment plan details.",
    },
    {
      number: 3,
      title: "Assessment",
      text: "Identify your strengths, weaknesses, and personality traits. These insights form the foundation of your personalized career journey.",
    },
    {
      number: 4,
      title: "1-on-1 Coaching",
      text: "Tailored coaching sessions (1-hour each) designed to align with your career goals and address your unique challenges.",
    },
    {
      number: 5,
      title: "Action Plan",
      text: "Create a personalized, actionable plan with clear steps to achieve your career goals and continue progressing with confidence.",
    },
  ];

  const [active, setActive] = useState(0);

  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage>({
    name: "",
    price: "",
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white min-h-[85vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/yugrow.jpg"
            alt="YuGrow 1-on-1 Career Coaching"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-orange-50/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              YuGrow:{" "}
              <span className="text-orange-500">1-on-1 Career Coaching</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto lg:mx-0">
              Personalized coaching sessions designed to help you gain clarity,
              build confidence, and achieve your career goals with dedicated
              one-on-one support.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
              Whether you're seeking a career change, navigating workplace
              challenges, or aiming for a promotion, our tailored coaching
              sessions provide actionable strategies and expert guidance to help
              you grow. We focus on clarity, confidence, and measurable results
              — empowering you to make informed decisions and thrive in your
              career journey.
            </p>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <a href="#book-slot">
                Book your slot now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Foreground Image (on Desktop) */}
          <div className="hidden lg:flex justify-end relative">
            <img
              src="/images/yugrow.jpg"
              alt="Career coaching session"
              className="w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-200 rounded-full opacity-25 blur-3xl"></div>
            <div className="absolute top-0 -right-10 w-56 h-56 bg-orange-100 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Coaching Process Section (Enhanced) */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Coaching Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our 5-step process is designed to guide you from discovery to
              transformation. Hover or tap on each card to explore your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 cursor-pointer ${
                  active === index
                    ? "border-orange-500 shadow-orange-100"
                    : "border-orange-100"
                }`}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center text-2xl font-bold text-orange-500">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.text}</p>

                {active === index && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 rounded-2xl border-2 border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Packages Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coaching Packages Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're looking for a single breakthrough session or a
              long-term transformation, we have a package that suits your goals
              and timeline.
            </p>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick-Win Coaching */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-orange-400">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Quick-Win Coaching
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Perfect for individuals with one immediate need.
                </CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-orange-500">
                    Ksh 5,000
                  </div>
                  <p className="text-sm text-gray-500">Per session (1 hour)</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Career Clarity Call:</strong> 1-hour discovery
                      session to clarify direction, strengths, and next steps.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Interview Power Hour:</strong> Mock interview and
                      feedback for confidence and success.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>CV & LinkedIn Refresh:</strong> Revamp your
                      professional profile to attract better opportunities.
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={() => {
                    setSelectedPackage({
                      name: "Quick-Win Coaching",
                      price: "Ksh 5,000",
                    });
                    document
                      .getElementById("book-slot")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                >
                  Book Quick-Win Session
                </Button>
              </CardContent>
            </Card>

            {/* Professional Growth */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Professional Growth
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Designed for structured career growth and transformation.
                </CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-orange-500">
                    Ksh 25,000
                  </div>
                  <p className="text-sm text-gray-500">6 sessions (2 months)</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Career Repositioning Package:</strong> Assessment
                      mapping, CV rewrite, and job search strategy.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Job Search Accelerator:</strong> Focus on personal
                      branding, networking, and interview excellence.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Young Professional Launchpad:</strong> For
                      graduates building direction and job readiness.
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={() => {
                    setSelectedPackage({
                      name: "Professional Growth",
                      price: "Ksh 25,000",
                    });
                    document
                      .getElementById("book-slot")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                >
                  Start Professional Growth
                </Button>
              </CardContent>
            </Card>

            {/* Career Mastery */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-orange-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Career Mastery Program
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  A 6-month journey for total career transformation and
                  accountability.
                </CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-orange-500">
                    Ksh 50,000
                  </div>
                  <p className="text-sm text-gray-500">
                    12 sessions (6 months)
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Career Transformation Plan:</strong> Deep
                      coaching, mentoring, and accountability tracking.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Leadership Transition Package:</strong> Build
                      executive presence, negotiation, and influence.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      <strong>Priority Access:</strong> Ongoing progress reviews
                      and unlimited check-ins between sessions.
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={() => {
                    setSelectedPackage({
                      name: "Career Mastery Program",
                      price: "Ksh 50,000",
                    });
                    document
                      .getElementById("book-slot")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                >
                  Start Mastery Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Achieve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our coaching process is designed to deliver tangible results that
              transform your career trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clear Career Direction
              </h3>
              <p className="text-gray-600">
                Gain clarity on your career path and identify the steps needed
                to reach your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enhanced Professional Skills
              </h3>
              <p className="text-gray-600">
                Develop key skills that make you more marketable and effective
                in your role.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Increased Confidence
              </h3>
              <p className="text-gray-600">
                Build the confidence needed to take on new challenges and
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "The YuGrow coaching program transformed my career. I went from
                feeling stuck in my current role to landing my dream job with a
                40% salary increase. The personalized approach and ongoing
                support made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-500 font-semibold">K</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Kwame A.</p>
                  <p className="text-gray-600">Senior Software Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-slot" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-600">
              Book your free introductory meeting today and take the first step
              towards career success.
            </p>
          </div>
          <BookingCalendar selectedPackage={selectedPackage} />
        </div>
      </section>
    </div>
  );
}
