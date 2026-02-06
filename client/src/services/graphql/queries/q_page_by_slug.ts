import { gql } from "@apollo/client";
import { f_page } from "./../fragments/f_page";

export const q_page_by_slug = gql`
  ${f_page}

  query q_page_by_slug($locale: I18NLocaleCode, $filters: PageFiltersInput) {
    pages(locale: $locale, filters: $filters) {
      ...f_page
    }
  }
`;
