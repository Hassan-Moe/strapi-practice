import { client } from "@/services/graphql/client";
import {
  IGenAnnouncementBar,
  IGenFooter,
  IGenHeader,
  IGenQuery,
} from "@/types/IGenTypes";
import q_announcement_bar from "../graphql/queries/q_announcement_bar";
import { q_header } from "../graphql/queries/q_header";
import { q_footer } from "../graphql/queries/q_footer";

interface ILayoutProps {
  header: IGenHeader | null;
  announcementBar: IGenAnnouncementBar | null;
  footer: IGenFooter | null;
}

export async function getLayoutProps(
  locale: string,
): Promise<ILayoutProps | null> {
  try {
    // Header query
    const headerQuery = client.query<Pick<IGenQuery, "header">>({
      query: q_header,
      variables: {
        locale,
      },
    });

    // Footer query
    const footerQuery = client.query<Pick<IGenQuery, "footer">>({
      query: q_footer,
      variables: {
        locale,
      },
    });

    // Announcement Bar query
    const announcementBarQuery = client.query<
      Pick<IGenQuery, "announcementBar">
    >({
      query: q_announcement_bar,
      variables: {
        locale,
      },
    });

    // Await all queries in parallel
    const [headerRes, footerRes, announcementBarRes] = await Promise.all([
      headerQuery,
      footerQuery,
      announcementBarQuery,
    ]);

    console.log({
      layout: {
        headerRes,
        footerRes,
        announcementBarRes,
      },
    });

    // Return the combined results
    return {
      header: headerRes?.data?.header ?? null,
      footer: footerRes?.data?.footer ?? null,
      announcementBar: announcementBarRes?.data?.announcementBar ?? null,
    };
  } catch (err) {
    console.error("Error fetching layout props:", err);
    return null;
  }
}
