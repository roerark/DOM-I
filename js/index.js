const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let links = document.querySelectorAll("nav a")
let i = 1;
links.forEach((item)=>{
  item.textContent = siteContent["nav"][`nav-item-${i}`];
  item.setAttribute("style", "color:green");
  i++;
})

let logoImg = document.getElementById("logo-img")
logoImg.setAttribute("src", siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img")
headerImg.src = "img/header-img.png"

let midImg = document.getElementById("middle-img")
midImg.src = "img/mid-page-accent.jpg"

let ctaTitle = document.querySelector(".cta-text > h1")
ctaTitle.textContent = "DOM is Awesome"

let ctaButton = document.querySelector(".cta-text > button")
ctaButton.textContent = ("Get Started")

let featureTitle = document.querySelector(".main-content > .top-content > .text-content > h4")
featureTitle.textContent = "Features"

let aboutTitle = document.querySelector(".main-content > .top-content > .text-content:nth-child(2) > h4")
aboutTitle.textContent = "About"

let featureP = document.querySelector(".main-content > .top-content > .text-content > p")
featureP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutP = document.querySelector(".main-content > .top-content > .text-content:nth-child(2) > p")
aboutP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let servicesTitle = document.querySelector(".main-content > .bottom-content > .text-content > h4")
servicesTitle.textContent = "Services"

let servicesP = document.querySelector(".main-content > .bottom-content > .text-content > p")
servicesP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let productTitle = document.querySelector(".main-content > .bottom-content > .text-content:nth-child(2) > h4")
productTitle.textContent = "Products"

let productP = document.querySelector(".main-content > .bottom-content > .text-content:nth-child(2) > p")
productP.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let visionTitle = document.querySelector(".main-content > .bottom-content > .text-content:nth-child(3) > h4")
visionTitle.textContent = "Vision"

let visionP = document.querySelector(".main-content > .bottom-content > .text-content:nth-child(3) > p")
visionP.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let contactTitle = document.querySelector(".contact > h4")
contactTitle.textContent = "Contact"

let address = document.querySelector(".contact > p:nth-child(2)")
address.textContent = "123 Way 456 Street Somewhere,USA"

let number = document.querySelector(".contact > p:nth-child(3)")
number.textContent = "1 (888) 888-8888"


let email = document.querySelector(".contact > p:nth-child(4)")
email.textContent = "sales@greatidea.io"

let copyright = document.querySelector("footer p")
copyright.textContent = "Copyright Great Idea! 2018"

let nav = document.querySelector("nav")
let sibling = document.createElement("a")
let append = document.createElement("a")
append.textContent = "Learn"
nav.appendChild(append)
sibling.textContent = "Click"
nav.prepend(sibling)














