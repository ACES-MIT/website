import React from 'react';

const RazorpayRequirements = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Razorpay Payment Requirements
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Supported Payment Methods</h2>
              <p className="text-gray-700 mb-4">
                Razorpay supports a wide range of payment methods for your convenience:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Cards</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Visa, Mastercard, RuPay</li>
                    <li>Domestic and International cards</li>
                    <li>Debit and Credit cards</li>
                    <li>Corporate cards</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Digital Payments</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                    <li>Net Banking (All major banks)</li>
                    <li>Digital Wallets</li>
                    <li>IMPS/NEFT transfers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. System Requirements</h2>
              <p className="text-gray-700 mb-4">
                To ensure smooth payment processing, please ensure your system meets these requirements:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Browser Requirements</h3>
                <ul className="list-disc list-inside text-blue-700 ml-4">
                  <li>Latest versions of Chrome, Firefox, Safari, or Edge</li>
                  <li>JavaScript enabled</li>
                  <li>Cookies enabled</li>
                  <li>Secure connection (HTTPS)</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="text-lg font-medium text-green-800 mb-2">Mobile Requirements</h3>
                <ul className="list-disc list-inside text-green-700 ml-4">
                  <li>iOS 12+ or Android 7+</li>
                  <li>Stable internet connection</li>
                  <li>Updated banking apps for UPI payments</li>
                  <li>SMS access for OTP verification</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Security Features</h2>
              <p className="text-gray-700 mb-4">
                Razorpay implements industry-leading security measures:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>PCI DSS Level 1 Compliance:</strong> Highest level of payment security</li>
                <li><strong>256-bit SSL Encryption:</strong> End-to-end data protection</li>
                <li><strong>Two-Factor Authentication:</strong> OTP verification for all transactions</li>
                <li><strong>Fraud Detection:</strong> AI-powered risk assessment</li>
                <li><strong>Tokenization:</strong> Card details are never stored</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Transaction Limits</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Minimum Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Maximum Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">UPI</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1,00,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Net Banking</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹10,00,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cards</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹2,00,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Wallets</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment Process</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Select Payment Method</h3>
                    <p className="text-gray-600">Choose from cards, UPI, net banking, or wallets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Enter Payment Details</h3>
                    <p className="text-gray-600">Provide necessary information securely</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Verify Transaction</h3>
                    <p className="text-gray-600">Complete OTP or biometric verification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Payment Confirmation</h3>
                    <p className="text-gray-600">Receive instant confirmation and receipt</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Troubleshooting</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">Common Issues and Solutions</h3>
                <ul className="list-disc list-inside text-yellow-700 ml-4 space-y-1">
                  <li><strong>Payment Failed:</strong> Check internet connection and retry</li>
                  <li><strong>OTP Not Received:</strong> Ensure mobile number is correct</li>
                  <li><strong>Card Declined:</strong> Verify card details and available balance</li>
                  <li><strong>UPI App Issues:</strong> Update your UPI app to latest version</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Support</h2>
              <p className="text-gray-700 mb-4">
                For payment-related issues with Razorpay:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>Razorpay Support:</strong> support@razorpay.com</li>
                <li><strong>Phone:</strong> 022-62309191</li>
                <li><strong>Help Center:</strong> razorpay.com/support</li>
                <li><strong>ACES Support:</strong> Contact us for registration issues</li>
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

export default RazorpayRequirements;