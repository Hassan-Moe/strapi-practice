import { AnnouncementBar } from "@/component/molecules/announcement-bar/AnnouncementBar";
import { getAnnouncementBar } from "@/services/content/getAnnouncementBar";
import { getLocale } from "next-intl/server";

export default async function NextjsPage() {
  const locale = await getLocale();
  const announcementBar = await getAnnouncementBar(locale);

  return (
    <main>
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}
    </main>
  );
}
