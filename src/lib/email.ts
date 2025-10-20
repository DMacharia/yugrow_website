export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  source?: string;
  appointmentDetails?: {
    date: string;
    time: string;
  };
}

export async function sendEmail(
  data: EmailData
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    const result = await response.json();
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again or contact us directly.",
    };
  }
}

export function getEmailSourceFromPath(pathname: string): string {
  switch (pathname) {
    case "/":
      return "Home Page";
    case "/about":
      return "About Page";
    case "/contact":
      return "Contact Page";
    case "/yugrow":
      return "YuGrow Page";
    case "/wegrow":
      return "WeGrow Page";
    case "/allgrow":
      return "AllGrow Page";
    default:
      return "Website";
  }
}
