import styles from "./styles.module.css"

import logo from "../../assets/logo2.svg"
import insta from "../../assets/instagram (2) 1.svg"
import face from "../../assets/facebook 1.svg"

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src={logo} alt="" />
                <a href="#">Voltar ao topo</a>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bottom}>
                <a href="#">
                    <img src={insta} alt="" />
                </a>

                <a href="#">
                    <img src={face} alt="" />
                </a>
            </div>
        </div>
    )
}