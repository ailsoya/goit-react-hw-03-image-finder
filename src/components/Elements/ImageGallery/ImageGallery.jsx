import { ImageGalleryItem } from './ImageGalleryItem'
import styles from '../Style.module.css'

export const ImageGallery = ({ items }) => {
    return (
        <ul className={styles.ImageGallery}>
            {items.map(item => (
                <ImageGalleryItem key={item.id} src={item.webformatURL} alt={item.tags} />
            ))}
        </ul>
    )
}