import styles from "./home.module.css";
import { NavLink } from "react-router-dom";
import phones from "../../assets/phones.webp";

const Home = () => {
  return (
    <main className={`${styles.home} text-zinc-900`}>
      <section
        className={`${styles.sectionOne} flex items-center w-full px-8% min-h-screen`}
      >
        <article className="w-3/5 flex flex-col gap-6">
          <span className="text-emerald-400 font-semibold">technology out of this world !</span>
          <h1 className="text-5xl font-bold max-w-2xl ">Empowering Your <span className="text-emerald-400">Tomorrow with Todays</span> Cutting-Edge Technology</h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            consectetur odio tempore commodi totam earum id, alias magni
            provident? Esse eaque incidunt id qui quaerat voluptates.
          </p>
          <NavLink className='w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-semibold border-slate-900 hover:bg-emerald-500 transition'>
            boton
          </NavLink>
        </article>
        <div className="flex w-2/5 justify-center items-center">
          <img
            className="w-96 z-10"
            src={phones}
            alt="#"
          />
        </div>
        <span className={`${styles.deco}`}></span>
      </section>

      <section className="flex flex-wrap gap-4 items-center w-full px-8% min-h-screen">
        
      </section>
    </main>
  );
};

export default Home;
