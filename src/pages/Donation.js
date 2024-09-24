import React from "react";
import Outer from "../component/HOC/Outer";
import BannerImage from "../assets/donation-banner.webp";
import Card from "../component/Card";
import sectionImage1 from '../assets/akc-partner-logo-05.png'
import sectionImage2 from '../assets/akc-partner-logo-06.png'
import sectionImage3 from '../assets/akc-partner-logo-07.png'
import sectionImage4 from '../assets/akc-partner-logo-08.png'

const programs = [
  {
    title: "Bal Shiksha Ahara",
    subtitle: "Municipal School Meals Programme",
    description: "48,04,484 meals across 102 municipal Birthday schools improved classroom attendance by up to 22% in 2021-23."
  },
  {
    title: "Swasthya Ahara",
    subtitle: "Government Hospital Feeding Programme",
    description: "Served 3,94,957 vulnerable families of patients across 29 Govt. Hospitals and Cancer Center to help save over 47 Cr. towards treatment."
  },
  {
    title: "Paushtik Ahara",
    subtitle: "Meals on Wheels Programme",
    description: "Serving to support informal education for 450 underprivileged children in 5 slums."
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
      <section className="container mx-24 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[90vw]">
        <div className="flex gap-8">
          <div className="flex-[64.33%]">
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
                Every contribution in the form of charity, big or small, brings
                us closer to ending hunger in our community. Your online
                donations, no matter the size, can provide nutritious meals to
                those in need. Together, we can build a hunger-free community.
                Donate Now and be a part of the solution!
              </p>
              <br />
              <p className="font-normal text-base leading-6 font-sans">
                Apart from all the special blessings and soul satisfactions that
                you will receive through this charity, all donations done
                through this website qualifies for tax exemption under 80G
                benefit.
                <strong> Akshaya Chaitanya Charitable Foundation</strong> issues
                a 10BE certificate to all our donors.
              </p>
            </section>
            <section className="pt-20">
              <div className="mb-20">
                <h2 className="text-4xl font-semibold text-gray-800">
                  Our Feeding Initiatives and their impact
                </h2>
              </div>
              {programs.map((program, index) => (
              <div key={index} className="flex mb-7">
                <div className="flex-[66%]">
                  <div className="py-2 ">
                    <div className="relative pb-4">
                      <h4 className=" relative font-semibold text-2xl leading-6">{program.title}</h4>
                      <span className="absolute mb-2 w-14 h-1 bg-green-600 rounded-sm -bottom-2  left-0 transform "></span>
                    </div>
                    <h5 className="text-xl font-medium leading-6 my-3">{program.subtitle}</h5>
                    <p className="text-base font-normal">{program.description}</p>
                  </div>

                </div>
                <div className="flex-[34%]">
                  <img src="https://via.placeholder.com/200x100" className="w-full rounded-lg"/>
                </div>
              </div>
                 ))}
            </section>
            <section className="py-4">
              <div className="relative">

                <h2 className="text-4xl font-semibold relative text-gray-800">
                  Why Donate With Akshaya Chaitanya?
                </h2>
                <span className="absolute mb-2 w-14 h-1 bg-green-600 rounded-sm -bottom-2  right-2/3 transform "></span>
              </div>
            </section>
          </div>
          <div className="flex-[35.67%]"></div>
        </div>
      </section>
    </Outer>
  );
};

export default Donation;
