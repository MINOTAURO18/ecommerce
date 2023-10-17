import styles from "./home.module.css";
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
          <a href="#">boton</a>
        </article>
        <div className="flex w-2/5 justify-center items-center">
          <img
            className="w-96"
            src={phones}
            alt="#"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
