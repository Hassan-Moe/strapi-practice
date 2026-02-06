import { IGenPageSectionsDynamicZone, Maybe } from "@/types/IGenTypes";

function renderSectionByType(section: IGenPageSectionsDynamicZone) {
  switch (section.__typename) {
    case "ComponentOrganismsHeroSection":
      return <div>Hero Section</div>;

    case "ComponentMoleculesTextMediaSection":
      return <div>Text Media Section</div>;

    case "ComponentOrganismsCardsSwiperSection":
      return <div>Cards Swiper Section</div>;

    default:
      return <div>{section.__typename} - Unimplemented Section</div>;
  }
}

export const Page: React.FC<{
  sections: Maybe<Maybe<IGenPageSectionsDynamicZone>[]>;
  slug: string;
}> = ({ sections, slug }) => {
  if (!sections || sections.length === 0) {
    return <div>No sections available for this page.</div>;
  }
  return (
    <>
      {sections?.map((section, ix: number) =>
        section && section?.__typename ? (
          <div key={`${slug}-${section.__typename}-${ix}`}>
            {renderSectionByType(section)}
          </div>
        ) : (
          <></>
        ),
      )}
    </>
  );
};
