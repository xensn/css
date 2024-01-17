import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/img_1.png" alt="Spotify" />
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link href="/Xavier">Premium</Link>
                <Link href="/Nickxon">Support</Link>
                <Link href="/">Download</Link>
            </div>
            <div className={styles.authLinks}>
                <span className={styles.divider}>|</span>
                <Link href="/">Sign up</Link>
                <Link href="/">Log in</Link>
            </div>
        </nav>
    );
}