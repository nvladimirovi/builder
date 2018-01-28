import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';

@Component({
  selector: 'app-layout-tools',
  templateUrl: './layout-tools.component.html',
  styleUrls: ['./layout-tools.component.css']
})
export class LayoutToolsComponent implements OnInit {

  public drag(event) {
    this.emailService.drag(event);
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

}
