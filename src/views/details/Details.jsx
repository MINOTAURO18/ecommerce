import { useParams } from "react-router-dom";
import data from "../../data/products.json"
const Details = () => { 

    const {id} = useParams()
    const productFind = data.find(pro => pro.id === Number(id))

  
    
    return(
        <section className="px-8% py-20">
           <img src={productFind.images[0]} alt="" />
         
           
        </section>
    )
}

export default Details;