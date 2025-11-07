"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { sendEmail, getEmailSourceFromPath } from "@/lib/email";
import { usePathname } from "next/navigation";

export default function ContactPage() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: formData.subject,
        source: getEmailSourceFromPath(pathname),
      });

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Ready to start your career transformation? We'd love to hear from
              you. Send us a message and we'll get back to you within 24 hours.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Whether you have questions about our programs, want to book a
              consultation, or are interested in partnering with us, we are here
              to help. Reach out to us using the form below or contact us
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our programs? Want to discuss your career
                goals? We're here to help.
              </p>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your career goals and how we can help..."
                      />
                    </div>

                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Prefer to reach out directly? Here are the best ways to get in
                touch with us.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Email Us
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Send us an email and we'll respond within 24-48 hours.
                        </p>
                        <a
                          href="mailto:info@yugrowcareers.co.ke"
                          className="text-orange-500 hover:text-orange-600 font-medium"
                        >
                          info@yugrowcareers.co.ke
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Visit Us
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Our office is located in the heart of Nairobi.
                        </p>
                        <p className="text-gray-700">
                          Westlands Business Centre
                          <br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Book a Consultation
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Fill out our Google Form to book a free 30-minute
                          consultation. Complete payment via M-Pesa and we'll
                          confirm your booking within 24-48 hours.
                        </p>
                        <Button asChild>
                          <a href="/#book-consultation">Book Consultation</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about our programs and how Yugrow supports women and
              professionals in building confident, sustainable careers.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What programs does Yugrow offer?
                </h3>
                <p className="text-gray-600">
                  We offer three main programs:{" "}
                  <span className="font-medium">YuGrow</span> (1-on-1 career
                  coaching), <span className="font-medium">WeGrow</span> (group
                  training programs including WeGrow Pamoja, WeGrow Masterclass,
                  and Bespoke Learning Packages), and{" "}
                  <span className="font-medium">AllGrow</span> (supporting women
                  returning to work through Return to Work Pathway and
                  Entrepreneurship Pathway).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Who can benefit from AllGrow programs?
                </h3>
                <p className="text-gray-600">
                  AllGrow is designed for women returning to work after
                  maternity, caregiving, or a career break. The{" "}
                  <span className="font-medium">Return to Work Pathway</span>{" "}
                  helps rebuild confidence and refresh professional profiles,
                  while the{" "}
                  <span className="font-medium">Entrepreneurship Pathway</span>{" "}
                  supports those looking to turn their skills into viable
                  business ideas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I book a consultation?
                </h3>
                <p className="text-gray-600">
                  To book a consultation, click on any "Speak with a coach" or
                  "Book consultation" button on our website. This will take you
                  to our Google Form where you can provide your details and
                  complete payment via M-Pesa (Paybill: 400200, Account:
                  150559). We'll confirm your booking within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are the WeGrow programs conducted online or in person?
                </h3>
                <p className="text-gray-600">
                  Our WeGrow programs are conducted{" "}
                  <span className="font-medium">virtually via Google Meet</span>{" "}
                  to ensure accessibility and flexibility. WeGrow Pamoja
                  sessions run on alternating Tuesdays and Thursdays (7-8:30
                  PM), while Masterclass sessions are scheduled based on demand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What kind of support will I receive during the programs?
                </h3>
                <p className="text-gray-600">
                  You'll receive personalised guidance, group learning
                  opportunities, practical tools, and ongoing support. Our
                  programs blend career assessment, strategy development,
                  professional networking, mental health & boundaries, workplace
                  mindset, and virtual career branding to help you gain clarity
                  and confidence to thrive in the workplace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you work with clients outside Kenya?
                </h3>
                <p className="text-gray-600">
                  Yes. Yugrow supports early and mid-level professionals across
                  Africa and beyond. Our virtual programs are accessible
                  globally, allowing you to participate from anywhere in the
                  world.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What if I'm unsure which program fits me best?
                </h3>
                <p className="text-gray-600">
                  No worries! You can{" "}
                  <span className="font-medium">
                    book a free 30-minute consultation
                  </span>{" "}
                  through our Google Form to discuss your goals. We'll help you
                  choose the program that best matches your current stage,
                  whether you're returning to work, looking to grow in your
                  current role, or exploring entrepreneurship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How can I support the AllGrow mission?
                </h3>
                <p className="text-gray-600">
                  You can support our mission by making a donation via M-Pesa.
                  Use Paybill Number <span className="font-medium">400200</span>{" "}
                  and Account Number <span className="font-medium">150559</span>{" "}
                  (Business Name: Yugrow Consultancy). Your donation helps us
                  provide free career development programs to women returning to
                  work across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Visit our office in Nairobi for in-person consultations and
              meetings.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">
                Westlands Business Centre, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
