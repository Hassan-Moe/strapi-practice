import { gql } from "@apollo/client";

export const f_media = gql`
  fragment f_media on UploadFile {
    url
    name
    mime
    alternativeText
  }
`;
