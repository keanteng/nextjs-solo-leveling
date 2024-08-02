import Link from 'next/link'
import styles from './page.module.css'


export default function About() {
    return (
        <>
        <div className={styles.body}>
        <h1>About</h1>
        <p>This is the about page.</p>

        <p>
            <Link href="/">Go back to the home page</Link>
        </p>
        </div>
        </>
    )
}