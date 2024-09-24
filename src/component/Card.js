import React from "react";

const Card = ({ image, description, total, completed }) => {
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="p-4 shadow-[0_15px_30px_hsla(0,0%,48%,0.08)] rounded-3xl  bg-white relative gap-6 w-1/3">
      <div className="box-border m-0 min-w-0 relative">
        <img
          src={image}
          alt="Card Image"
          className=" object-cover rounded-2xl w-full h-full"
        />
        <div className="justify-between flex-row absolute right-3 bottom-[-5%] w-[2.5rem] h-[2.5rem] p-2 rounded-[40px] bg-white shadow-[0_15px_30px_hsla(0,0%,48%,0.08)] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M30 13.3333C32.7614 13.3333 35 11.0947 35 8.33331C35 5.57189 32.7614 3.33331 30 3.33331C27.2386 3.33331 25 5.57189 25 8.33331C25 11.0947 27.2386 13.3333 30 13.3333Z"
              stroke="#4461A9"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10 25C12.7614 25 15 22.7614 15 20C15 17.2386 12.7614 15 10 15C7.23858 15 5 17.2386 5 20C5 22.7614 7.23858 25 10 25Z"
              stroke="#4461A9"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M30 36.6667C32.7614 36.6667 35 34.4281 35 31.6667C35 28.9053 32.7614 26.6667 30 26.6667C27.2386 26.6667 25 28.9053 25 31.6667C25 34.4281 27.2386 36.6667 30 36.6667Z"
              stroke="#4461A9"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.3167 22.5167L25.7 29.15"
              stroke="#4461A9"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M25.6833 10.85L14.3167 17.4833"
              stroke="#4461A9"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div class="absolute top-[7%] right-[-8%] bg-gradient-to-r from-[#086d3d] to-[#08a6a7] text-xs font-medium leading-[18px] text-center p-[4px_8px_4px_16px] rounded-l-[4px] rounded-r-none gap-[10px] text-white">
          Tax Benefit
        </div>
      </div>
      <div className="mt-4 height-full">
        <p className="font-semibold text-lg leading-6 text-gray-900 h-16 mb-12">
          {description}
        </p>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center my-2">
          <div class="flex justify-between items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
            <p className="font-normal text-sm leading-5 text-gray-600">
              25 Days left
            </p>
          </div>
          <div class="flex justify-between items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
            </svg>
            <p className="font-normal text-sm leading-5 text-gray-600">2188</p>
          </div>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-900 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex my-2 items-center gap-2">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <p className="font-normal text-sm leading-5 text-[rgb(10,10,10)]">
            Target : <span className="text-blue-900">{completed}</span> left out of <span>{total}</span>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-yellow-500 text-black py-2  hover:bg-white-700  transition duration-200  rounded-md font-semibold border-0">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Card;
