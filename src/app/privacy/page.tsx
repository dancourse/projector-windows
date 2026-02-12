export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8 text-amber-100">Privacy Policy</h1>
        <div className="prose prose-invert prose-stone max-w-none">
          <p className="text-stone-400 mb-8">
            <strong>Last updated:</strong> February 12, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Introduction</h2>
            <p className="text-stone-400 mb-4">
              Projector Windows ("we", "our", or "us") operates https://projector-windows.netlify.app (the
              "Site"). This Privacy Policy explains how we collect, use, and protect your information when you
              use our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Information We Collect</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">Usage Analytics</h3>
            <p className="text-stone-400 mb-4">
              We use Heap Analytics to understand how visitors use our Site. This includes:
            </p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>Pages viewed and features used</li>
              <li>Time spent on the Site</li>
              <li>Browser type and device information</li>
              <li>General geographic location (country/city level)</li>
            </ul>
            <p className="text-stone-400 mb-4">
              This data helps us improve the Site and create better features. No personally identifiable
              information is collected through analytics.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">Local Storage</h3>
            <p className="text-stone-400 mb-4">
              We store your favourited videos and custom themes locally in your browser using localStorage. This
              data never leaves your device and is not sent to our servers.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">Server Data</h3>
            <p className="text-stone-400 mb-4">
              Our hosting provider (Netlify) may collect standard server logs including IP addresses, browser
              types, and access times for security and operational purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Third-Party Services</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">YouTube API</h3>
            <p className="text-stone-400 mb-4">
              We use the YouTube Data API to search and display video information. When you search for videos,
              your query is sent to YouTube. YouTube's use of information received is governed by the{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                Google Privacy Policy
              </a>
              .
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">Amazon Associates</h3>
            <p className="text-stone-400 mb-4">
              Projector Windows is a participant in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by advertising
              and linking to Amazon.co.uk.
            </p>
            <p className="text-stone-400 mb-4">
              When you click on affiliate links and make a purchase, Amazon may use cookies to track the
              referral. Amazon's use of cookies is governed by{' '}
              <a
                href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                Amazon's Privacy Notice
              </a>
              .
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 text-amber-200">Ko-fi</h3>
            <p className="text-stone-400 mb-4">
              If you choose to support us via Ko-fi, your payment information is processed by Ko-fi and their
              payment processors (PayPal or Stripe). We do not store your payment information. Ko-fi's privacy
              practices are governed by their{' '}
              <a
                href="https://ko-fi.com/Privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Cookies</h2>
            <p className="text-stone-400 mb-4">
              We use essential cookies and browser localStorage to:
            </p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>Store your favourited videos and custom themes</li>
              <li>Remember your preferences</li>
              <li>Track basic analytics (via Heap Analytics)</li>
            </ul>
            <p className="text-stone-400 mb-4">
              You can disable cookies in your browser settings, but this may affect Site functionality (e.g.,
              favourites won't save).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">
              Data Sharing and Disclosure
            </h2>
            <p className="text-stone-400 mb-4">We do not sell, trade, or rent your personal information.</p>
            <p className="text-stone-400 mb-4">We may share aggregated, non-personal analytics data with:</p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>Potential partners to demonstrate Site usage</li>
              <li>The public (e.g., "We have 10,000 monthly users")</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Your Rights</h2>
            <p className="text-stone-400 mb-4">You have the right to:</p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>Clear your favourites and custom themes (stored locally in your browser)</li>
              <li>Opt out of analytics by using browser privacy settings or ad blockers</li>
              <li>Request information about any data we've collected about you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Data Security</h2>
            <p className="text-stone-400 mb-4">
              We implement reasonable security measures to protect your information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-stone-400 mb-4">Key security practices:</p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>HTTPS encryption for all Site traffic</li>
              <li>No storage of payment information</li>
              <li>Minimal data collection (only what's necessary)</li>
              <li>Regular security updates to Site infrastructure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Children's Privacy</h2>
            <p className="text-stone-400 mb-4">
              Our Site is not directed to children under 13. We do not knowingly collect personal information
              from children under 13. If you believe we have collected information from a child under 13, please
              contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Changes to This Policy</h2>
            <p className="text-stone-400 mb-4">
              We may update this Privacy Policy from time to time. The "Last updated" date at the top will
              reflect changes. Continued use of the Site after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">Contact Us</h2>
            <p className="text-stone-400 mb-4">
              If you have questions about this Privacy Policy or your data, please contact:
            </p>
            <div className="bg-stone-800/50 p-6 rounded-xl border border-amber-900/20">
              <p className="text-stone-400 mb-2">
                <strong className="text-amber-200">Email:</strong>{' '}
                <a href="mailto:dan@smartforge.uk" className="text-amber-400 hover:text-amber-300">
                  dan@smartforge.uk
                </a>
              </p>
              <p className="text-stone-400 mb-2">
                <strong className="text-amber-200">Business:</strong> Smart Forge LTD
              </p>
              <p className="text-stone-400">
                <strong className="text-amber-200">Website:</strong>{' '}
                <a
                  href="https://www.linkedin.com/company/smart-forge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Smart Forge LTD on LinkedIn
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4 text-amber-100">GDPR Compliance (UK/EU)</h2>
            <p className="text-stone-400 mb-4">
              If you are located in the UK or EU, you have additional rights under GDPR:
            </p>
            <ul className="text-stone-400 mb-4 space-y-2 list-disc list-inside">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
            <p className="text-stone-400 mb-4">
              To exercise these rights, please contact us at dan@smartforge.uk.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-amber-900/20">
            <p className="text-stone-500 text-sm text-center">
              This privacy policy was last updated on February 12, 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
