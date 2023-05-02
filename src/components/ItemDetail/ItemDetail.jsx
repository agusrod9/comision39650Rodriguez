import styles from './ItemDetail.module.css'

export const ItemDetail =({product})=>{
    return (
        <div className={styles.contenedorDetails}>
            <img src={product.img} alt={"Imágen de "+product.title} className={styles.img} />
            <h1>{product.title}</h1>
            <h4>{product.desc}</h4>
        </div>
    )
}