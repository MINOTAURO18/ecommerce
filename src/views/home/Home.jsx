import styles from "./home.module.css";
import { NavLink } from "react-router-dom";
import phones from "../../assets/phones.webp";
import iphone from "../../assets/iphone.webp";
import diademas from "../../assets/diademas.webp";
import airpots from "../../assets/airpots.webp";
import tablet from "../../assets/tablet.webp";
import laptop from "../../assets/laptop.webp";
import smartwach from "../../assets/Smartwach.webp";
import { useState, useEffect } from "react";

const Home = () => {
  const [countdownDate] = useState(new Date("2023-12-31T00:00:00").getTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <main className={`${styles.home} text-zinc-900`}>
      <section
        className={`${styles.sectionOne} flex items-center w-full px-8% min-h-screen`}
      >
        <article className="w-3/5 flex flex-col gap-6">
          <span className="text-emerald-400 font-semibold">
            technology out of this world !
          </span>
          <h1 className="text-5xl font-bold max-w-2xl ">
            Empowering Your{" "}
            <span className="text-emerald-400">Tomorrow with Todays</span>{" "}
            Cutting-Edge Technology
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            consectetur odio tempore commodi totam earum id, alias magni
            provident? Esse eaque incidunt id qui quaerat voluptates.
          </p>
          <NavLink className="w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-semibold border-slate-900 hover:bg-emerald-500 transition">
            boton
          </NavLink>
        </article>
        <div className="flex w-2/5 justify-center items-center">
          <img className="w-96 z-10" src={phones} alt="#" />
        </div>
        <span className={`${styles.deco}`}></span>
      </section>

      <section
        className={`${styles.sectionTwo} flex flex-wrap gap-4 items-center w-full px-8%`}
      >
        <h2 className="text-2xl text-emerald-400 font-semibold">
          Trending Categories
        </h2>
        <article className="w-full h-auto flex justify-between items-center gap-3">
          <div className="w-36">
            <img src={iphone} alt="" />
          </div>
          <div className="w-36">
            <img src={diademas} alt="" />
          </div>
          <div className="w-36">
            <img src={laptop} alt="" />
          </div>
          <div className="w-36">
            <img src={airpots} alt="" />
          </div>
          <div className="w-36">
            <img src={smartwach} alt="" />
          </div>
          <div className="w-36">
            <img src={tablet} alt="" />
          </div>
        </article>
      </section>

      <section className={`${styles.sectionThree} px-8% py-7 flex justify-center items-center gap-10`}>
        <article>
          <NavLink className="w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-semibold border-slate-900 hover:bg-emerald-500 transition">
            boton
          </NavLink>
          <span>Up to 30% Discount Check it Out</span>
          <span>
            <span>{timeLeft.days} Días</span>
            <span>{timeLeft.hours} Horas</span>
            <span>{timeLeft.minutes} Minutos</span>
            <span>{timeLeft.seconds} Segundos</span>
          </span>

          <NavLink className="w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-semibold border-slate-900 hover:bg-emerald-500 transition">
            Shop Now
          </NavLink>
        </article>
        <div>
          <img src={laptop} alt="laptop" />
        </div>
      </section>
    </main>
  );
};

export default Home;
