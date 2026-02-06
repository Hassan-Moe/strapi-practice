import RichTextRenderer from "@/component/atoms/rich-text-renderer/RichTextRenderer";
import { IGenAnnouncementBar } from "@/types/IGenTypes";

type AnnouncementBarProps = Pick<IGenAnnouncementBar, "text">;

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ text }) => {
  if (!text) return null;

  return (
    <div className="text-center py-2">
      <RichTextRenderer content={text} />
    </div>
  );
};
