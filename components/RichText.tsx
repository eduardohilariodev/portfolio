import { ReactNode } from "react";

// These tags are available
type Tag = "p" | "b" | "i" | "strong";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <div className="prose">
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => (
          <strong className="font-semibold">{chunks}</strong>
        ),
        i: (chunks: ReactNode) => <em className="italic">{chunks}</em>,
        strong: (chunks: ReactNode) => (
          <strong className="font-bold">{chunks}</strong>
        ),
      })}
    </div>
  );
}
