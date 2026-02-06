import { IGenPage, IGenQuery } from "@/types/IGenTypes";
import { client } from "../graphql/client";
import { q_page_by_slug } from "../graphql/queries/q_page_by_slug";

interface IProps {
  slug: string;
  locale: string;
}

interface IPagePropsReturn {
  page: IGenPage | null;
  is404: boolean;
}

export const getPageProps = async (
  slug: string,
  locale: string,
): Promise<IPagePropsReturn> => {
  try {
    const pageQuery = client.query<Pick<IGenQuery, "pages">>({
      query: q_page_by_slug,
      variables: {
        locale: locale,
        filters: {
          slug: {
            eqi: `/${slug}`,
          },
        },
      },
    });

    const pageResponse = await pageQuery;

    return {
      page: pageResponse.data?.pages?.[0] || null,
      is404: pageResponse.data?.pages?.[0] ? false : true,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return { page: null, is404: true };
  }
};
