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
  Star,
  Users,
  Target,
  Heart,
  Award,
  MessageCircle,
  CheckCircle,
  GraduationCap,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-orange-500">Yugrow Careers Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0">
              We're passionate about empowering professionals across Africa to
              grow with confidence and clarity in their careers.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
              Founded with a vision to bridge the gap between career aspirations
              and professional success, Yugrow Careers Consulting has been at
              the forefront of career development in Africa. We aim to provide
              holistic career development services that help professionals find
              clarity, confidence, and direction and succeed in the workplace
            </p>
          </div>
          {/* Right: Text */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/homepage.jpg"
              alt="Yugrow Careers Consulting"
              className="w-full max-w-md rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Founder Profile Section - Hero Style */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/virginiah2.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white/70 to-white/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving force behind Yugrow Careers Consulting
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/images/virginiah2.jpg"
                alt="Virginiah Gitome - Founder"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Founder Content */}
            <div className="order-1 lg:order-2 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Virginiah Gitome
                </h3>
                <p className="text-xl text-orange-500 font-semibold mb-6">
                  Certified Career Professional & Founder, Yugrow Consulting
                </p>
              </div>

              <div className="space-y-6 mb-8 text-lg text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">
                    Virginiah Gitome
                  </span>{" "}
                  is a{" "}
                  <span className="italic">
                    Certified Career Professional and Founder
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-black">
                    Yugrow Consulting
                  </span>
                  , specializing in workplace growth. With 10+ years of
                  experience, she helps early and mid-career professionals
                  clarify their goals, build confidence, and develop the skills
                  needed to thrive at work.
                </p>

                <p>
                  Through career development programs, workplace training, and
                  practical tools, Virginiah equips professionals to excel in
                  their roles. Her holistic approach goes beyond helping
                  individuals find the right opportunities, it positions them to
                  grow meaningfully within them, creating lasting impact and
                  sustainable career success.
                </p>
              </div>

              {/* Credentials & Expertise */}
              <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-orange-500 mr-2" />
                  Credentials & Expertise
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Certified career development professional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      MSc. Business Psychology
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Actual work experience
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yugrow Careers Consulting was born from a simple belief: every
              professional deserves the opportunity to thrive in the workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Problem
              </h3>
              <p className="text-gray-600">
                We noticed that early and mid-level professionals were
                struggling to succeed in the workplace because of a lack of
                clarity and confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Solution
              </h3>
              <p className="text-gray-600">
                We created comprehensive and holistic programs that blend
                personalised guidance, group learning, practical tools, and
                ongoing support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Impact
              </h3>
              <p className="text-gray-600">
                Today, we've supported hundreds of professionals across Africa
                to gain the clarity and confidence they need to thrive in the
                workplace, unlock new opportunities, and build meaningful,
                fulfilling careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Empathy
              </h3>
              <p className="text-gray-600">
                We understand that career challenges are deeply personal and
                approach each client with compassion and understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in our work and continuously
                refine our programs based on client feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                We believe career development should be accessible to everyone,
                regardless of background or circumstances.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Growth
              </h3>
              <p className="text-gray-600">
                We're committed to continuous learning and growth, both for
                ourselves and our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from some of the professionals who have transformed their
              careers with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Virginiah's coaching helped me transition from a technical
                  role to a leadership position. Her guidance was invaluable in
                  building my confidence and developing the skills I needed."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold text-sm">
                      J
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      James M.
                    </p>
                    <p className="text-gray-600 text-sm">Engineering Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The WeGrow program was exactly what I needed. The group
                  setting helped me learn from others' experiences while
                  building my own skills and network."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold text-sm">
                      S
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Sarah K.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Marketing Specialist
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "After being laid off, I felt lost and uncertain about my
                  future. Yugrow helped me rediscover my strengths and land a
                  better job than I had before."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold text-sm">
                      D
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      David L.
                    </p>
                    <p className="text-gray-600 text-sm">Sales Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section
        id="speaking"
        className="py-16 bg-gradient-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Speaking Engagements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Virginiah is available for speaking engagements on career
              development and professional growth topics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Popular Topics
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Building Career Confidence
                    </h4>
                    <p className="text-gray-600">
                      How to overcome imposter syndrome and build authentic
                      confidence in your professional life.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Navigating Career Transitions
                    </h4>
                    <p className="text-gray-600">
                      Strategies for successfully transitioning between roles,
                      industries, or career paths.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      From Vision to Results
                    </h4>
                    <p className="text-gray-600">
                      Turning career dreams into achievable goals with clear
                      direction and measurable action.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      From Classroom to Workplace
                    </h4>
                    <p className="text-gray-600">
                      What school didn't teach but work will demand.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Invite Us to Speak
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Interested in having Virginiah speak at your event or
                  organisation? We'd love to hear from you.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of professionals who have already transformed their
            careers with Yugrow.
          </p>
          <CTAButton
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
            ctaType="consultation"
          >
            Speak with a Coach
            <ArrowRight className="ml-2 h-5 w-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
