import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class EmulatorComponent implements OnInit {
  @Input() lines: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
