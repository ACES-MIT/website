import React from 'react';

const PaymentTerms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Payment Terms
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Payment Methods</h2>
              <p className="text-gray-700 mb-4">
                ACES accepts payments through the following secure methods:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Razorpay Payment Gateway (Credit/Debit Cards, UPI, Net Banking)</li>
                <li>Digital Wallets (PhonePe, Google Pay, Paytm)</li>
                <li>Bank Transfers (where applicable)</li>
                <li>Cash payments (for offline events only)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Event Registration Fees</h2>
              <p className="text-gray-700 mb-4">
                Event registration fees are non-refundable unless the event is cancelled by ACES. 
                All fees must be paid in full at the time of registration to secure your spot.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Early bird registration may offer discounted rates</li>
                <li>Student discounts may be available with valid ID proof</li>
                <li>Group registration discounts may apply for teams</li>
                <li>All prices are inclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                Refunds are processed under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>Event Cancellation by ACES:</strong> Full refund within 7-10 business days</li>
                <li><strong>Participant Cancellation:</strong> No refund, but may transfer registration to another person</li>
                <li><strong>Technical Issues:</strong> Case-by-case evaluation for partial or full refunds</li>
                <li><strong>Force Majeure:</strong> Refund policy subject to circumstances beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Processing</h2>
              <p className="text-gray-700 mb-4">
                All payments are processed securely through Razorpay, which is PCI DSS compliant. 
                We do not store your payment information on our servers.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Payment confirmation will be sent via email</li>
                <li>Transaction IDs will be provided for all successful payments</li>
                <li>Failed payments will be notified immediately</li>
                <li>Payment disputes should be raised within 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Late Payments</h2>
              <p className="text-gray-700 mb-4">
                For events with extended registration periods:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Payments must be completed before the registration deadline</li>
                <li>Late registrations may incur additional charges</li>
                <li>Unpaid registrations will be automatically cancelled</li>
                <li>No spot will be reserved without payment confirmation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Currency and Taxes</h2>
              <p className="text-gray-700 mb-4">
                All payments are processed in Indian Rupees (INR). Applicable taxes and gateway charges 
                are included in the total amount displayed at checkout.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Payment Support</h2>
              <p className="text-gray-700 mb-4">
                For payment-related issues, contact our support team with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Transaction ID</li>
                <li>Payment method used</li>
                <li>Error messages (if any)</li>
                <li>Screenshot of payment confirmation</li>
              </ul>
            </section>

            <section className="mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 6, 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTerms;