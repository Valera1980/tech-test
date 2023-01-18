import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { PageNotFoundComponent } from "./page-not-found.component";

describe("PageNotFoundComponent", () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should has text", () => {
    const element = fixture.debugElement.query(By.css(".not-found__title"));
    expect(element.nativeElement.innerText).toEqual("404");
  });
  it("should has sub text", () => {
    const element = fixture.debugElement.query(By.css(".not-found__msg"));
    expect(element.nativeElement.innerText).toEqual("The page doesn't exist");
  });
});
