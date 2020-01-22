import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  menuOpen = false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', el => {
      const sections = document.querySelectorAll('.section');
      const poffY = window.pageYOffset;
      const height = window.innerHeight * 0.3;

      const nav: HTMLElement = document.querySelector('.navigation');
      nav.style.backgroundColor = `rgba(5,5,5,${poffY / 250})`;

      const first: HTMLElement = document.querySelector('.first');
      first.style.backgroundPositionY = `${poffY * -0.3}px`;

      const second: HTMLElement = document.querySelector('.second');
      second.style.backgroundPositionY = `${poffY * -0.3 + height}px`;

      const third: HTMLElement = document.querySelector('.third');
      third.style.backgroundPositionY = `${poffY * -0.3 + height * 3}px`;

      // const scrollIndicator: HTMLElement = document.querySelector(
      //   ".scrollIndicator"
      // );
      // scrollIndicator.style.width = `${(window.pageYOffset /
      //   document.getElementsByTagName("body")[0].clientHeight) *
      //   133.4}%`;
    });
  }

  ngAfterViewInit() {
    this.createObserver();
  }

  createObserver() {
    const sections = document.querySelectorAll('.section');
    let observer;
    const options = {
      root: null,
      rootMargin: '0px'
    };
    observer = new IntersectionObserver(this.handleIntersect, options);
    sections.forEach(myEl => {
      observer.observe(myEl);
    });
  }
  handleIntersect(entries, observer) {
    const prevRatio = 0.1;
    entries.forEach(entry => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.classList.add('fadeIn');
      } else {
        entry.target.classList.remove('fadeIn');
      }
    });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  scrollToElement($element): void {
    this.toggleMenu();

    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
