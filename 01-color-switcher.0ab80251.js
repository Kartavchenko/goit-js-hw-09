!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null,n=!1;function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){n=!0,t.setAttribute("disabled",""),e.removeAttribute("disabled"),o=setInterval(r,1e3),console.log("start change color")})),e.addEventListener("click",(function(){n&&t.removeAttribute("disabled");e.setAttribute("disabled",""),clearInterval(o),console.log("stop change color")}))}();
//# sourceMappingURL=01-color-switcher.0ab80251.js.map