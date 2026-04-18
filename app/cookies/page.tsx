import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Cookies Policy | Dedixor",
  description: "Our cookies policy explains how we use cookies and similar tracking technologies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Cookies Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small files of letters and numbers that we store on your browser or the hard drive of your
                computer if you agree. Cookies contain information that is transferred to your computer's hard drive. Cookies
                help us remember information about your visit to our website, such as your preferred language and other
                settings. They may be used to help speed up your future activities and use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. How Do We Use Cookies?</h2>
              <p className="text-muted-foreground mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To recognize you when you return to our website</li>
                <li>To track your activity and preferences on our website</li>
                <li>To analyze website usage and performance</li>
                <li>To improve the functionality and user experience of our website</li>
                <li>To remember your login information and settings</li>
                <li>To deliver targeted content and advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for our website to function properly and allow you to use its features.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies collect information about how you use our website, such as which pages you visit most often.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow our website to remember choices you make and provide enhanced functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Targeting Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies may be set by us or third parties to help deliver advertisements relevant to your interests.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may use third-party service providers to help us analyze how our website is used. These service providers
                may use cookies to collect information about your visits to our website and other websites. The information
                collected will not directly identify you, but may be combined with other information to identify you.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Your Cookie Choices</h2>
              <p className="text-muted-foreground mb-4">You have the following choices regarding cookies:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Browser Settings:</strong> You can set your browser to refuse to accept cookies or to alert you
                  when cookies are being sent.
                </li>
                <li>
                  <strong>Cookie Control:</strong> You can control the use of cookies through your browser's privacy settings.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You may be able to opt out of certain types of cookies through third-party websites.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground">
                If you choose to disable cookies, some features of our website may not function properly, and you may not be
                able to use certain services on our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Changes to This Cookies Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated
                policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Cookies Policy or our use of cookies, please contact us at:
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
