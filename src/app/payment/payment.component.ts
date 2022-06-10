import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private dialog: MatDialog,
              public langs: LanguagesService) { }

  ngOnInit(): void {
    this.dialog.open(AlertDialogComponent)
  }

}
