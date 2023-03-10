import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "taskDone",
})
export class TaskDonePipe implements PipeTransform {
  transform(value: Date | boolean): string {
    if (typeof value === "boolean") {
      return "false";
    }
    return value.toLocaleDateString("en-GB");
  }
}
