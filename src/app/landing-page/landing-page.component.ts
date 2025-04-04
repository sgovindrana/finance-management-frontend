import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  features = [
    {
      title: 'Premium Design',
      description: 'Beautifully designed with modern aesthetics and easy navigation.'
    },
    {
      title: 'Secure Authentication',
      description: 'Strong security features for a safe and secure login and registration.'
    },
    {
      title: 'Responsive Layout',
      description: 'Optimized for both desktop and mobile devices, ensuring a great experience.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
