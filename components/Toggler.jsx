import { useState } from 'react'
import styles from '../styles/Toggler.module.css'

export default function Toggler({titre, visible, children}) {
    const [contenuVisible, setContenuVisible] = useState(visible);

    const toggle = () => {
        setContenuVisible(!contenuVisible)
    }

    return <>
        <div className={styles.titre} onClick={toggle}>
            {titre}
        </div>
        {contenuVisible &&
            <div className={styles.contenu}>
                {children}
            </div>
        }

        {/* 
        Classe CSS conditionnelle

        <div className={styles.contenu + ' ' + (contenuVisible ? '' : styles.hidden)}>
            Contenu
        </div>*/}
        
    </>
}