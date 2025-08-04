import styles from "./styles.module.css"

import bannerContato from "../../assets/Rectangle 7.png"

export function BannerContato() {
    return (
        <div className={styles.container}>
            <img src={bannerContato} alt="" />
        </div>
    )
}