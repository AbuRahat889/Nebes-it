export interface Notice {
  id: number;
  title: string;
  type: string;
  department: string;
  departmentColor: string;
  publishedOn: string;
  status: "Published" | "Unpublished" | "Draft";
  isToggled?: boolean;
}
