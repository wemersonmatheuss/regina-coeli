import styles from "./styles.module.css"

import logo from "../../assets/image 1.svg"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom";

export function Nav() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <img src={logo} alt="" />
            <Button title="Agende uma visita" onClick={() => navigate('/contato')} />
        </div>
    )
}