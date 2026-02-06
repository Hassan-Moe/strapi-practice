import { Page } from "@/layouts/Page";
import { getPageProps } from "@/services/content/getPageProps";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function NextjsPage({
  params: promiseParams,
}: {
  params: { slug: string[] };
}) {
  const params = await promiseParams;
  const slug = params?.slug?.join("/") ?? "home";
  const locale = await getLocale();
  const { is404, page } = await getPageProps(slug, locale);

  if (is404) {
    notFound();
  }

  return page?.sections ? <Page slug={slug} sections={page.sections} /> : <></>;
}
