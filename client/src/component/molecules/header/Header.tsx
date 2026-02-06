"use client";
import { IGenHeader } from "@/types/IGenTypes";
import { ITheme } from "@/stores/ui/useThemeStore";
import Button from "@/component/atoms/button/Button";
import { HeaderMobileMenu } from "./mobile-menu/HeaderMobileMenu";
import ThemeToggle from "@/component/atoms/theme-toggle/ThemeToggle";
import { LanguageSwitcher } from "@/component/atoms/language-switcher/LanguageSwitcher";
import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";

type IProps = Pick<IGenHeader, "items" | "logo" | "primaryAction"> & {
  theme: ITheme;
};

export const Header: React.FunctionComponent<IProps> = ({
  items,
  logo,
  primaryAction,
  theme,
}) => {
  return (
    <div className="bg-background-secondary sticky top-0 rounded-full p-1 text-foreground flex items-center justify-between gap-3">
      {logo && <div className="font-bold ms-4">{logo}</div>}

      {items && items?.length > 0 && (
        <div className="max-md:hidden flex gap-2 items-center">
          {items?.map((item) => {
            return item?.label ? (
              <Button
                variant="ghost"
                className="bg-background-tertiary! hover:bg-background/70!  p-1! pe-3!"
                startIcon={
                  item?.startIcon?.url ? (
                    <InlineSvg
                      url={`${process.env.NEXT_PUBLIC_API_URL}${item?.startIcon?.url}`}
                      className="rounded-full size-5"
                    />
                  ) : null
                }
                endIcon={
                  item?.endIcon?.url ? (
                    <InlineSvg
                      url={`${process.env.NEXT_PUBLIC_API_URL}${item?.endIcon?.url}`}
                      className="w-5 h-5"
                    />
                  ) : null
                }
                key={item?.id}
                href={item?.href ?? "#"}
              >
                {item.label}
              </Button>
            ) : (
              <></>
            );
          })}
        </div>
      )}

      <div className="flex bg-background-accent p-1 rounded-full items-center gap-1 max-md:hidden">
        {primaryAction && (
          <Button variant="primary">{primaryAction.label}</Button>
        )}
        <ThemeToggle theme={theme} />
        <LanguageSwitcher />
      </div>

      <HeaderMobileMenu theme={theme} items={items} />
    </div>
  );
};
