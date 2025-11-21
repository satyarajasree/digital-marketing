// Uploaded file (tooling): /mnt/data/9bc4f132-ebf6-49c0-aefe-5d1faf566e23.png

import React, { useRef, useEffect } from "react";

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
    AbhyaHasta,
    SpineReset,
    GaneshTraders,
    AduriInfra,
    VivInfra,
    OOTD,
    MukthaPhotography,
    DayaInteriors,
    Larana,
    Arowwai,
    HouseHunter,
    SalfordCo,
    ReativeStudio,
    StyleBliss,
    Chiropractic,
    OrganicFresh,
  ];

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const speed = 0.5;
  const rafRef1 = useRef(null);
  const rafRef2 = useRef(null);

  useEffect(() => {
    const c1 = row1Ref.current;
    const c2 = row2Ref.current;

    const step1 = () => {
      if (c1) {
        c1.scrollLeft += speed;
        if (c1.scrollLeft >= c1.scrollWidth / 2) {
          c1.scrollLeft -= c1.scrollWidth / 2;
        }
      }
      rafRef1.current = requestAnimationFrame(step1);
    };

    const step2 = () => {
      if (c2) {
        c2.scrollLeft -= speed;
        if (c2.scrollLeft <= 0) {
          c2.scrollLeft += c2.scrollWidth / 2;
        }
      }
      rafRef2.current = requestAnimationFrame(step2);
    };

    if (c1) c1.scrollLeft = 0;
    if (c2) c2.scrollLeft = c2.scrollWidth / 2;

    rafRef1.current = requestAnimationFrame(step1);
    rafRef2.current = requestAnimationFrame(step2);

    return () => {
      cancelAnimationFrame(rafRef1.current);
      cancelAnimationFrame(rafRef2.current);
    };
  }, []);

  const renderItem = (logo, idx) => (
    <div
      key={idx}
      data-client-item
      className="flex-shrink-0 w-[18%] px-2"
      style={{ maxWidth: "220px", minWidth: "120px" }}
    >
      <div className="bg-white rounded-xl shadow-md p-3 h-28 flex items-center justify-center">
        <img src={logo} alt={`client-${idx}`} className="max-h-16 object-contain" />
      </div>
    </div>
  );

  return (
    <section className="bg-[#0A1A2F] py-14 px-4 md:px-12 rounded-3xl mx-4 my-4">
      
      {/* Centered Header */}
      <div className="text-center max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Our <span className="text-yellow-400">Clients</span>
        </h2>

        <p className="text-gray-300 text-lg mt-3">
          Trusted by industry leaders and innovative companies worldwide
        </p>
      </div>
            {/* SCROLLING ROWS */}
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ROW 1 */}
        <div
          ref={row1Ref}
          className="overflow-hidden whitespace-nowrap w-full"
          style={{ cursor: "grab" }}
        >
          <div className="flex items-center" style={{ width: "max-content" }}>
            {clients.map((c, i) => renderItem(c, `r1-a-${i}`))}
            {clients.map((c, i) => renderItem(c, `r1-b-${i}`))}
          </div>
        </div>

        {/* Gap added */}

        {/* ROW 2 (reverse direction) */}
        <div
          ref={row2Ref}
          className="overflow-hidden whitespace-nowrap w-full"
          style={{ cursor: "grab" }}
        >
          <div className="flex items-center" style={{ width: "max-content" }}>
            {clients.slice().reverse().map((c, i) => renderItem(c, `r2-a-${i}`))}
            {clients.slice().reverse().map((c, i) => renderItem(c, `r2-b-${i}`))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurClients;

