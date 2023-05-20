import CounterContainer from '../Counter/CounterContainer'
import styles from './ItemDetail.module.css'

export const ItemDetail =({product, onAdd, totalQuantity})=>{
    return (
        <div className={styles.contenedorDetails}>
            <img src={product.img} alt={"Imágen de "+product.title} className={styles.img} />
            <h1 className={styles.titulo}>{product.title}</h1>
            <h4>{product.desc}</h4>
            <div className={styles.contador}>
                <CounterContainer stock={product.stock} onAdd={onAdd} initial={totalQuantity}/>
            </div>
        </div>
        
    )
}