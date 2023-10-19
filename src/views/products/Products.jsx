import styles from './products.module.css'
import {data} from '../../data/products.json'
import Slider from '../../components/carrucell'
const Products= ({
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {

    const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, stock: item.stock + 1 }
					: item
			);
			setTotal(total + product.price * product.stock);
			setCountProducts(countProducts + product.stock);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.stock);
		setCountProducts(countProducts + product.stock);
		setAllProducts([...allProducts, product]);
	};
    return(
        <section className={`${styles.products} py-28 px-8% flex flex-wrap justify-center gap-12`}>
            <Slider/>
            {
                data.map(product => {
                    return(
                        <div key={product.id} className={`${styles.card} flex flex-col  w-80 h-80 gap-1`}>
                            <img className='w-full h-52' src={product.images[0]} alt="" />
                            <h3 className='text-center font-semibold'>{product.title}</h3>
                            <span>{product.price}$</span>
                            <button className='w-60 rounded-md h-10 bg-black text-white m-auto' onClick={() => onAddProduct(product)}>add to cart</button>
                        </div>
                    )
                })
            }
        </section>
    )
}   

export default Products;