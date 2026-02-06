import { f_button } from "../fragments/f_button";
import { gql } from "@apollo/client";

export const q_header = gql`
  ${f_button}

  query q_header($locale: I18NLocaleCode) {
    header(locale: $locale) {
      logo
      items {
        ...f_button
      }
      primaryAction {
        ...f_button
      }
    }
  }
`;
