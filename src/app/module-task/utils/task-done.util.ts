import { Nullable } from "@global-models/nullable.type";

// IN my opinion... In this case there is some confusion:
// we should store field DONE in the task as boolean true or false.
// Then it would be perfect  to have  one more field doneTask or dateOfDone.... with type Date| null.
// But types are mixed the boolean with string in wrong format (22-10-2019)
//  and that leads to bunch of checking
export function transformDoneValue(
  value: Nullable<Date | boolean | string>
): Date | boolean {
  if (!value) {
    return false;
  }
  if (isDateValid(value)) {
    return value as Date;
  }
  if (typeof value === "string") {
    return parseDate(value);
  }
  return false;
}

export function isDateValid(date: any): boolean {
  return typeof date === "object" && date?.getTime === "function";
}
export function parseDate(value: string): Date | boolean {
  const array = value.split("-");
  if (
    array.length === 3 &&
    !isNaN(Number(array[2])) &&
    !isNaN(Number(array[1])) &&
    !isNaN(Number(array[0]))
  ) {
    return new Date(Number(array[2]), Number(array[1]) - 1, Number(array[0]));
  }
  return false;
}

export function getStringForData(date: Date): string {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
