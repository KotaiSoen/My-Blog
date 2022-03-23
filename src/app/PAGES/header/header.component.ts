import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event.target'])

onWindowScroll() {
    let element = document.querySelector('.navigation') as HTMLElement;
    if (window.pageYOffset > 85) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  constructor(private auth: AngularFireAuth, private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.signOut().then(() => this.route.navigate(['login']));
  }
}
