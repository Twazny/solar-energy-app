import { trigger, state, style, transition, animate, animateChild, group, query } from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostBinding,
  OnDestroy,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { InsertionDirective } from './insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('overlayFading', [
      state('full', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        group([
          query('@slideIn', animateChild()),
          animate('200ms ease-out')
        ])
      ]),
      transition('* => void', [
        animate(100, style({ opacity: 0 }))
      ])
    ]),
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [style(
        { transform: 'translateY(100%)' }),
      animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild(InsertionDirective) insertion: InsertionDirective
  @HostBinding('@overlayFading') get overlayFading() { return 'full' }

  public componentRef: ComponentRef<any>
  childComponentType: Type<any>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClick(): void {

  }

  onDialogClick(event: MouseEvent): void {
    event.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(componentType);
    const viewContainerRef = this.insertion.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
