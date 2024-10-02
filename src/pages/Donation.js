import React from "react";
import Outer from "../component/HOC/Outer";
import BannerImage from "../assets/donation-banner.webp";
import Card from "../component/Card";
import sectionImage1 from "../assets/akc-partner-logo-05.png";
import sectionImage2 from "../assets/akc-partner-logo-06.png";
import sectionImage3 from "../assets/akc-partner-logo-07.png";
import sectionImage4 from "../assets/akc-partner-logo-08.png";
import SlickSlider from "../component/SlickSlider";
import DonationForm from "../component/DonationForm";

const programs = [
  {
    title: "Bal Shiksha Ahara",
    subtitle: "Municipal School Meals Programme",
    description:
      "48,04,484 meals across 102 municipal Birthday schools improved classroom attendance by up to 22% in 2021-23.",
  },
  {
    title: "Swasthya Ahara",
    subtitle: "Government Hospital Feeding Programme",
    description:
      "Served 3,94,957 vulnerable families of patients across 29 Govt. Hospitals and Cancer Center to help save over 47 Cr. towards treatment.",
  },
  {
    title: "Paushtik Ahara",
    subtitle: "Meals on Wheels Programme",
    description:
      "Serving to support informal education for 450 underprivileged children in 5 slums.",
  },
];

const Donation = () => {
  return (
    <Outer>
      <div className="relative">
        <img
          src={BannerImage}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex mx-24">
        <div className="w-2/3">
          <section className="container w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[90vw]">
            <div className="gap-8">
              <section className="pt-16">
                <div className="pb-14">
                  <h1 className="text-4xl font-semibold text-gray-800">
                    Online Donations to Empower Hope in India
                  </h1>
                </div>
                <div className="flex flex-wrap items-center  justify-start flex-row gap-[1.5rem] gap-x-20">
                  <Card
                    image="https://via.placeholder.com/300"
                    description="Surprise Your Dear Ones By Celebrating Weddings and Anniversaries With Less Fortunate."
                    total={10}
                    completed={6}
                  />
                  <Card
                    image="https://via.placeholder.com/300"
                    description="Surprise Your Dear Ones By Celebrating Weddings and Anniversaries With Less Fortunate."
                    total={10}
                    completed={6}
                  />
                </div>
              </section>
              <section className="mt-16">
                <p className="font-normal text-base leading-6 font-sans">
                  Every contribution in the form of charity, big or small,
                  brings us closer to ending hunger in our community. Your
                  online donations, no matter the size, can provide nutritious
                  meals to those in need. Together, we can build a hunger-free
                  community. Donate Now and be a part of the solution!
                </p>
                <br />
                <p className="font-normal text-base leading-6 font-sans">
                  Apart from all the special blessings and soul satisfactions
                  that you will receive through this charity, all donations done
                  through this website qualifies for tax exemption under 80G
                  benefit.
                  <strong> Akshaya Chaitanya Charitable Foundation</strong>{" "}
                  issues a 10BE certificate to all our donors.
                </p>
              </section>
              <section className="pt-20">
                <div className="mb-20">
                  <h2 className="text-4xl font-semibold text-gray-800">
                    Our Feeding Initiatives and their impact
                  </h2>
                </div>
                {programs.map((program, index) => (
                  <div key={index} className="flex mb-7 pr-5">
                    <div className="w-2/3">
                      <div className="py-2 ">
                        <div className="relative pb-4">
                          <h4 className=" relative font-semibold text-2xl leading-6">
                            {program.title}
                          </h4>
                          <span className="absolute mb-2 w-14 h-1 bg-green-600 rounded-sm -bottom-2  left-0 transform "></span>
                        </div>
                        <h5 className="text-xl font-medium leading-6 my-3">
                          {program.subtitle}
                        </h5>
                        <p className="text-base font-normal">
                          {program.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <img
                        src="https://via.placeholder.com/200x100"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </section>
              <section className="py-4">
                <div className="relative">
                  <h2 className="text-4xl font-semibold relative text-gray-800">
                    Why Donate With Akshaya Chaitanya?
                  </h2>
                  <span className="absolute mb-2 w-14 h-1 bg-green-600 rounded-sm -bottom-4  right-2/3 transform "></span>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <div className="relative flex flex-col bg-white shadow-sm border text-center border-slate-200 w-2/3 rounded-lg my-6">
                    <div className="flex flex-col gap-4 p-2 m-auto">
                      <div className="w-full max-w-sm min-w-52"></div>

                      <div className="inline-flex items-center ml-3">
                        <button
                          class="rounded-lg bg-red-400 py-2 px-12 mr-4 border border-transparent text-center text-md text-white "
                          type="button"
                        >
                          50 meals <p>₹ 750</p>
                        </button>
                        <button
                          class="rounded-lg bg-white-200 py-2 px-11 mr-4 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          100 meals <p>₹ 1500</p>
                        </button>
                      </div>
                      <div className="inline-flex items-center mt-2 ml-3">
                        <button
                          class="rounded-lg bg-white-200 py-2 px-11 ml-0 mr-3 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          200 meals <p>₹ 3000</p>
                        </button>
                        <button
                          class="rounded-lg bg-white-200 py-5 px-14 ml-1 mr-4 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Other
                        </button>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="flex justify-center mt-6 text-sm bg-gray-100 px-1 py-1 pl-3 rounded-sm text-slate-600">
                        To address mainutrition in india. We would nees to serve
                        250 nutritious meals to each child every academic year.
                      </p>
                      <button
                        className="w-full max-w-sm min-w-[200px] rounded-md bg-red-400 py-3 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        Pledge your contribution here
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className="w-1/3 sticky-container">
          <DonationForm />
        </div>
      </div>

      <section className="py-4">
        <SlickSlider></SlickSlider>
      </section>
    </Outer>
  );
};

export default Donation;
