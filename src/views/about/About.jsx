import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
import img3 from "../../assets/about3.jpg";
import img4 from "../../assets/about4.jpg";

const About = () => {
  return (
    <section className="flex flex-col gap-7 px-8% py-28 justify-center items-center">
      <article className="flex gap-8 flex-wrap">
        <img className=" rounded-lg" src={img3} alt="" />
        <div className="flex  gap-5 jus flex-wrap">
          <img className="w-72 rounded-md m-auto" src={img1} alt="" />
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-emerald-400">About Us</h3>
            <p>
              Welcome to JamiCommerce! we are passionate about technology and
              committed to providing our customers with the best shopping
              experience for electronic and tech products. We take pride in
              being your trusted destination for all your tech needs.
            </p>
            <h3 className="font-semibold text-emerald-400">What We Offer</h3>
            <p>In our extensive catalog, you all find a carefully curated selection of products from top brands, ranging from state-of-the-art smartphones and laptops to home entertainment devices and innovative tech accessories. Our team of tech experts works tirelessly to ensure that every product we offer is of the highest quality and meets the most demanding standards.</p>

            <h3 className="font-semibold text-emerald-400">Our Mission</h3>
            <p>Our mission is simple yet powerful: to make cutting-edge technology accessible to everyone. We believe that technology can enhance the quality of life and open up new possibilities, and we want to be your partners on this exciting journey.</p>
          </div>
        </div>

        <img src={img4} className="rounded-md" alt="" />
      </article>

    </section>
  );
};

export default About;
