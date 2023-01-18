import { ListItem } from "@global-models/list-item.model";

// I suppose this is some enum to show in dropdowns (filter, form...)
// and table
export const ENUM_TASK_CATEGORY = {
  HOUSE: "house",
  BUREAUCRACY: "bureaucracy",
} as const;

export const ENUM_TASK_CATEGORY_FILTER = {
  ALL: "all",
  HOUSE: "house",
  BUREAUCRACY: "bureaucracy",
} as const;

export const ARRAY_TASK_CATEGORY: ReadonlyArray<ListItem> = [
  {
    value: ENUM_TASK_CATEGORY.HOUSE,
    viewValue: "House",
  },
  {
    value: ENUM_TASK_CATEGORY.BUREAUCRACY,
    viewValue: "Bureaucracy",
  },
];
export const ARRAY_TASK_CATEGORY_FILTER: ReadonlyArray<ListItem> = [
  {
    value: ENUM_TASK_CATEGORY_FILTER.ALL,
    viewValue: "All",
  },
  ...ARRAY_TASK_CATEGORY,
];
