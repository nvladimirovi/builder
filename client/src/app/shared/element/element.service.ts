import { Injectable } from "@angular/core";
import { EmailService } from "../email/email.service";

interface ElementProps {
	alt: string,
	tagName: string,
	src: string
}

@Injectable()
export class ElementService {
	private _element_props: ElementProps;

  	constructor(private emailService: EmailService) {
  	}
}