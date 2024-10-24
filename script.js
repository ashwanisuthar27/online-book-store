const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light")
      searchToggle = document.querySelector(".searchToggle"),

// js code toggle dark and light
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
      });

// js code toggle search box
      searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      })

