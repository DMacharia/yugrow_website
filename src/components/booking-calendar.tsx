"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Package } from "lucide-react";
import { sendEmail } from "@/lib/email";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
}

interface SelectedPackage {
  name: string;
  price?: string;
}

export function BookingCalendar({
  selectedPackage,
}: {
  selectedPackage: SelectedPackage;
}) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<
    "month" | "date" | "time" | "details" | "confirmation"
  >("month");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  // ✅ Generate available months (next 12 months)
  const generateAvailableMonths = () => {
    const months = [];
    const today = new Date();

    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
      months.push({
        value: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}`,
        display: date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        }),
        available: true,
      });
    }
    return months;
  };

  // // Generate available dates for selected month
  // const generateAvailableDates = (monthValue: string) => {
  //   const dates = [];
  //   const [year, month] = monthValue.split("-").map(Number);
  //   const today = new Date();
  //   const currentDate = new Date();

  //   // Get the first and last day of the selected month
  //   const firstDay = new Date(year, month - 1, 1);
  //   const lastDay = new Date(year, month, 0);

  //   // Start from today if it's the current month, otherwise start from the 1st
  //   const startDate =
  //     month === today.getMonth() + 1 && year === today.getFullYear()
  //       ? Math.max(today.getDate() + 1, 1) // Start from tomorrow for current month
  //       : 1;

  //   for (let day = startDate; day <= lastDay.getDate(); day++) {
  //     const date = new Date(year, month - 1, day);

  //     // Skip weekends (optional - you can remove this if you want weekend bookings)
  //     if (date.getDay() !== 0 && date.getDay() !== 6) {
  //       dates.push({
  //         date: date.toISOString().split("T")[0],
  //         display: date.toLocaleDateString("en-US", {
  //           weekday: "short",
  //           day: "numeric",
  //         }),
  //         available: true,
  //       });
  //     }
  //   }
  //   return dates;
  // };

  // Generate available dates
  const generateAvailableDates = (monthValue: string) => {
    const dates = [];
    const [year, month] = monthValue.split("-").map(Number);
    const today = new Date();
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const startDate =
      month === today.getMonth() + 1 && year === today.getFullYear()
        ? Math.max(today.getDate() + 1, 1)
        : 1;
    for (let day = startDate; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month - 1, day);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split("T")[0],
          display: date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
          }),
          available: true,
        });
      }
    }
    return dates;
  };

  // Generate time slots
  // const generateTimeSlots = (): TimeSlot[] => {
  //   const slots: TimeSlot[] = [];
  //   const startHour = 9; // 9 AM
  //   const endHour = 17; // 5 PM

  //   for (let hour = startHour; hour < endHour; hour++) {
  //     slots.push(
  //       { time: `${hour}:00`, available: Math.random() > 0.3 }, // 70% availability
  //       { time: `${hour}:30`, available: Math.random() > 0.3 }
  //     );
  //   }
  //   return slots;
  // };

  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(
        { time: `${hour}:00`, available: Math.random() > 0.3 },
        { time: `${hour}:30`, available: Math.random() > 0.3 }
      );
    }
    return slots;
  };

  const availableMonths = generateAvailableMonths();
  const availableDates = selectedMonth
    ? generateAvailableDates(selectedMonth)
    : [];
  const timeSlots = generateTimeSlots();

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setCurrentStep("date");
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setBookingData((prev) => ({ ...prev, date }));
    setCurrentStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingData((prev) => ({ ...prev, time }));
    setCurrentStep("details");
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendEmail({
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        message: `${bookingData.message || ""}\n\nSelected Package: ${
          selectedPackage?.name
        }${selectedPackage?.price ? ` (${selectedPackage.price})` : ""}`,
        subject: `New Consultation Booking - ${
          selectedPackage?.name || "Package"
        }`,
        source: "Booking Calendar",
        appointmentDetails: {
          date: new Date(selectedDate).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          time: selectedTime,
        },
      });

      if (result.success) {
        setCurrentStep("confirmation");
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

  const resetBooking = () => {
    setSelectedDate("");
    setSelectedTime("");
    setSelectedMonth("");
    setCurrentStep("month");
    setBookingData({
      name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center bg-orange-50 rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Book Your Free 30-Minute Consultation
          </CardTitle>
          <div className="flex flex-col items-center justify-center gap-1 mt-2">
            <div className="flex items-center gap-2 text-orange-600 font-medium">
              <Package className="h-5 w-5" />
              <span>{selectedPackage?.name || "No package selected"}</span>
            </div>
            {selectedPackage?.price && (
              <span className="text-sm text-gray-600">
                {selectedPackage.price}
              </span>
            )}
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            Select a convenient time and provide your details to schedule your
            session
          </p>
        </CardHeader>
        <CardContent className="p-6">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === "month"
                    ? "bg-orange-500 text-white"
                    : ["date", "time", "details", "confirmation"].includes(
                        currentStep
                      )
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <Calendar className="h-4 w-4" />
              </div>
              <div
                className={`w-12 h-1 ${
                  ["date", "time", "details", "confirmation"].includes(
                    currentStep
                  )
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === "date"
                    ? "bg-orange-500 text-white"
                    : ["time", "details", "confirmation"].includes(currentStep)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <Calendar className="h-4 w-4" />
              </div>
              <div
                className={`w-12 h-1 ${
                  ["time", "details", "confirmation"].includes(currentStep)
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === "time"
                    ? "bg-orange-500 text-white"
                    : ["details", "confirmation"].includes(currentStep)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <Clock className="h-4 w-4" />
              </div>
              <div
                className={`w-12 h-1 ${
                  ["details", "confirmation"].includes(currentStep)
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === "details"
                    ? "bg-orange-500 text-white"
                    : currentStep === "confirmation"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Step 1: Month Selection */}
          {currentStep === "month" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Select a Month
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableMonths.map((month) => (
                  <Button
                    key={month.value}
                    variant="outline"
                    className={`h-16 flex items-center justify-center ${
                      selectedMonth === month.value
                        ? "bg-orange-500 text-white border-orange-500"
                        : ""
                    }`}
                    onClick={() => handleMonthSelect(month.value)}
                    disabled={!month.available}
                  >
                    <span className="text-lg font-medium">{month.display}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {currentStep === "date" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("month")}
                  className="flex items-center"
                >
                  ← Back
                </Button>
                <h3 className="text-xl font-semibold text-gray-900">
                  Select a Date
                </h3>
                <div></div>
              </div>
              <p className="text-center text-gray-600 mb-6">
                Available dates for{" "}
                {selectedMonth &&
                  new Date(selectedMonth + "-01").toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {availableDates.map((date) => (
                  <Button
                    key={date.date}
                    variant="outline"
                    className={`h-12 flex flex-col items-center justify-center ${
                      selectedDate === date.date
                        ? "bg-orange-500 text-white border-orange-500"
                        : ""
                    }`}
                    onClick={() => handleDateSelect(date.date)}
                    disabled={!date.available}
                  >
                    <span className="text-sm font-medium">{date.display}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Time Selection */}
          {currentStep === "time" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("date")}
                  className="flex items-center"
                >
                  ← Back
                </Button>
                <h3 className="text-xl font-semibold text-gray-900">
                  Select a Time
                </h3>
                <div></div>
              </div>
              <p className="text-center text-gray-600 mb-6">
                Available times for{" "}
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`h-12 ${
                      selectedTime === slot.time
                        ? "bg-orange-500 text-white border-orange-500"
                        : ""
                    }`}
                    onClick={() => handleTimeSelect(slot.time)}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === "details" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("time")}
                  className="flex items-center"
                >
                  ← Back
                </Button>
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Details
                </h3>
                <div></div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={bookingData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={bookingData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={bookingData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your career goals or any specific areas you'd like to discuss..."
                    value={bookingData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={4}
                  />
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Appointment Summary
                  </h4>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong>{" "}
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Time:</strong> {selectedTime}
                  </p>
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
                  onClick={handleBookingSubmit}
                  className="w-full"
                  size="lg"
                  disabled={
                    !bookingData.name || !bookingData.email || isSubmitting
                  }
                >
                  {isSubmitting ? "Booking..." : "Confirm Booking"}
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === "confirmation" && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for booking your consultation. We'll send you a
                confirmation email shortly.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Appointment Details
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Package:</strong> {selectedPackage?.name}
                  {selectedPackage?.price && ` (${selectedPackage.price})`}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Name:</strong> {bookingData.name}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Email:</strong> {bookingData.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong>{" "}
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Time:</strong> {selectedTime}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setCurrentStep("month")}
                  variant="outline"
                >
                  Book Another Session
                </Button>
                <Button asChild>
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
