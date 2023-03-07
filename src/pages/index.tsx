import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { n = "", m = "" } = router.query;
  const name = Buffer.from(n.toString(), "base64").toString("ascii");
  const message = Buffer.from(m.toString(), "base64").toString("ascii");

  return (
    <>
      <Head>
        <title>Octavio Appreciates You</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {(n || m) && (m !== "" || n !== "")
              ? `Octavio created this website to say`
              : "Octavio has nothing to say to you at this moment"}
          </p>
        </div>
        <div>
          <p>
            {(n || m) && (m !== "" || n !== "")
              ? `${name}${m === "" || n === "" ? "" : ", "} ${message}`
              : ""}
          </p>
        </div>
      </main>
    </>
  );
}
