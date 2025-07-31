import styles from "./styles.module.css"

import logo from "../../assets/image 1.svg"
import { Button } from "../Button"

export function Nav() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="" />
            <Button title="Agende uma visita"/>
        </div>
    )
}