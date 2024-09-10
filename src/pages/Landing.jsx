import React from "react";
import land7 from "../assets/land-7.jpg";
import pokeIcon from "../assets/pokeIcon.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="home">
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6 ">
        <article className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-10">
            <h2 className="text-3xl sm:text-5xl sm:text-center md:text-left font-bold tracking-tight mb-10">
              <span className="font-sans">“</span> Take charge
              <br /> of your destiny. <span className="font-sans">”</span>
              <br /> — Rayquaza
            </h2>
            <p className=" text-lg mb-12 font-semibold ">
              {" "}
              Find out info about your favorite Pokemon
              <span>
                <img
                  src={pokeIcon}
                  alt="pokeIcon"
                  className="w-5 inline-block"
                />
              </span>{" "}
              & shop poke gifts for your friends & lovers{" "}
            </p>
            <div className="hidden lg:flex justify-around gap-x-2  ">
              <Link
                to="pokemon"
                className="btn btn-primary btn-wide capitalize font-semibold text-lg"
              >
                search database
              </Link>
              <Link
                to="/gifts"
                className="btn btn-primary btn-wide capitalize font-semibold text-lg"
              >
                shop for gifts
              </Link>
            </div>
          </div>
          <div className="px-4 hidden md:block">
            <img src={land7} alt="poke" className="rounded-xl " />
          </div>
        </article>
        <div className=" lg:hidden flex justify-around md:justify-start md:gap-x-4 px-10 ">
          <Link
            to="pokemon"
            className="btn btn-primary  capitalize font-semibold text-base md:text-lg"
          >
            search database
          </Link>
          <Link
            to="/gifts"
            className="btn btn-primary  capitalize font-semibold text-base md:text-lg"
          >
            shop for gifts
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Landing;
