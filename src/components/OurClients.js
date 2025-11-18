import React from "react";

import AbhyaHasta from "../assets/Abhya Hasta.png";
import AduriInfra from "../assets/Aduri Infra.png";
import Arowwai from "../assets/Arowwai.png";
import Chiropractic from "../assets/Chiropractic.png";
import DayaInteriors from "../assets/Daya Interiors.png";
import GaneshTraders from "../assets/Ganesh Traders.png";
import HouseHunter from "../assets/HouseHunter.png";
import Larana from "../assets/Larana Online School.png";
import MukthaPhotography from "../assets/Muktha Photography.png";
import OOTD from "../assets/OOTD.png";
import OrganicFresh from "../assets/Organic fresh.png";
import ReativeStudio from "../assets/Reative Studio.png";
import SalfordCo from "../assets/Salford & co.png";
import SpineReset from "../assets/Spine Reset Chiropractic.png";
import StyleBliss from "../assets/stylebliss.png";
import VivInfra from "../assets/Viv Infra.png";

const OurClients = () => {
  const clients = [
    { name: "Abhya Hasta Infra", logo: AbhyaHasta },
    { name: "Spine Reset Chiropractic", logo: SpineReset },
    { name: "Ganesh Traders", logo: GaneshTraders },
    { name: "Aduri Infra Pvt. Ltd.", logo: AduriInfra },

    { name: "Viv Infra", logo: VivInfra },
    { name: "OOTD", logo: OOTD },
    { name: "Muktha Photography", logo: MukthaPhotography },
    { name: "Daya Interiors", logo: DayaInteriors },

    { name: "Larana Online School", logo: Larana },
    { name: "Arowwai", logo: Arowwai },
    { name: "House Hunter", logo: HouseHunter },
    { name: "Salford & Co", logo: SalfordCo },

    { name: "Reative Studio", logo: ReativeStudio },
    { name: "StyleBliss", logo: StyleBliss },
    { name: "Chiropractic Healthcare", logo: Chiropractic },
    { name: "Organic Fresh & Natural", logo: OrganicFresh },
  ];
    return (
    <section className="bg-[#0A1A2F] py-20 px-6 md:px-12 rounded-3xl mx-4 my-8">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our <span className="text-yellow-400">Clients</span>
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Trusted by industry leaders and innovative companies worldwide
        </p>
      </div>

      {/* STATIC GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-40 hover:scale-105 transition-all duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-24 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;

