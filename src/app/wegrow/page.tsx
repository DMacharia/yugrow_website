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
  Mail,
  Sparkles,
  FileText,
  Heart,
  Brain,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { BookingDialog } from "@/components/booking-dialog";

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
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the program that best fits your career development needs.
              Each program is designed to support your growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* WeGrow Pamoja */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">WeGrow Pamoja</CardTitle>
                    <CardDescription className="text-base">
                      5-week interactive group program for career and leadership
                      growth
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert-led workshops, discussions & open Q&A
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Small cohorts (3-10 participants) for personalised attention
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    1.5-hour session per week via Google Meet
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pre-assessment before kickoff & feedback within 48 hours
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New cohorts start every month - Alternating between Tuesday
                    and Thursday 7-8:30 PM
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-2xl font-bold text-orange-500 mb-4">
                    Ksh 10,000
                  </div>
                  <Button
                    asChild
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                  >
                    <Link href="/contact">
                      Reach Out
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WeGrow Masterclass */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200 relative flex flex-col h-full">
              {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  On-Demand
                </span>
              </div> */}

              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      WeGrow Masterclass
                    </CardTitle>
                    <CardDescription className="text-base">
                      Focused, high-impact sessions for real workplace
                      challenges and career transitions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    1.5 hrs session conducted via Google Meet
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    On-demand topics include:
                  </div>
                  <div className="pl-6 space-y-2 text-sm text-gray-600">
                    <div>• Mastering the Art of Self-Advocacy</div>
                    <div>• Leadership Presence for Emerging Leaders</div>
                    <div>• The Confident Communicator</div>
                    <div>• Building a Personal Brand that Opens Doors</div>
                    <div>• Handling Career Transitions with Clarity</div>
                    <div>• Women & Leadership Masterclass</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                  >
                    <Link href="/contact">
                      Reach Out
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bespoke Learning Package */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      Bespoke Learning Package
                    </CardTitle>
                    <CardDescription className="text-base">
                      Tailored program designed around your chosen topic,
                      duration, and structure
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom program aligned with your goals and objectives
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Choose your topic, duration, and structure
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Designed to deliver maximum impact
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible learning format to suit your needs
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all"
                  >
                    <Link href="/contact">
                      Reach Out
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
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
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Career Assessment
              </h3>
              <p className="text-gray-600">
                Personality assessment, strength assessment, skill inventory and
                value clarification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Career Strategy
              </h3>
              <p className="text-gray-600">
                Develop a personal Career Development Plan that aligns with your
                goals, strengths, and growth aspirations.
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
                Grow your professional community through intentional
                relationship-building.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mental Health & Boundaries
              </h3>
              <p className="text-gray-600">
                Learn strategies to protect your well-being, manage stress, and
                set healthy boundaries at work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Workplace Mindset
              </h3>
              <p className="text-gray-600">
                Build confidence, emotional intelligence, and adaptability to
                navigate challenges and lead effectively in dynamic
                environments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Virtual Career Brand
              </h3>
              <p className="text-gray-600">
                Polish your professional presence across CV, LinkedIn, and other
                digital platforms to showcase your unique value and attract
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cohort Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a community of professionals committed to growth and
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* What Makes Our Cohorts Special */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Makes Our Cohorts Special
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Small, Intimate Groups
                    </h4>
                    <p className="text-gray-600">
                      Cohorts of 3-10 participants ensure personalized attention
                      and meaningful connections with peers and facilitators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Supportive Community
                    </h4>
                    <p className="text-gray-600">
                      A safe space where participants share experiences,
                      challenges, and celebrate wins together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Action-Oriented Learning
                    </h4>
                    <p className="text-gray-600">
                      Each session includes practical exercises and real-world
                      applications you can implement immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Diverse Perspectives
                    </h4>
                    <p className="text-gray-600">
                      Learn from professionals across different industries,
                      roles, and career stages for richer insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Ongoing Accountability
                    </h4>
                    <p className="text-gray-600">
                      Regular check-ins and peer support help you stay committed
                      to your growth goals throughout the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Cohorts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Cohorts
              </h3>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          WeGrow Pamoja - January 2025
                        </h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            Tuesdays, 7:00 PM - 8:30 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Starting January 7, 2025
                        </p>
                      </div>
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Open
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span>3-10 participants per cohort</span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-all"
                    >
                      <Link href="/contact">
                        Join This Cohort
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          WeGrow Pamoja - February 2025
                        </h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            Thursdays, 7:00 PM - 8:30 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Starting February 6, 2025
                        </p>
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Coming Soon
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span>3-10 participants per cohort</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-2 rounded-full transition-all"
                    >
                      <Link href="/contact">
                        Get Notified
                        <Mail className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        New Cohorts Monthly
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        WeGrow Pamoja cohorts alternate between Tuesdays and
                        Thursdays each month. Can't make these dates? Contact us
                        to be notified about future cohorts.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        <Link href="/contact">
                          Contact Us
                          <Mail className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose WeGrow?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a diverse group of professionals who are committed to growing
              their careers together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Diverse Professional Backgrounds
              </h3>
              <p className="text-gray-600">
                Learn from peers across different industries and experience
                levels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Collaborative Learning
              </h3>
              <p className="text-gray-600">
                Work together on projects and learn from each other's
                experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Access to alumni network and continued learning opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-world Application
              </h3>
              <p className="text-gray-600">
                Apply what you learn immediately in your current role or job
                search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Alumni Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="hover:shadow-lg transition-shadow">
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
                  "WeGrow Pamoja helped me rediscover my strengths through the
                  career assessment. The 5-week program gave me clarity on my
                  career direction and the confidence to set healthy boundaries
                  at work. The small cohort made it feel like a supportive
                  community."
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

            {/* Testimonial 2 */}
            <Card className="hover:shadow-lg transition-shadow">
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
                  "The WeGrow Masterclass on 'Building a Personal Brand that
                  Opens Doors' transformed my LinkedIn profile. I learned to
                  showcase my unique value and within weeks, I started receiving
                  opportunities I never thought possible. The focused session
                  was exactly what I needed."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">D</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">David M.</p>
                    <p className="text-gray-600">Marketing Specialist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="hover:shadow-lg transition-shadow">
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
                  "Our organisation worked with WeGrow on a Bespoke Learning
                  Package focused on workplace mindset and mental health. The
                  tailored program helped our team build emotional intelligence
                  and set healthy boundaries. The impact on our workplace
                  culture has been remarkable."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah A.</p>
                    <p className="text-gray-600">HR Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
