import React from "react";

const tourData = [
  {
    date: "JUL 16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    location: "TORONTO,ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const ToursList = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 font-heading">
        TOURS
      </h2>
      <div className="space-y-4">
        {tourData.map((tour, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border-t border-b py-4"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-gray-700 font-medium text-lg">
              <span className="w-24">{tour.date}</span>
              <span className="w-40">{tour.location}</span>
              <span className="w-72">{tour.venue}</span>
            </div>
            <button className="mt-4 cursor-pointer md:mt-0 bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded transition">
              BUY TICKETS
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursList;
