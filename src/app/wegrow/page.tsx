"use client";

import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/cta-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Calendar,
  CheckCircle,
  Star,
  Target,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import { BookingCalendar } from "@/components/booking-calendar";

export default function WeGrowPage() {
  interface SelectedPackage {
    name: string;
    price?: string;
  }

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
            src="/images/wegrow-group.jpg"
            alt="WeGrow group training program"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-orange-50/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              WeGrow:{" "}
              <span className="text-orange-500">Group Training Programs</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto lg:mx-0">
              Collaborative learning experiences with peers. Build skills,
              expand your network, and grow together in a supportive group
              environment.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
              Our WeGrow sessions focus on creating a collaborative space where
              participants share experiences, gain diverse insights, and build
              strong professional networks. Together, we empower one another to
              grow personally and professionally.
            </p>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <a href="#program-structure">
                Join our next cohort <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Optional Accent Image (Foreground Focus on Desktop) */}
          <div className="hidden lg:flex justify-end relative">
            <img
              src="/images/wegrow-group.jpg"
              alt="WeGrow community"
              className="w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-200 rounded-full opacity-25 blur-3xl"></div>
            <div className="absolute top-0 -right-10 w-56 h-56 bg-orange-100 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section id="program-structure" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for an interactive learning journey featuring expert-led
              workshops, real-world case studies, peer discussions, and
              role-plays — designed to help you gain practical skills, share
              insights, and grow your professional network while learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 5-Week Program */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      WeGrow Core Program
                    </CardTitle>
                    <CardDescription className="text-base">
                      5-Week Group interactive and flexible career growth
                      journey
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    5-week program with live weekly sessions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert-led workshops, discussions & open Q&A
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Small cohorts (3–10 participants) for personalized attention
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Virtual via Google Meet — Mondays and/or Thursdays, 7–8:30
                    PM
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pre-assessment before kickoff & feedback within 24 hours
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New cohorts start every month
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-2xl font-bold text-orange-500 mb-4">
                    KES 18,500
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedPackage({
                        name: "WeGrow 5-week Program",
                        price: "Ksh 18,500",
                      });
                      document
                        .getElementById("book-slot")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                  >
                    <a href="#book-class">Join 5-Week WeGrow Core</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 8-Week Program */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200 relative flex flex-col h-full">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      WeGrow MasterClass Program
                    </CardTitle>
                    <CardDescription className="text-base">
                      8-week immersive journey for career and leadership growth
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Learn through real-world case studies, peer discussions, and
                    role-plays
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Build your professional network and gain practical
                    experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1
                    session per week (3 hours each) — live, interactive, and
                    virtual (G-Meet)
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cohorts of 3–10 participants for personalized guidance and
                    feedback
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Masterclass option available for focused, one-time deep
                    dives
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bespoke learning packages tailored to your goals and
                    organization
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All assignments returned with feedback within 24 hours
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-2xl font-bold text-orange-500 mb-4">
                    KES 28,500
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedPackage({
                        name: "WeGrow 8-week Program",
                        price: "Ksh 28,500",
                      });
                      document
                        .getElementById("book-slot")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                  >
                    <a href="#book-class">Join 8-Week WeGrow MasterClass</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our curriculum is designed to equip you with the essential skills
              and knowledge needed to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Career Strategy
              </h3>
              <p className="text-gray-600">
                Develop a clear career roadmap and learn how to navigate career
                transitions effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Networking
              </h3>
              <p className="text-gray-600">
                Build meaningful professional relationships and expand your
                network strategically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personal Branding
              </h3>
              <p className="text-gray-600">
                Create a compelling personal brand that sets you apart in the
                job market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interview Skills
              </h3>
              <p className="text-gray-600">
                Master the art of interviewing and learn how to present yourself
                confidently.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Leadership Development
              </h3>
              <p className="text-gray-600">
                Develop leadership skills and learn how to influence and inspire
                others.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Goal Achievement
              </h3>
              <p className="text-gray-600">
                Learn proven strategies for setting and achieving your career
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cohort Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a diverse group of professionals who are committed to growing
              their careers together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Makes Our Cohorts Special
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Diverse Professional Backgrounds
                    </h4>
                    <p className="text-gray-600">
                      Learn from peers across different industries and
                      experience levels.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Collaborative Learning
                    </h4>
                    <p className="text-gray-600">
                      Work together on projects and learn from each other's
                      experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-600">
                      Access to alumni network and continued learning
                      opportunities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Real-world Application
                    </h4>
                    <p className="text-gray-600">
                      Apply what you learn immediately in your current role or
                      job search.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Cohorts
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold text-gray-900">WeGrow Core</h5>
                  <p className="text-gray-600">Starting Jan, 2026</p>
                  <p className="text-sm text-gray-500">
                    Mondays & Wednesdays, 6:00 PM - 8:00 PM
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold text-gray-900">
                    WeGrow MasterClass
                  </h5>
                  <p className="text-gray-600">Starting March, 2026</p>
                  <p className="text-sm text-gray-500">
                    Saturdays, 10:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Alumni Say
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
                "The WeGrow program was a game-changer for my career. The
                collaborative environment and diverse perspectives helped me see
                my career from new angles. I landed a promotion within 3 months
                of completing the program."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-500 font-semibold">F</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fatima K.</p>
                  <p className="text-gray-600">Project Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="join-cohort"
        className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center relative overflow-hidden"
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/circles.svg')] opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to Grow Together?
          </h2>
          <p className="text-lg sm:text-xl text-orange-50 mb-10 leading-relaxed">
            Join our next cohort and start your journey toward career success —
            learning, growing, and thriving alongside a supportive community of
            professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => {
                setSelectedPackage({
                  name: "WeGrow 5-week Program",
                  price: "Ksh 18,500",
                });
                document
                  .getElementById("book-slot")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-10 py-5 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:text-black transition-all duration-300"
            >
              <a href="#book-class">Join 5-Week WeGrow Core</a>
              <Calendar className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => {
                setSelectedPackage({
                  name: "WeGrow 8-week Program",
                  price: "Ksh 28,500",
                });
                document
                  .getElementById("book-slot")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-10 py-5 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:text-black transition-all duration-300"
            >
              <a href="#book-class"> Join 8-Week WeGrow MasterClass</a>
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="book-class" className="py-16 bg-white scroll-mt-20">
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
