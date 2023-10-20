import { useParams } from "react-router-dom";
import data from "../../data/products.json";
import styles from "./details.module.css";
const Details = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const { id } = useParams();
  const productFind = data.find((pro) => pro.id === Number(id));

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, stock: item.stock + 1 } : item
      );
      setTotal(total + product.price * product.stock);
      setCountProducts(countProducts + product.stock);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.stock);
    setCountProducts(countProducts + product.stock);
    setAllProducts([...allProducts, product]);
  };

  return (
    <section
      className={`${styles.details} w-full min-h-screen px-8% py-20 flex gap-8 flex-wrap justify-center items-center`}
    >
      <img src={productFind.images[0]} alt="" />
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold"><span className="text-emerald-400 font-semibold text-2xl">Name:</span> {productFind.title}</h3>
        <p className="max-w-xs font-semibold"><span className="text-emerald-400 font-semibold text-2xl">Description:</span> {productFind.description}</p>
        <h4 className="font-semibold"><span className="text-emerald-400 font-semibold text-2xl">Price:</span> {productFind.price}$</h4>
        <button className='w-60 rounded-md h-10 bg-emerald-400 text-white m-auto font-semibold hover:bg-emerald-600 transition' onClick={() => onAddProduct(productFind)}>add to cart</button>
      </div>
    </section>
  );
};

export default Details;
