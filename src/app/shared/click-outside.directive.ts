import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter();
  documentClickSub!: Subscription;

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    this.documentClickSub = fromEvent(this.document, 'click')
      .pipe(
        filter((event) => {
          return !(
            event.target === this.element.nativeElement ||
            this.element.nativeElement.contains(event.target)
          );
        })
      )
      .subscribe(() => this.clickOutside.emit());
  }

  ngOnDestroy() {
    this.documentClickSub.unsubscribe();
  }
}
