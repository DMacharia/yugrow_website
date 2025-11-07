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
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Heart,
  Users,
  Target,
  CheckCircle,
  Star,
  Mail,
  DollarSign,
  Sparkles,
  Compass,
  Network,
  Globe,
  Leaf,
  GraduationCap,
  Briefcase,
  CreditCard,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AllGrowPage() {
  const [email, setEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white min-h-[85vh] lg:min-h-[75vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-500">AllGrow:</span> Supporting Women
              Returning to Work
            </h1>

            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto lg:mx-0">
              A safe and empowering space for women navigating their return to
              work - whether after maternity, caregiving, or a career pause.
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We understand that re-entering the workforce is more than updating
              a CV - it’s about rediscovering confidence, redefining priorities,
              and rebuilding momentum. Through{" "}
              <span className="font-semibold text-orange-600">AllGrow</span>, we
              help you gain clarity on your career direction, identify your
              transferable strengths, and design a return-to-work plan that fits
              your life today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all"
                asChild
              >
                <Link href="#support-mission">Support the Mission</Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/allgrow-empowerment.jpg"
              alt="Empowerment and growth illustration"
              className="w-full max-w-lg rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle gradient overlays for warmth and depth */}
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Moving Forward with Confidence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AllGrow is not about going <span className="italic">back</span> -
              it’s about moving forward, stronger and more self-assured. Our
              guided sessions combine reflection, practical tools, and
              supportive peer connections to help women design a return-to-work
              journey that fits their ambitions and personal realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rebuild Confidence
              </h3>
              <p className="text-gray-600">
                Guided reflection and practical exercises to help you rediscover
                your strengths and self-belief after time away from work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Redefine Your Career Path
              </h3>
              <p className="text-gray-600">
                Clarify your skills, values, and priorities to explore flexible,
                fulfilling, and realistic career pathways that work for you
                today.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reconnect & Grow
              </h3>
              <p className="text-gray-600">
                Learn how to tell your career story confidently, use AI tools to
                explore opportunities, and grow your professional network
                strategically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AllGrow programs are designed to guide women through every stage
              of their return-to-work journey - from rebuilding confidence to
              rediscovering purpose, upskilling, and thriving in the new world
              of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Return to Work Pathway */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">
                    Return to Work Pathway
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Rebuild career confidence and redefine your professional
                  identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Refresh your CV and LinkedIn through a guided career audit
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Learn how to position your career break as a strength
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Explore flexible job options and prepare for interviews
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Entrepreneurship Pathway */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl">
                    Entrepreneurship Pathway
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Turn your skills and passions into viable business ideas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Build clarity around your business goals and structure
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Learn personal branding and marketing fundamentals
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Access tools and networks to help your business thrive
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories of women who rediscovered their confidence, rebuilt
              their careers, and redefined success through the AllGrow journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 - Return to Work */}
            <Card>
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
                  "After a 6-year break to care for my family, I felt lost about
                  returning to work. The Return to Work Pathway helped me
                  rebuild my confidence and refresh my CV. I learned to position
                  my career break as a strength, and within 3 months, I landed a
                  flexible role that fits my life perfectly."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mary W.</p>
                    <p className="text-gray-600">Marketing Coordinator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story 2 - Return to Work */}
            <Card>
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
                  "The guided career audit in the Return to Work Pathway was a
                  game-changer. I updated my LinkedIn profile and learned how to
                  talk about my career break confidently. The interview
                  preparation gave me the tools I needed, and I'm now back in
                  the workforce doing what I love."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lucy A.</p>
                    <p className="text-gray-600">Project Coordinator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story 3 - Entrepreneurship */}
            <Card>
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
                  "The Entrepreneurship Pathway helped me turn my passion for
                  baking into a real business. I gained clarity on my business
                  goals, learned marketing fundamentals, and connected with a
                  network of women entrepreneurs. My home bakery is now
                  thriving, and I have the confidence to scale it further."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah K.</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="support-mission"
        className="py-16 bg-gradient-to-br from-orange-50 to-white scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Many women returning to work face confidence loss, skill gaps, and
            hiring bias after career breaks. Your donation helps them rebuild
            their confidence, update their skills, and re-enter the workforce
            stronger than before.
          </p>

          {/* Payment Details - Prominent Display */}
          <div className="mb-8">
            <Card className="max-w-2xl mx-auto border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  M-Pesa Paybill Details
                </h3>

                <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5 text-gray-600" />
                      <span className="text-lg font-medium text-gray-700">
                        Business Name:
                      </span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                      Yugrow Consultancy
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">
                      Business Number:
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      400200
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-lg font-medium text-gray-700">
                      Account Number:
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      150559
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-gray-700 text-left">
                    <strong>How to donate:</strong> Go to M-Pesa, select "Pay
                    Bill", enter Business Number{" "}
                    <strong className="text-blue-600">400200</strong>, Account
                    Number <strong className="text-blue-600">150559</strong>,
                    enter your donation amount, and complete the transaction.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
