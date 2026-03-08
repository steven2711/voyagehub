import { getNumberOfNights } from "./utils";

export function calculateTotalPrice(
  pricePerNight: number,
  checkin: string,
  checkout: string
): number {
  const nights = getNumberOfNights(checkin, checkout);
  return pricePerNight * nights;
}

export function generateConfirmationCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "VH-";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export interface BookingFormErrors {
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
}

export function validateBookingForm(fields: {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!fields.guestName.trim()) {
    errors.guestName = "Full name is required";
  }

  if (!fields.guestEmail.trim()) {
    errors.guestEmail = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.guestEmail)) {
    errors.guestEmail = "Please enter a valid email address";
  }

  if (!fields.guestPhone.trim()) {
    errors.guestPhone = "Phone number is required";
  } else if (!/^\+?[\d\s\-()]{7,}$/.test(fields.guestPhone)) {
    errors.guestPhone = "Please enter a valid phone number";
  }

  return errors;
}
