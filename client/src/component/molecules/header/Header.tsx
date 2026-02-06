import { LanguageSwitcher } from "@/component/atoms/language-switcher/LanguageSwitcher";
import { IGenHeader } from "@/types/IGenTypes";
import React from "react";

type IProps = Pick<IGenHeader, "items" | "logo" | "primaryAction">;

export const Header: React.FunctionComponent<IProps> = async ({
  items,
  logo,
  primaryAction,
}) => {
  return (
    <div className="bg-gray-50 rounded-full p-4 text-black flex items-center justify-between gap-3">
      {logo && <div className="font-bold">{logo}</div>}

      {items && items?.length > 0 && <div>items</div>}

      {primaryAction && <div>primaryAction</div>}

      <LanguageSwitcher />
    </div>
  );
};
