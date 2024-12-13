import styles from "./page.module.css";
import { getWebhookPageEntry } from "@/utils";

export default async function Home() {
  const entry = await getWebhookPageEntry();


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button>
          {entry.description}
        </button>
      </main>
    </div>
  );
}
