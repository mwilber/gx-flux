import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { Dialog } from '../../interfaces/dialog';

@Component({
  selector: 'flux-dialog',
  templateUrl: './flux-dialog.component.html',
  styleUrls: ['./flux-dialog.component.css']
})
export class FluxDialogComponent implements OnInit {

  @Input() conversations;
  selectedCharacter: string;
  activeDialog: Dialog;

  constructor() {
    this.selectedCharacter = 'narrator';
    this.activeDialog = null;
  }

  ngOnInit() {
    //this.Refresh();
  }

  ngOnChanges(){
    this.Refresh();
  }

  Refresh(){
    this.activeDialog = this.conversations[this.selectedCharacter];
  }

}
