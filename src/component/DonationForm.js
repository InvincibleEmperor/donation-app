import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Info } from "lucide-react";

const DonationForm = () => {
  const [donorType, setDonorType] = useState("indian");
  const [donationType, setDonationType] = useState("once");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [isOpenForm, setIsOpenForm] = useState(false);

  const indianAmounts = [50000, 25000, 10000, 5000, 2500, 1000];
  const foreignAmounts = [5000, 2500, 1000, 500, 250, 100];

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(parseInt(e.target.value) || 0);
  };

  const calculateMeals = () => {
    const amount = selectedAmount || parseInt(customAmount) || 0;
    return Math.floor(amount / 25);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const getCurrencySymbol = () => {
    const currency = currencies.find((c) => c.code === selectedCurrency);
    return currency ? currency.symbol : "₹";
  };

  return (
    <div className=" sticky top-14 z-10">
      {isOpenForm ? (
        <div className="w-[28rem] p-6 bg-white rounded-lg shadow-md">
          <button
            onClick={() => setIsOpenForm(false)}
            className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-5 text-green-700 text-xs"
          >
            <ArrowLeft />
          </button>

          <form className="max-w-sm mx-auto">
            <div className="flex gap-3">
              <div className="w-full mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300  shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  
                  required
                />
              </div>
              <div className="w-full mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300  shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  
                  required
                />
              </div>
            </div>
            <div className="w-full mb-5">
              <label
                for="contact-n"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact No.:
              </label>
              <input
                type="text"
                id="contact-n"
                className="bg-gray-50 border border-gray-300  shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                
                required
              />
            </div>
            <div className="flex gap-3">
              <div className="w-full mb-5">
                <label
                  for="pan-card"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Pan Card:
                </label>
                <input
                  type="text"
                  id="pan-card"
                  className="bg-gray-50 border border-gray-300  shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  
                  required
                />
              </div>
              <div className="w-full mb-5">
                <label
                  for="ann-date"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Anna Daan Date:
                </label>
                <input
                  type="date"
                  id="ann-date"
                  className="bg-gray-50 border border-gray-300  shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  
                  required
                />
              </div>
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 "
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-700"
              >
                Whatsapp me photos of Annadaan.
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center animate-heartbeatPulsing"
            >
              Donate Now
            </button>
            <p className="text-xs flex items-center my-2">
              <Info size={12} />
              <span className="ml-2">
                I agree to the terms and privacy policy.
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className="w-[28rem] p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <input
                id="indian"
                type="radio"
                name="donor-type"
                value="indian"
                checked={donorType === "indian"}
                onChange={() => {
                  setDonorType("indian");
                  setSelectedCurrency("");
                }}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="indian"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Indian
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="foreign"
                type="radio"
                name="donor-type"
                value="foreign"
                checked={donorType === "foreign"}
                onChange={() => setDonorType("foreign")}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="foreign"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Foreign
              </label>
            </div>
            {donorType === "foreign" && (
              <div className="relative ml-auto">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:border-green-500"
                  onChange={handleCurrencyChange}
                  value={selectedCurrency}
                >
                  <option value="">Select Currency</option>
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 px-4 rounded-l-lg ${
                donationType === "once"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setDonationType("once")}
            >
              Give Once
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-r-lg ${
                donationType === "monthly"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setDonationType("monthly")}
            >
              Give Monthly
            </button>
          </div>

          <p className="mb-4 text-sm">
            Please select your donation amount (+1 Meal | {getCurrencySymbol()}{" "}
            25/-)
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {(donorType === "foreign" ? foreignAmounts : indianAmounts).map(
              (amount) => (
                <button
                  key={amount}
                  className={`py-2 px-4 rounded-lg border ${
                    selectedAmount === amount
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  {getCurrencySymbol()}
                  {amount}
                </button>
              )
            )}
          </div>

          <input
            type="number"
            className="w-full p-2 mb-4 border rounded-lg shadow-lg"
            placeholder={`Enter amount${
              donorType === "foreign" ? ` in ${selectedCurrency}` : ""
            }`}
            value={customAmount}
            onChange={handleCustomAmountChange}
          />

          <p className="mb-4 text-center">
            You Pledge to serve {calculateMeals()} nutritious meals.
          </p>

          <div className="flex justify-center mb-4">
            <img
              src="/payment-icons.webp"
              alt="Payment Methods"
              className="h-10"
            />
          </div>

          <p className="text-xs text-center mb-4">
            We accept all major payment methods
          </p>

          <button
            className={`w-full py-3 px-4 text-white rounded-lg mb-2 transition-colors ${
              donorType === "foreign" && !selectedCurrency
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={donorType === "foreign" && !selectedCurrency}
            onClick={() => setIsOpenForm(true)}
          >
            Proceed to Donate
          </button>

          <p className="text-xs text-center mb-4">
            ⓘ Donations are tax exempted under 80G
          </p>

          <p className="text-xs text-center">
            For Bank Transactions{" "}
            <a href="#" className="text-green-500 hover:underline">
              Click Here
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
