import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ConfirmData } from "@global-models/confirms-data.model";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmData,
    private _dialog: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ok(): void {
    this._dialog.close({ action: "ok" });
  }
  cancel(): void {
    this._dialog.close({ action: "cancel" });
  }
}
