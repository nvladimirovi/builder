import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';
import { LayoutService } from 'app/shared/layout/layout.service';

@Component({
  selector: 'app-layout-tools',
  templateUrl: './layout-tools.component.html',
  styleUrls: ['./layout-tools.component.css']
})
export class LayoutToolsComponent implements OnInit {
  public blocks = this.layoutService.blocks;

  constructor(private emailService: EmailService, private layoutService: LayoutService) {}

  ngOnInit() {}
}
