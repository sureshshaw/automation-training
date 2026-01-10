import './globals.css';

export const metadata = {
  metadataBase: new URL("https://automation-testing.com"),
  title: "Automation Testing Training | Selenium, Playwright, Appium",
  description:
    "Professional Automation Testing Training on Selenium, Playwright, Appium, API Automation (Rest Assured & Karate) and Performance Testing using JMeter.",
  keywords: [
    "Automation Testing Training",
    "Selenium Training",
    "Playwright Training",
    "Appium Training",
    "API Automation Training",
    "Rest Assured",
    "Karate API Testing",
    "JMeter Performance Testing"
  ],
  authors: [{ name: "Suresh Shaw" }],
  openGraph: {
    title: "Automation Testing Training",
    description:
      "Industry-ready Automation Testing Training with real-time projects.",
    url: "https://automation-testing.com",
    siteName: "Automation Testing Training",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
