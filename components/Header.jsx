import Image from "next/image";
import Menu from "./Menu";

import logo from "../public/logo.png"
import styles from "../styles/Header.module.css"

export default function Header({setPage}) {
    return <header className={styles.header}>
        <a href="#" onClick={() => setPage('accueil')}>
            <Image src={logo} alt="Logo" className={styles.logo} />
        </a>

        <h1 className={styles.titre}>Titre de page</h1>

        <Menu setPage={setPage} />
    </header>
}