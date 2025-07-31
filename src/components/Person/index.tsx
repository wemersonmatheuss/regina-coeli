import styles from "./styles.module.css"

import img1 from "../../assets/image 3.jpg"
import img2 from "../../assets/image 4.jpg"
import img3 from "../../assets/image 5.jpg"
import img4 from "../../assets/image 6.jpg"
import img5 from "../../assets/image 7.jpg"
import img6 from "../../assets/image 8.jpg"
import img7 from "../../assets/image 9.jpg"
import img8 from "../../assets/image 10.jpg"

export function Person() {
    return (
        <div className={styles.container}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
    )
}