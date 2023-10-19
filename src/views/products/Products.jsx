import styles from './products.module.css'
import {products} from '../../data/products.json'
import Slider from '../../components/carrucell'
const Products = () => {
    return(
        <section className={`${styles.products} py-28 px-8% flex flex-wrap justify-center gap-9`}>
            <Slider/>
            {
                products.map(pro => {
                    return(
                        <div key={pro.id} className={`${styles.card} w-80 h-72`}>
                            <img className='w-full h-52' src={pro.images[0]} alt="" />
                            <h3>{pro.title}</h3>
                            <span>{pro.price}</span>
                            <button>Buy</button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Products;