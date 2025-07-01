import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DeepPaya",
  description:
    "Learn how DeepPaya protects your privacy and handles your personal information in compliance with data protection regulations.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and
            protect your personal information.
          </p>
          <div className="mt-6 text-sm text-default-500">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                1. Introduction
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1.1 Purpose of the Privacy Policy
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  This Privacy Policy explains how DeepPaya collects, uses,
                  shares, and protects your personal information when you use
                  our mobile application (&apos;App&apos;) and related services
                  (&apos;Services&apos;). It also outlines your rights regarding
                  your data and how you can exercise them.
                </p>
                <p className="text-default-700 leading-relaxed">
                  DeepPaya is committed to protecting your privacy and ensuring
                  the security of your personal information in compliance with
                  applicable laws, including the Nigeria Data Protection
                  Regulation (NDPR).
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1.2 Acceptance of the Privacy Policy
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  By downloading, installing, or using the DeepPaya App, you
                  agree to the terms of this Privacy Policy. If you do not agree
                  with this Policy, you must not use the App or Services.
                </p>
                <p className="text-default-700 leading-relaxed">
                  This Privacy Policy applies to all users of the App, including
                  individuals, SMEs, vendors, and customers.
                </p>
              </div>
            </div>

            {/* Section 2: Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                2. Information We Collect
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 text-sm font-bold">
                      1
                    </span>
                    Personal Information
                  </h3>
                  <ul className="text-sm text-default-700 space-y-1">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Bank Verification Number (BVN)</li>
                    <li>• Government-issued identification</li>
                    <li>• Date of birth</li>
                    <li>• Residential address</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold">
                      2
                    </span>
                    Transaction Data
                  </h3>
                  <ul className="text-sm text-default-700 space-y-1">
                    <li>• Payment details</li>
                    <li>• Transaction history</li>
                    <li>• Investment details</li>
                    <li>• Bank account information</li>
                    <li>• Card details</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600 text-sm font-bold">
                      3
                    </span>
                    Device & Usage Information
                  </h3>
                  <ul className="text-sm text-default-700 space-y-1">
                    <li>• IP address</li>
                    <li>• Device type and OS</li>
                    <li>• Browser information</li>
                    <li>• App usage patterns</li>
                    <li>• Location data (if enabled)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 text-sm font-bold">
                      4
                    </span>
                    Third-Party Information
                  </h3>
                  <ul className="text-sm text-default-700 space-y-1">
                    <li>• Banks and financial institutions</li>
                    <li>• Identity verification services</li>
                    <li>• Credit bureaus</li>
                    <li>• Business partners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                3. How We Use Your Information
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    3.1 Providing and Improving Services
                  </h3>
                  <p className="text-default-700 leading-relaxed mb-3">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-default-700 space-y-1">
                    <li>Create and manage your account</li>
                    <li>
                      Process transactions (payments, money transfers,
                      investments)
                    </li>
                    <li>Provide customer support and resolve issues</li>
                    <li>
                      Improve the functionality and user experience of the App
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    3.2 Identity Verification and Fraud Prevention
                  </h3>
                  <p className="text-default-700 leading-relaxed mb-3">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-default-700 space-y-1">
                    <li>
                      Verify your identity and prevent unauthorized access
                    </li>
                    <li>
                      Detect and prevent fraud, money laundering, and other
                      illegal activities
                    </li>
                    <li>Comply with regulatory requirements (KYC, AML)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    3.3 Communication and Marketing
                  </h3>
                  <p className="text-default-700 leading-relaxed mb-3">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-default-700 space-y-1">
                    <li>Send transaction alerts and account notifications</li>
                    <li>
                      Provide updates about new features, products, or services
                    </li>
                    <li>
                      Deliver marketing communications (with your consent)
                    </li>
                  </ul>
                  <p className="text-sm text-default-600 mt-3 italic">
                    You can opt out of marketing communications at any time
                    through your App preferences.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    3.4 Compliance with Legal Obligations
                  </h3>
                  <p className="text-default-700 leading-relaxed mb-3">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-default-700 space-y-1">
                    <li>
                      Comply with applicable laws, regulations, and court orders
                    </li>
                    <li>Respond to requests from regulatory authorities</li>
                    <li>
                      Protect the rights, property, or safety of DeepPaya, its
                      users, or the public
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: How We Share Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                4. How We Share Your Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-default-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Third-Party Service Providers
                  </h3>
                  <p className="text-default-700 text-sm mb-3">
                    We share information with:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Payment processors and financial institutions</li>
                    <li>• Identity verification services</li>
                    <li>• Cloud storage providers</li>
                    <li>• Customer support platforms</li>
                  </ul>
                </div>

                <div className="border border-default-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Regulatory Authorities
                  </h3>
                  <p className="text-default-700 text-sm mb-3">
                    We may disclose information to:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Law enforcement agencies</li>
                    <li>• Government bodies</li>
                    <li>• Court orders and legal processes</li>
                    <li>• Anti-money laundering compliance</li>
                  </ul>
                </div>

                <div className="border border-default-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Affiliates and Partners
                  </h3>
                  <p className="text-default-700 text-sm mb-3">
                    We share with partners to:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Provide integrated services</li>
                    <li>• Offer promotions and discounts</li>
                    <li>• Conduct research and analysis</li>
                    <li>• Agriculture investment opportunities</li>
                  </ul>
                </div>

                <div className="border border-default-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Business Transfers
                  </h3>
                  <p className="text-default-700 text-sm mb-3">
                    During mergers or acquisitions:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Information may be transferred</li>
                    <li>• Users will be notified</li>
                    <li>• Choices regarding data will be provided</li>
                    <li>• Same protection standards maintained</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                5. Data Security
              </h2>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      5.1 Security Measures
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-4">
                      DeepPaya implements industry-standard security measures
                      including:
                    </p>
                    <ul className="list-disc pl-6 text-default-700 space-y-2">
                      <li>Encryption of data in transit and at rest</li>
                      <li>
                        Regular security audits and vulnerability assessments
                      </li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>
                        Employee training on data protection best practices
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      5.2 Data Retention
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-4">
                      We retain your information only for as long as necessary
                      to:
                    </p>
                    <ul className="list-disc pl-6 text-default-700 space-y-2">
                      <li>
                        Fulfill the purposes outlined in this Privacy Policy
                      </li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Resolve disputes or enforce our agreements</li>
                    </ul>
                    <p className="text-sm text-default-600 mt-3 italic">
                      Once no longer needed, information is securely deleted or
                      anonymized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                6. Your Rights and Choices
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Access and Correction
                  </h3>
                  <p className="text-default-700 text-sm mb-2">
                    You have the right to:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Access your personal information</li>
                    <li>• Request corrections to inaccurate data</li>
                    <li>• Update incomplete information</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Data Portability
                  </h3>
                  <p className="text-default-700 text-sm mb-2">You can:</p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Request a copy of your data</li>
                    <li>• Receive data in machine-readable format</li>
                    <li>• Transfer data to another service provider</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Opt-Out Options
                  </h3>
                  <p className="text-default-700 text-sm mb-2">
                    You can opt out by:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Updating App preferences</li>
                    <li>• Clicking unsubscribe in emails</li>
                    <li>• Contacting support directly</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Data Deletion
                  </h3>
                  <p className="text-default-700 text-sm mb-2">
                    You can request:
                  </p>
                  <ul className="text-xs text-default-600 space-y-1">
                    <li>• Deletion of personal information</li>
                    <li>• Subject to legal requirements</li>
                    <li>• May affect certain services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Cookies Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                  7. Cookies and Tracking Technologies
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <p className="text-default-700 leading-relaxed mb-4">
                    DeepPaya uses cookies and similar tracking technologies to
                    enhance your experience. These include essential cookies for
                    functionality, performance cookies for analytics, functional
                    cookies for preferences, and advertising cookies for
                    personalized content.
                  </p>
                  <p className="text-sm text-default-600">
                    You can manage cookies through your browser settings, though
                    disabling certain cookies may affect App functionality.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                  8. International Data Transfers
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-default-700 leading-relaxed mb-4">
                    Your information may be transferred to countries outside
                    Nigeria where DeepPaya or its service providers operate. We
                    ensure all international transfers comply with applicable
                    laws and are protected by appropriate safeguards, including
                    standard contractual clauses and encryption.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                  9. Children&apos;s Privacy
                </h2>
                <div className="bg-red-50 rounded-lg p-6">
                  <p className="text-default-700 leading-relaxed mb-4">
                    DeepPaya does not knowingly collect personal information
                    from individuals under 18 years of age. If we become aware
                    of such collection, we will promptly delete the information.
                  </p>
                  <p className="text-sm text-default-600">
                    Parents who believe their child has provided information
                    should contact us at: parentalconsent@deeppaya.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                Contact Information
              </h2>

              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Privacy Questions & Requests
                </h3>
                <div className="space-y-2 text-default-700">
                  <p>
                    <strong>Email:</strong> support@deeppaya.com
                  </p>
                  <p>
                    <strong>Phone:</strong> 08145530218
                  </p>
                  <p>
                    <strong>Address:</strong> Sparkle Plaza, Suite CS6, Road
                    511, Off 1st Avenue, Gwarimpa, FCT, Nigeria
                  </p>
                </div>
                <p className="text-sm text-default-600 mt-4">
                  For parental consent issues: parentalconsent@deeppaya.com
                </p>
              </div>
            </div>

            {/* User Acknowledgment */}
            <div className="bg-default-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                User Acknowledgment
              </h3>
              <p className="text-default-700 mb-6">
                By using the DeepPaya application, you confirm that you have
                read, understood, and agreed to this Privacy Policy. You consent
                to our data collection, use, and sharing practices as outlined
                above and confirm you are at least 18 years old.
              </p>
              <div className="text-sm text-default-500">
                We are committed to protecting your privacy and providing
                secure, reliable financial solutions.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
