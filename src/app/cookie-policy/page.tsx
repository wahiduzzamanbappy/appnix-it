import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/pages/LegalPage";
import { legalDocs } from "@/data/legal";

const doc = legalDocs["cookie-policy"];
export const metadata = buildMetadata({ title: doc.title, description: doc.description, path: "/cookie-policy" });

export default function Page() {
  return <LegalPage doc={doc} />;
}
