import Head from 'next/head'
import styles from './Layout.module.css'
import Image from 'next/image'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Image src={"/logo.png"} width={'17px'} height={'17px'}/>lubHouse
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <a
                href="https://twitter.com/duruyoungcr"
                target="_blank"
                rel="noopener noreferrer"
                >
                ray
                </a>
            </footer>
        </div>
    )
}

export default Layout
