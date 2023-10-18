import styles from './products.module.css'
import {products} from '../../data/products.json'
const Products = () => {
    return(
        <section className={`${styles.products}`}>
            {
                products.map(pro => {
                    return(
                        <div key={pro.id}>
                            <img className='w-20' src={pro.images[0]} alt="" />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Products;