import { gql } from "@apollo/client";

export const q_footer = gql`
  query q_footer($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      logo
      title
      content
    }
  }
`;
