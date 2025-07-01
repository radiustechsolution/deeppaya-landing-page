import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - DeepPaya",
  description:
    "Read DeepPaya's Terms and Conditions for using our mobile application and services.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our
            services
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
                  1.1 Acceptance of Terms
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  Welcome to DeepPaya! These Terms and Conditions
                  (&apos;Terms&apos;) govern your access to and use of the
                  DeepPaya mobile application (&apos;App&apos;), website, and
                  related services (&apos;Services&apos;). By downloading,
                  installing, or using the App, you agree to be bound by these
                  Terms. If you do not agree to these Terms, you must not use
                  the App or Services.
                </p>
                <p className="text-default-700 leading-relaxed">
                  Your use of the App constitutes your acceptance of these
                  Terms, our Privacy Policy, and any additional policies or
                  guidelines referenced herein. These Terms form a legally
                  binding agreement between you and DeepPaya.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1.2 Amendments to Terms
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya reserves the right to modify, update, or amend these
                  Terms at any time. Any changes will be effective immediately
                  upon posting the revised Terms on the App or notifying you via
                  email or in-app notifications. Your continued use of the App
                  after such changes constitutes your acceptance of the revised
                  Terms.
                </p>
                <p className="text-default-700 leading-relaxed">
                  If you do not agree to the amended Terms, you must stop using
                  the App and Services. It is your responsibility to review
                  these Terms periodically for updates.
                </p>
              </div>
            </div>

            {/* Section 2: Description of Services */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                2. Description of Services
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2.0 Airtime, Data, and Utility Payments
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya allows individuals to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-default-700">
                  <li>
                    Register as Paya Mobile Airtime and Data Vendors to sell
                    airtime and mobile data to other users
                  </li>
                  <li>
                    Purchase airtime, mobile data, electricity (DISCO), cable TV
                    subscriptions, WAEC, and NECO cards for personal use
                  </li>
                </ul>
                <p className="text-default-700 leading-relaxed">
                  Users are responsible for verifying the accuracy of
                  transactions before completing payments. DeepPaya is not
                  liable for errors caused by incorrect user input.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2.1 Virtual Visa and MasterCards
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya offers Virtual Visa and MasterCards for online
                  shopping and other digital transactions. These virtual cards
                  are issued in partnership with licensed financial institutions
                  and are subject to the terms and conditions of the card
                  issuer.
                </p>
                <p className="text-default-700 leading-relaxed">
                  Users are responsible for safeguarding their virtual card
                  details and reporting any unauthorized transactions
                  immediately.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2.2 Gift Cards
                </h3>
                <p className="text-default-700 leading-relaxed">
                  DeepPaya enables users to purchase and redeem Gift Cards for
                  various merchants. Gift Cards are subject to the terms and
                  conditions of the issuing merchant. DeepPaya is not
                  responsible for the availability, quality, or delivery of
                  goods or services purchased with Gift Cards.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2.3 Agriculture Investments
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya in future intends to provide opportunities for users
                  to invest in agriculture-related ventures, such as maize
                  processing, cashew nut processing, and frozen chicken
                  production. These investments are subject to specific terms
                  and conditions, including risk disclosures and
                  return-on-investment (ROI) timelines.
                </p>
                <p className="text-default-700 leading-relaxed">
                  Users acknowledge that agriculture investments carry inherent
                  risks, and DeepPaya does not guarantee specific returns.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2.4 P2P Money Transfer
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya allows users to transfer P2P from their respective
                  Paya Wallets in Nigeria. Transfer fees and processing times
                  will be disclosed before completing a transaction.
                </p>
                <p className="text-default-700 leading-relaxed">
                  Users are responsible for ensuring the accuracy of recipient
                  bank details. DeepPaya is not liable for transfers sent to
                  incorrect accounts due to user error.
                </p>
              </div>
            </div>

            {/* Section 3: Eligibility and Account Registration */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                3. Eligibility and Account Registration
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3.1 Eligibility Requirements
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  To use the DeepPaya mobile application and its Services, you
                  must meet the following eligibility criteria:
                </p>
                <ul className="list-disc pl-6 mb-4 text-default-700">
                  <li>
                    <strong>Age Requirement:</strong> You must be at least 18
                    years old or the legal age of majority in your jurisdiction
                  </li>
                  <li>
                    <strong>Residency:</strong> You must be a resident of
                    Nigeria or a country where DeepPaya operates and is legally
                    permitted to provide its Services
                  </li>
                  <li>
                    <strong>Legal Capacity:</strong> You must have the legal
                    capacity to enter into a binding agreement with DeepPaya
                  </li>
                  <li>
                    <strong>Compliance:</strong> You must comply with all
                    applicable laws and regulations in your jurisdiction
                  </li>
                </ul>
                <p className="text-default-700 leading-relaxed">
                  If you do not meet these requirements, you must not use the
                  App or Services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3.2 Account Registration
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  To access the Services, you must register for an account by
                  providing the following information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-default-700">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>
                    Bank Verification Number (BVN) or other government-issued
                    identification
                  </li>
                  <li>
                    Any other information required for identity verification or
                    regulatory compliance
                  </li>
                </ul>
                <p className="text-default-700 leading-relaxed">
                  You agree to provide accurate, complete, and up-to-date
                  information during registration. DeepPaya reserves the right
                  to suspend or terminate accounts with false or incomplete
                  information.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3.3 Account Security
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-default-700">
                  <li>
                    Maintaining the confidentiality of your login credentials
                    (e.g., username, password, PIN)
                  </li>
                  <li>
                    Ensuring that your account is not accessed by unauthorized
                    persons
                  </li>
                  <li>
                    Notifying DeepPaya immediately of any unauthorized access,
                    breach, or suspicious activity
                  </li>
                </ul>
                <p className="text-default-700 leading-relaxed">
                  DeepPaya is not liable for any losses or damages arising from
                  your failure to secure your account.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3.4 Identity Verification
                </h3>
                <p className="text-default-700 leading-relaxed mb-4">
                  DeepPaya may require you to verify your identity to access
                  certain Services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-default-700">
                  <li>
                    Submitting a valid government-issued ID (e.g., National ID,
                    Driver&apos;s License, International Passport)
                  </li>
                  <li>
                    Providing additional documentation (e.g., proof of address,
                    utility bills)
                  </li>
                  <li>
                    Completing biometric verification (e.g., fingerprint, facial
                    recognition)
                  </li>
                </ul>
                <p className="text-default-700 leading-relaxed">
                  Failure to complete identity verification may result in
                  restricted access to certain Services.
                </p>
              </div>
            </div>

            {/* Key Policies Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-default-200 pb-3">
                4. Key Policies
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-default-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Acceptable Use
                  </h3>
                  <p className="text-default-700 text-sm">
                    Users must not engage in fraud, money laundering, hacking,
                    or any illegal activities. Violations may result in account
                    termination and legal action.
                  </p>
                </div>

                <div className="bg-default-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Fees and Charges
                  </h3>
                  <p className="text-default-700 text-sm">
                    Transaction fees will be disclosed before completion. Users
                    are responsible for third-party fees and applicable taxes.
                  </p>
                </div>

                <div className="bg-default-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Privacy Protection
                  </h3>
                  <p className="text-default-700 text-sm">
                    We collect and protect your personal data in accordance with
                    our Privacy Policy and applicable data protection laws.
                  </p>
                </div>

                <div className="bg-default-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Dispute Resolution
                  </h3>
                  <p className="text-default-700 text-sm">
                    Disputes are resolved through negotiation first, then
                    arbitration in Lagos, Nigeria, under Nigerian law.
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
                  Customer Support
                </h3>
                <div className="space-y-2 text-default-700">
                  <p>
                    <strong>Email:</strong> support@deeppaya.com
                  </p>
                  <p>
                    <strong>Phone:</strong> 07599936375
                  </p>
                  <p>
                    <strong>Address:</strong> 1 Trinity School Road, Woji, Port
                    Harcourt, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* User Acknowledgment */}
            <div className="bg-default-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                User Acknowledgment
              </h3>
              <p className="text-default-700 mb-6">
                By using the DeepPaya application, you confirm that you have
                read, understood, and agreed to these Terms and Conditions. You
                consent to our data practices and confirm you meet all
                eligibility requirements.
              </p>
              <div className="text-sm text-default-500">
                These Terms constitute a legally binding agreement between you
                and DeepPaya.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
