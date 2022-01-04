import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-hoverable-text',
  templateUrl: './hoverable-text.component.html',
  styleUrls: ['./hoverable-text.component.sass'],
})
export class HoverableTextComponent implements OnInit {
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
