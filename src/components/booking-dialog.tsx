"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingCalendar } from "@/components/booking-calendar";

interface SelectedPackage {
  name: string;
  price?: string;
}

interface BookingDialogProps {
  selectedPackage: SelectedPackage;
}

export function BookingDialog({ selectedPackage }: BookingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Check if hash matches booking anchors
  const isBookingHash = () => {
    const hash = window.location.hash;
    return (
      hash === "#book-consultation" ||
      hash === "#book-slot" ||
      hash === "#book-class"
    );
  };

  // Listen for hash changes to open dialog when booking hash is in URL
  useEffect(() => {
    const checkHash = () => {
      if (isBookingHash()) {
        setIsOpen(true);
      }
    };

    // Check on mount (with a small delay to ensure hash is set)
    const timeout = setTimeout(checkHash, 0);

    // Listen for hash changes
    const handleHashChange = () => {
      checkHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    // Remove hash when closing
    if (!open && isBookingHash()) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Book Your Free 30-Minute Consultation
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <BookingCalendar selectedPackage={selectedPackage} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
