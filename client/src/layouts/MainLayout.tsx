import { Header } from "@/component/molecules/header/Header";
import { getLayoutProps } from "@/services/content/getLayoutProps";
import { FunctionComponent, PropsWithChildren } from "react";
import { getLocale } from "next-intl/server";
import { AnnouncementBar } from "@/component/molecules/announcement-bar/AnnouncementBar";

export const MainLayout: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  const locale = await getLocale();

  // HEADER / FOOTER / ANNOUNCMENT BAR ...
  const { header, footer, announcementBar } =
    (await getLayoutProps(locale)) || {};

  return (
    <div className="p-2 md:p-4 flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-col min-h-dvh lg:p-6 xl:p-8">
      {announcementBar?.text && <AnnouncementBar {...announcementBar} />}

      {header && <Header {...header} />}

      <div className="flex-1">{children}</div>

      {footer && <div>Footer here</div>}
    </div>
  );
};
