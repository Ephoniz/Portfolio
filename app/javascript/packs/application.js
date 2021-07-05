// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import 'jquery'
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('DOMContentLoaded', (e) => {
  
});

document.addEventListener('turbolinks:load', () => {
  const loading = document.querySelector(".loader-wrapper")

  setTimeout(()=> {
    loading.classList.add('d-none');
  }, 1000)

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener('click', ()=>{
    //Animate Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("imvisible");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");


      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove("open");
          
          links.forEach(link => {
            link.classList.remove("imvisible");
          });
    
          hamburger.classList.remove("toggle");
        });
      })
  });


  const sections = document.querySelectorAll("section")
  
  document.addEventListener('scroll', () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top
      if (top <= 800) {
        section.classList.add('section-transition')
        section.classList.remove('section-hide')

      } else {
        section.classList.add('section-hide')
        section.classList.remove('section-transition')
      }
    });
  });
});
