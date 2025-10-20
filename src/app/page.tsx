"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/cta-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Users, Heart, Star, CheckCircle } from "lucide-react";
import { BookingCalendar } from "@/components/booking-calendar";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage>({
    name: "",
    price: "",
  });

  interface SelectedPackage {
    name: string;
    price?: string;
  }

  return (
    <div className="min-h-screen">
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        {/* Decorative Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-8 py-20 lg:py-0">
          {/* Text Section */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Grow Clarity, Build Confidence— <br />
              <span className="text-orange-500">Succeed in the Workplace</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              Whether you're launching your career, growing in a current role,
              or navigating a transition to the next level — do it more
              effectively with a coach who helps you thrive with purpose and
              clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 shadow-md hover:shadow-lg"
              >
                <a href="#book-consultation">
                  Book your free 30-minute consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 hover:bg-orange-50"
                asChild
              >
                <Link href="#programs">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md lg:max-w-xl">
              <img
                src="/images/hero-bg.jpg"
                alt="Abstract representation of growth and clarity"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 via-transparent to-transparent rounded-3xl"></div>

              {/* Floating Decorative Orbs */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- BOOKING SECTION -------------------- */}
      <section id="book-consultation" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book your free 30-minute consultation
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Please select a convenient time using the calendar below. Our team
            will confirm your booking, typically within 24 hours.
          </p>

          <BookingCalendar selectedPackage={selectedPackage} />
        </div>
      </section>

      {/* -------------------- PROGRAMS SECTION -------------------- */}
      <section id="programs" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our tailored programs designed to help you grow, connect,
              and thrive in your career—whether you’re advancing, upskilling, or
              returning to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YuGrow Card */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">YuGrow</CardTitle>
                  <CardDescription className="text-base">
                    1-on-1 Career Coaching
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Personalized coaching sessions to help you gain clarity,
                    build confidence, and create a practical plan for your next
                    career move.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Free introductory session
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Personalized growth assessment
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Custom action plan
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full">
                  <Link href="/yugrow">Learn More</Link>
                </Button>
              </div>
            </Card>

            {/* WeGrow Card */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">WeGrow</CardTitle>
                  <CardDescription className="text-base">
                    Group Training Programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Learn, collaborate, and grow in a supportive group setting.
                    Build essential skills, expand your network, and boost your
                    professional growth through our 5-week and 8-week
                    masterclasses.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      5-week and 8-week programs
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Cohort-based learning
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Peer accountability and networking
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full">
                  <Link href="/wegrow">Join a Cohort</Link>
                </Button>
              </div>
            </Card>

            {/* AllGrow Card */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">AllGrow</CardTitle>
                  <CardDescription className="text-base">
                    Supporting Women Returning to Work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    A safe and empowering space for women re-entering the
                    workforce after maternity, caregiving, or career breaks.
                    Rebuild confidence, refresh your skills, and design a career
                    path that fits your life today.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Return-to-work coaching & support
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Confidence and skills rebuilding
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                      Sustainable career planning
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full">
                  <Link href="/allgrow">Join the Community</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------- WHY YUGROW -------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Yugrow</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Growing a career in today's competitive job market can feel
            overwhelming. From crafting a compelling CV and preparing for
            interviews to navigating workplace dynamics, building confidence,
            and expanding professional networks, many struggle to find the right
            guidance and support to thrive.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            At Yugrow Careers Consulting, we understand how challenging this
            journey can be. That is why we offer a range of personalized career
            development packages including career coaching, workplace training,
            networking support, and our signature WeGrow sessions.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            You do not have to navigate your career journey alone. We are here
            to guide you every step of the way.
          </p>
          <CTAButton
            size="lg"
            className="text-lg px-8 py-4"
            ctaType="consultation"
          >
            Speak with a coach
            <ArrowRight className="ml-2 h-5 w-5" />
          </CTAButton>
        </div>
      </section>

      {/* -------------------- TESTIMONIALS CAROUSEL -------------------- */}
      <TestimonialsCarousel />

      {/* -------------------- CTA -------------------- */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Career Transformation?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of professionals who have already transformed their
            careers with Yugrow.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
          >
            <a href="#book-consultation">
              Book Your Free Consultation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            TESTIMONIALS CAROUSEL                           */
/* -------------------------------------------------------------------------- */
function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000 })]
  );

  const testimonials = [
    {
      quote:
        "I was struggling to find direction in my career after graduating. Yugrow's coaching helped me identify my strengths, build confidence, and land my first job in marketing. The support was incredible!",
      name: "Grace W.",
      role: "Marketing Coordinator",
      initial: "G",
    },
    {
      quote:
        "The WeGrow group program gave me practical tools and a supportive community. I learned how to network confidently and even got introduced to my current employer through a fellow participant!",
      name: "Brian K.",
      role: "HR Assistant",
      initial: "B",
    },
    {
      quote:
        "After years out of the workforce, the YuGrow program helped me rebuild my confidence and update my CV. I’m now back working part-time while caring for my family. It truly changed my life.",
      name: "Cynthia M.",
      role: "Project Assistant",
      initial: "C",
    },
    {
      quote:
        "My coach helped me clarify my next career move and craft a compelling LinkedIn profile. Within two months, I landed multiple interviews and a promotion opportunity I never thought possible.",
      name: "David N.",
      role: "Business Analyst",
      initial: "D",
    },
  ];

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              >
                <Card className="mx-2 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6">
                      {t.quote}
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-orange-500 font-semibold text-lg">
                          {t.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-gray-600 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-100"
          >
            Prev
          </button>
          <button
            onClick={scrollNext}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
