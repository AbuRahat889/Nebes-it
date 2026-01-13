export interface Notice {
  id: number;
  title: string;
  noticeType: string;
  position: string;
  publishDate: string;
  status: "PUBLISHED" | "DRAFT" | "UNPUBLISHED";
}
