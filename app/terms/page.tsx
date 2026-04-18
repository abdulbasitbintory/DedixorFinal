import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Terms of Service | Dedixor",
  description: "Our terms of service outline the rules and regulations for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Dedixor's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
                a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Dedixor's website are provided "as is". Dedixor makes no warranties, expressed or implied,
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Dedixor or its suppliers be liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
                materials on Dedixor's website, even if Dedixor or an authorized representative has been notified orally or
                in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on Dedixor's website could include technical, typographical, or photographic errors.
                Dedixor does not warrant that any of the materials on its website are accurate, complete, or current. Dedixor
                may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Links</h2>
              <p className="text-muted-foreground">
                Dedixor has not reviewed all of the sites linked to its website and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply endorsement by Dedixor of the site. Use of any
                such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground">
                Dedixor may revise these terms of service for its website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the United States,
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
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
