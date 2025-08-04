import styles from "./styles.module.css"

import img from "../../assets/banner3.png"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom";

export function Cta() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.description}>
                <h2>Matrículas 2026</h2>
                <p>No Colégio Regina Coeli, tornamos o processo de matrícula mais prático e acolhedor para você e sua família. Sabemos o quanto esse momento é importante, por isso oferecemos a opção de agendar um horário com nossa equipe para um atendimento personalizado, com total atenção às suas dúvidas e necessidades. Durante a visita, você poderá conhecer nossa estrutura e entender melhor nossa proposta pedagógica. Venha fazer parte da família RC! </p>
                <Button title="Agende uma visita" onClick={() => navigate('/contato')} />
            </div>
        </div>
    )
}