import styles from './products.module.css'
import data from '../../data/products.json'
import Slider from '../../components/carrucell'
import { NavLink } from 'react-router-dom';
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
                        <div key={product.id} className={`${styles.card} flex flex-col  w-80 h-auto py-2 gap-2`}>
                            <img className={`${styles.scale} w-full h-52`} src={product.images[0]} alt="" />
                            <h3 className='text-center font-semibold'>{product.title}</h3>
                            
                            <button className='w-60 rounded-md h-10 bg-emerald-400 text-white m-auto font-semibold hover:bg-emerald-600 transition' onClick={() => onAddProduct(product)}>add to cart</button>
                            <NavLink to={`/detail/${product.id}`} className='w-60 rounded-md h-10 bg-black text-white m-auto font-semibold flex justify-center items-center hover:bg-gray-950 transition' >Details</NavLink>
                        </div>
                    )
                })
            }
        </section>
    )
}   

export default Products;