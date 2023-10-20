import { useParams } from "react-router-dom";
import data from "../../data/products.json"
import styles from './details.module.css'
const Details = () => { 

    const {id} = useParams()
    const productFind = data.find(pro => pro.id === Number(id))

  
    
    return(
        <section className={`${styles.details} w-full min-h-screen px-8% py-20 flex gap-8 flex-wrap justify-center items-center`}>
           <img src={productFind.images[0]} alt="" />
           <div>
             <h3>Name: {productFind.title}</h3>
             <p className="max-w-xs">Description: {productFind.description}</p>
             <h4>Price: {productFind.price}</h4>
           </div>
         
           
        </section>
    )
}

export default Details;