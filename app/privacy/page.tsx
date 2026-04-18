import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Privacy Policy | Dedixor",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Dedixor ("we", "us", "our", or "Company") operates the dedixor.com website (the "Service"). This page
                informs you of our policies regarding the collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground mb-4">We collect several different types of information for various purposes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                <li>Technical Data: IP address, browser type, pages visited, and time spent on pages</li>
                <li>Project Information: Details about projects and services you request from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground mb-4">Dedixor uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us but remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: <a href="mailto:dedixor.info@gmail.com" className="text-primary hover:underline">dedixor.info@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
