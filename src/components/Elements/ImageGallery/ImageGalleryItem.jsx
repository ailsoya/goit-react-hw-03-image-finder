import styles from '../Style.module.css'

export const ImageGalleryItem = ({ src, alt }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img src={src} alt={alt} />
        </li>
    )
}