import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Homepage() {
    return (
        <section>
            <div className={styles.textOverlay}>
                <Image src="/Yes.gif" className={styles.image} height={500} width={2150}/>
                <p>Hello</p>
            </div>
        </section>
    );
}