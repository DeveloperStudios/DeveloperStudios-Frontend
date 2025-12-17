"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-red-600 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms & Conditions</h1>
        <p className="text-neutral-500 mb-12">Last updated: December 17, 2025</p>

        <div className="space-y-12 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Developer Studios ("we," "us" or "our"), 
              concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") 
              and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Developer Studios and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}