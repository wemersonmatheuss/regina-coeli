import styles from "./styles.module.css"

import { Button } from "../Button"
import { MapaLocalizacao } from "../MapaLocalizacao"
import telefone from "../../assets/telefone (2) 1.svg"
import email from "../../assets/o-email (3) 1.svg"
import localizacao from "../../assets/endereco (1) 1.svg"

export function Form() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.title}>
                    <p>| Contato</p>

                    <div className={styles.description}>
                        <div className={styles.info}>
                            <img src={telefone} alt="" />
                            <p>(81) 3628-0084</p>
                        </div>

                        <div className={styles.info}>
                            <img src={email} alt="" />
                            <p>colegiorc@gmail.com</p>
                        </div>

                        <div className={styles.info}>
                            <img src={localizacao} alt="" />
                            <p>Av. Dr. Severino Pinheiro, 60 <br /> Centro, Limoeiro - PE, 55700-000</p>
                        </div>
                    </div>
                </div>

                <form action="">
                    <div className={styles.campo}>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Ex: Wemerson Matheus"/>
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder="Ex: wemerson@gmail.com"/>
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="">Celular</label>
                        <input type="text" placeholder="Ex: (81) 9 9999-9999"/>
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id="" placeholder="Digite o assunto"></textarea>
                    </div>

                    <Button title="Enviar Mensagem"/>
                </form>
            </div>

            <div className={styles.mapa}>
                <MapaLocalizacao/>
            </div>
        </div>
    )
}