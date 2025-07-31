import styles from "./styles.module.css"

import { CardFeedbacks } from "../CardFeedbacks"

import estrela from "../../assets/estrela (1) 2.svg"
import icon from "../../assets/Ellipse 1.svg"

export function Feedbacks() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>O que dizem sobre nós?</h2>
                <div className={styles.estrela}>
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                </div>
            </div>

            <div className={styles.feedbacks}>
                <CardFeedbacks icon={icon} name="Wemerson Matheus" description="Estudei no Regina Coeli desde os primeiros anos, e foi muito mais do que uma escola pra mim, foi onde cresci, aprendi e me formei como pessoa. A base que recebi aqui foi essencial não só para passar no vestibular, mas para me tornar quem sou hoje." person="- Wemerson Matheus, ex-aluno" />

                <CardFeedbacks icon={icon} name="Wemerson Matheus" description="Estudei no Regina Coeli desde os primeiros anos, e foi muito mais do que uma escola pra mim, foi onde cresci, aprendi e me formei como pessoa. A base que recebi aqui foi essencial não só para passar no vestibular, mas para me tornar quem sou hoje." person="- Wemerson Matheus, ex-aluno" />
                
                <CardFeedbacks icon={icon} name="Wemerson Matheus" description="Estudei no Regina Coeli desde os primeiros anos, e foi muito mais do que uma escola pra mim, foi onde cresci, aprendi e me formei como pessoa. A base que recebi aqui foi essencial não só para passar no vestibular, mas para me tornar quem sou hoje." person="- Wemerson Matheus, ex-aluno" />
            </div>
        </div>
    )
}