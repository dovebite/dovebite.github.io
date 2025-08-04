document.addEventListener("DOMContentLoaded", function () {

  loadLayout();

  // insert
});

function loadLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {


  return `
  
      <header>
        <div class="header-content">
	        <div class="header-title"> </div>  	
        </div>
      </header>

      <aside class="left-sidebar">
	  
	  	<img src="./image/catwink.gif" alt="Black cats are lucky ;3" class="center">
		<p>
		</p>
		<nav>		
		<div class="sidebar-section">
          <div class="sidebar-title">Navigation</div>
          <ul>
		  	<li><a href="./index.html">Take me home</a></li>
            <li><a href="/aboutme.html">About me</a></li>
          </ul>
        </nav>       
		<nav>
        <div class="sidebar-section">
          <div class="sidebar-title">Cool stuff</div>
          <ul>
            <li><a href="/links.html">Links</a></li>
            <li><a href="/music.html">Music</a></li>
          </ul>
		</nav>		
		<nav>
        <div class="sidebar-section">
          <div class="sidebar-title">Come find me</div>
          <ul>    
			<li><a href="https://medium.com/@dovebite" target="_blank">medium</a></li>
            <li><a href="https://www.behance.net/doveofart" target="_blank">behance</a></li>
            <li><a href="https://www.instagram.com/doveafk" target="_blank">instagram - photography</a></li>
			<li><a href="https://www.instagram.com/mooneyedcat" target="_blank">instagram - cat</a></li>
			<li><a href="https://www.pinterest.com/doveirl" target="_blank">pinterest</a></li>
		</nav>
        
        <div class="sidebar-section">
          <img src="./image/meirl.gif" class="center">
		  <p></p>
          <a href="https://ko-fi.com/dovebite" target="_blank"><img src="./image/kofi.gif" alt="my ko-fi link" class="center"></a>
		</div>
      </aside>s
	  
	
      `;
}



function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";


    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {

      if (currentHref.includes(href + "END")) {
        el.classList.add("active");


		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
