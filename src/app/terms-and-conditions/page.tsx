import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/pages/LegalPage";
import { legalDocs } from "@/data/legal";

const doc = legalDocs["terms-and-conditions"];
export const metadata = buildMetadata({ title: doc.title, description: doc.description, path: "/terms-and-conditions" });

export default function Page() {
  return <LegalPage doc={doc} />;
}
