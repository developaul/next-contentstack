import LivePreview from "./components/LivePreview";
import styles from "./page.module.css";
import { getWebhookPageEntry, setLivePreviewQueryParams } from "@/utils";

export default async function Home({ searchParams }: any) {
  const queryParams = await searchParams;

  setLivePreviewQueryParams(queryParams);

  const entry = await getWebhookPageEntry();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button>
          {entry.description}
        </button>

        <LivePreview />
      </main>
    </div>
  );
}
