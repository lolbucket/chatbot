import { admissionCategoryMessages } from "./admissionCategoryMessages";
import { contactCategoryMessages } from "./contactCategoryMessages";
import { scolarshipCategoryMessages } from "./scolarshipCategoryMessages";

export const allCategories = [
  ...scolarshipCategoryMessages,
  ...admissionCategoryMessages,
  ...contactCategoryMessages,
];
