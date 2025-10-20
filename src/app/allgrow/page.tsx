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
              work — whether after maternity, caregiving, or a career pause.
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We understand that re-entering the workforce is more than updating
              a CV — it’s about rediscovering confidence, redefining priorities,
              and rebuilding momentum. Through{" "}
              <span className="font-semibold text-orange-600">AllGrow</span>, we
              help you gain clarity on your career direction, identify your
              transferable strengths, and design a return-to-work plan that fits
              your life today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="w-full">
                <Link href="/contact">
                  Join the Community <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Button>

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
              AllGrow is not about going <span className="italic">back</span> —
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
              of their return-to-work journey — from rebuilding confidence to
              rediscovering purpose, upskilling, and thriving in the new world
              of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reignite Program */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Reignite Program</CardTitle>
                <CardDescription className="text-base">
                  For women rediscovering their confidence and redefining their
                  next career chapter.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guided reflection to rebuild confidence and self-belief
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Identify transferable skills and new career priorities
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Communicate your career story with confidence
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Learn to use AI tools for career discovery and job search
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Join a supportive peer community
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Reskill Program */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Reskill Program</CardTitle>
                <CardDescription className="text-base">
                  Equipping women with digital, leadership, and workplace-ready
                  skills for a new era of work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Digital upskilling and remote work readiness
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Career coaching and personal branding workshops
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible learning for working mothers
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hands-on projects and mentorship
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Networking with employers and role models
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Reconnect Program */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Reconnect Program</CardTitle>
                <CardDescription className="text-base">
                  Helping women rebuild and expand their professional networks
                  with purpose and confidence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guided networking sessions and peer circles
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal storytelling and elevator pitch training
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alumni connections and mentorship opportunities
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Access to inclusive employers
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community-led learning and collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Rise Program */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Rise Program</CardTitle>
                <CardDescription className="text-base">
                  Empowering women to grow into leadership roles or launch
                  purpose-driven ventures after returning to work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Leadership and confidence coaching
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Entrepreneurship and innovation labs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Peer-to-peer mentorship and role model sessions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-world projects for social impact
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Showcase and graduation event
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
            {/* Story 1 */}
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
                  “After a 5-year break to raise my children, I struggled with
                  self-doubt. AllGrow helped me rebuild my confidence,
                  rediscover my skills, and tell my story with pride. Today, I’m
                  back at work in a role I love — and I feel stronger than
                  ever.”
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

            {/* Story 2 */}
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
                  “Transitioning back to work after a long career break felt
                  overwhelming. Through AllGrow, I found a community that
                  understood my journey. The mentorship and AI career tools
                  helped me land a flexible remote role that fits my family life
                  perfectly.”
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lucy A.</p>
                    <p className="text-gray-600">
                      Project Coordinator (Remote)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story 3 */}
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
                  “AllGrow gave me more than skills — it gave me belief. After
                  years away from the corporate world, I used the Reignite
                  Program to refresh my digital skills and connect with
                  like-minded women. Now, I’m leading a small team and mentoring
                  others returning to work.”
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Susan K.</p>
                    <p className="text-gray-600">Operations Lead</p>
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
        className="py-16 bg-orange-500 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Your donation helps us provide free career development programs to
            vulnerable groups across Africa.
          </p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Make a Donation
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[`1,000`, `5,000`, `10,000`].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      size="sm"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={
                        donationAmount === amount.toString()
                          ? "bg-orange-500 text-white"
                          : ""
                      }
                    >
                      Ksh {amount}
                    </Button>
                  ))}
                </div>
                <Input
                  type="number"
                  placeholder="Custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full"
                />
                <Button className="w-full" asChild>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Donate Now
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                All donations are used directly for program delivery and
                participant support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
