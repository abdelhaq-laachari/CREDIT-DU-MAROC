import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F3F4F6]">
        <div className="flex flex-col items-center justify-center w-full h-[94vh] lg:h-[87vh] md:space-y-5 lg:space-y-3">
          <span className="text-2xl md:text-5xl lg:text-6xl text-center font-semibold font-circular lg:w-1/2">
            We’re changing the way people think about banking
          </span>
          <div className="lg:w-1/2 w-9/12">
            <p className="tracking-wide text-sm md:text-lg lg:text-md text-center lg:tracking-tighter mb-5 text-[#505A63] font-circular">
              <strong>Crédit du maroc</strong> is a financial technology company
              founded on the premise that basic banking services should be
              helpful, easy and free. We want to profit with our members, not
              from them. That’s why our model doesn’t rely on overdraft fees,
              monthly service fees, service fees, minimum balance requirements,
              and more.
            </p>
            <p className="tracking-wide text-sm md:text-lg lg:text-md lg:tracking-tighter text-center text-[#505A63] font-circular">
              We partner with regional banks to design member first financial
              products. This creates a more competitive market with better,
              lower-cost options for everyday Americans who aren’t being served
              well by traditional banks. We help drive innovation, inclusion,
              and access across the industry.
            </p>
          </div>
        </div>
        <div className="flex items-center h-[50vh] lg:h-[100vh]">
          <div className="w-full mb-6 text-center flex flex-col items-center justify-center bg-[#EB4F4F] h-[40vh] lg:h-[50vh] space-y-4">
            <span className="font-circular text-3xl lg:text-5xl font-bold">
              Our Mission
            </span>
            <p className="font-circular text-sm lg:text-md w-3/4 lg:w-1/2">
              We created C.D.M because we believe everyone deserves financial
              peace of mind. We’re building a new kind of online bank account
              that helps members get ahead by making managing money easy. It’s
              your money. It’s your life.
            </p>
          </div>
        </div>
        <div className="flex items-center h-[80vh] lg:h-[100vh]">
          <div className="w-full mb-6 text-center flex flex-col items-center justify-center space-y-4">
            <span className="font-circular text-3xl lg:text-5xl font-bold">
              Our Culture
            </span>
            <p className="font-circular text-sm lg:text-md w-3/4 lg:w-1/2 mb-4">
              We believe that creating a company where people love to work is
              built on relationships, growth, and impact.
            </p>
            <p className="font-circular text-sm lg:text-md w-3/4 lg:w-1/2">
              We cultivate a culture of low ego and set a high bar for
              excellence. We believe in flat organizations and open work spaces.
              We treat one another inside the company the same way we treat our
              members–by communicating in ways that build trust, operating with
              transparency, and having one another’s back.
            </p>
            <p className="font-circular text-sm lg:text-md w-3/4 lg:w-1/2">
              We recognize the contributions of individuals and celebrate wins
              as a team. Every member of the team is an owner of the company and
              is encouraged to “Chime In” on any part of the business. What we
              all have in common is a mission that starts with heart, and a
              desire to work together to create something of lasting value and
              personal impact for our employees and members alike.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
