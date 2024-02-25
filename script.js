"use strict";

//Foteer Abstract Link
const abstractLink1 = document.getElementById(`abstract-link-1`);
const abstractLink2 = document.getElementById(`abstract-link-2`);
const abstractLink3 = document.getElementById(`abstract-link-3`);
const footerBackground = document.getElementById(`footer-help-page`);

footerBackground.style.backgroundColor = `#000000`;
abstractLink1.innerHTML = `<a href="#">Start Trial</a>`;
abstractLink2.innerHTML = `<a href="#">Pricing</a>`;
abstractLink3.innerHTML = `<a href="#">Download</a>`;

//Footer Resources Link
const resourcesLink1 = document.getElementById(`resources-link-1`);
const resourcesLink2 = document.getElementById(`resources-link-2`);
const resourcesLink3 = document.getElementById(`resources-link-3`);
const resourcesLink4 = document.getElementById(`resources-link-4`);

resourcesLink1.innerHTML = `<a href="#">Blog</a>`;
resourcesLink2.innerHTML = `<a href="#">Help Center</a>`;
resourcesLink3.innerHTML = `<a href="#">Release Notes</a>`;
resourcesLink4.innerHTML = `<a href="#">Status</a>`;

//Footer Community link
// const communityTitle = document.createElement("h5");
// communityTitle.textContent = "Community";

// const communityNewList = document.createElement(`ul`);
// document.getElementById("community-link").appendChild(communityTitle);

// const communityList1 = document.createElement(`li`);
// const communityLink1 = document.createElement(`a`);
// communityLink1.textContent = `Twitter`;
// communityLink1.href = `#`;
// communityList1.appendChild(communityLink1);
// communityNewList.appendChild(communityList1);

// const communityList2 = document.createElement(`li`);
// const communityLink2 = document.createElement(`a`);
// communityLink2.textContent = `LinkedIn`;
// communityLink2.href = `#`;
// communityList2.appendChild(communityLink2);
// communityNewList.appendChild(communityList2);

// const communityList3 = document.createElement(`li`);
// const communityLink3 = document.createElement(`a`);
// communityLink3.textContent = `Facebook`;
// communityLink3.href = `#`;
// communityList3.appendChild(communityLink3);
// communityNewList.appendChild(communityList3);

// const communityList4 = document.createElement(`li`);
// const communityLink4 = document.createElement(`a`);
// communityLink4.textContent = `Dribbble`;
// communityLink4.href = `#`;
// communityList4.appendChild(communityLink4);
// communityNewList.appendChild(communityList4);

// const communityList5 = document.createElement(`li`);
// const communityLink5 = document.createElement(`a`);
// communityLink5.textContent = `Podcast`;
// communityLink5.href = `#`;
// communityList5.appendChild(communityLink5);
// communityNewList.appendChild(communityList5);

// document.getElementById("community-link").appendChild(communityNewList);

//Footer Community link
function createCommunityLinks() {
  const communityContainer = document.getElementById("community-link");

  const communityTitle = document.createElement("h5");
  communityTitle.textContent = "Community";
  communityContainer.appendChild(communityTitle);

  const communityList = document.createElement("ul");
  communityContainer.appendChild(communityList);

  const communityLinks = [
    { text: "Twitter", href: "#" },
    { text: "LinkedIn", href: "#" },
    { text: "Facebook", href: "#" },
    { text: "Dribbble", href: "#" },
    { text: "Podcast", href: "#" },
  ];

  communityLinks.forEach((link) => {
    const listItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.href;
    listItem.appendChild(linkElement);
    communityList.appendChild(listItem);
  });
}
createCommunityLinks();

function createCompanyLinks() {
  const companyContainer = document.getElementById("company-link");

  const companyTitle = document.createElement("h5");
  companyTitle.textContent = "Company";
  companyContainer.appendChild(companyTitle);

  const companyList = document.createElement("ul");
  companyContainer.appendChild(companyList);

  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Legal", href: "#" },
  ];

  companyLinks.forEach((link) => {
    const listItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.href;
    listItem.appendChild(linkElement);
    companyList.appendChild(listItem);
  });
}
createCompanyLinks();

function createContactLinks() {
  const contactContainer = document.getElementById("contact-us");

  const contactTitle = document.createElement("h5");
  contactTitle.textContent = "Contact Us";
  contactContainer.appendChild(contactTitle);

  const contactList = document.createElement("ul");
  contactContainer.appendChild(contactList);

  const contactLinks = [{ text: "info@abstract.com", href: "#" }];

  contactLinks.forEach((link) => {
    const listItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.href;
    listItem.appendChild(linkElement);
    contactList.appendChild(listItem);
  });
}
createContactLinks();

// const communityTitle = document.createElement("h5");
// communityTitle.textContent = "Community";

//const communityNewList = document.createElement(`ul`);
// document.getElementById("community-link").appendChild(communityTitle);

const helpTitle = document.createElement(`h1`);
helpTitle.textContent = `How can we help?`;

document.getElementById("help-title").appendChild(helpTitle);

// Yeni bir input (input) öğesi oluştur
const navSearchBox = document.createElement("input");

// Input öğesine özellikler ekle
navSearchBox.type = "text";
navSearchBox.placeholder = "Ara...";

// Input öğesine stil ekle (isteğe bağlı)
navSearchBox.style.padding = "5px";
navSearchBox.style.marginBottom = "10px";
navSearchBox.style.width = "200px";

// Belgeye yeni oluşturulan input öğesini ekle
document.getElementById("container").appendChild(navSearchBox);
