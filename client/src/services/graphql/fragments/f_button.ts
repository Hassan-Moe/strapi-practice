import { gql } from "@apollo/client";
import { f_media } from "./f_media";

export const f_button = gql`
  ${f_media}
  fragment f_button on ComponentAtomsButton {
    href
    id
    isNewTab
    label
    ariaLabel
    startIcon {
      ...f_media
    }
    endIcon {
      ...f_media
    }
  }
`;
