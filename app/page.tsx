import { redirect } from "next/navigation";
import { DEFAULT_MARKET } from "@/lib/i18n";

// Root and any generic entry point default to the UK market (no geo / browser-language detection).
export default function RootPage() {
  redirect(`/${DEFAULT_MARKET}`);
}
