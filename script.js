"use strict";
//Header section left
const abstractHeader = document.createElement(`a`);
abstractHeader.textContent = `Abstract`;
abstractHeader.href = `#`;
const helpCenter = document.createElement(`a`);
helpCenter.textContent = `Help Center`;
helpCenter.href = `#`;
const topbarCenter = document.getElementById(`header-help-center`);
abstractHeader.style.borderRight = `3px solid #fff`;
abstractHeader.style.margin = `8px`;
abstractHeader.style.padding = `8px`;
topbarCenter.appendChild(abstractHeader);
topbarCenter.appendChild(helpCenter);

//Header section Right request button
const buttonRequest = document.createElement(`button`);
const buttonLink = document.createElement(`a`);
const link =
  (buttonLink.href = `https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support`);
buttonRequest.textContent = `Submit a request`;
buttonRequest.style.width = `200px`;
buttonRequest.style.height = `50px`;
buttonRequest.style.border = `1px solid #fff`;
buttonRequest.style.color = `#fff`;
buttonRequest.style.backgroundColor = `#191a1b`;
buttonRequest.style.borderRadius = `8px`;
buttonRequest.style.position = `right`;
buttonRequest.appendChild(buttonLink);

buttonRequest.addEventListener(`click`, function () {
  window.open(link, `_blank`);
});
document.getElementById(`header-sign`).appendChild(buttonRequest);
/////////////
//////////////////
///////////////
///////////////////

//Header section Right sign button
const buttonSign = document.createElement(`button`);
buttonSign.textContent = `Sign in`;
buttonSign.style.backgroundColor = `#4C5FD5`;
buttonSign.style.color = `#fff`;
buttonSign.style.paddingLeft = `32px`;
buttonSign.style.paddingRight = `32px`;
buttonSign.style.border = `1px solid transparent `;
buttonSign.style.borderRadius = `8px `;
buttonSign.style.width = `150px `;
buttonSign.style.height = `50px `;
buttonSign.style.marginLeft = `50px `;
buttonSign.style.position = `relative `;
document.getElementById(`header-sign`).appendChild(buttonSign);

///////////////////////
/////////////////
////////////////
////////////
//Nav section
const helpTitle = document.createElement(`h1`);
helpTitle.textContent = `How can we help?`;
document.getElementById("help-title").appendChild(helpTitle);

const navSearchBox = document.createElement("input");
navSearchBox.type = "text";
navSearchBox.placeholder = "Search";
navSearchBox.style.padding = "5px";
navSearchBox.style.marginBottom = "10px";
navSearchBox.style.width = "600px";
navSearchBox.style.border = `1px solid #000`;
navSearchBox.style.borderRadius = `4px`;
navSearchBox.style.boxShadow = "0 9px 14px 0 rgba(0, 0, 0, 0.1)";
document.getElementById("nav-search").appendChild(navSearchBox);

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
    const listCommunity = document.createElement("li");
    const linkCommunity = document.createElement("a");
    linkCommunity.textContent = link.text;
    linkCommunity.href = link.href;
    listCommunity.appendChild(linkCommunity);
    communityList.appendChild(listCommunity);
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
    const listCompany = document.createElement("li");
    const linkCompany = document.createElement("a");
    linkCompany.textContent = link.text;
    linkCompany.href = link.href;
    listCompany.appendChild(linkCompany);
    companyList.appendChild(listCompany);
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
    const listContact = document.createElement("li");
    const linkContact = document.createElement("a");
    linkContact.textContent = link.text;
    linkContact.href = link.href;
    listContact.appendChild(linkContact);
    contactList.appendChild(listContact);
  });
}
createContactLinks();
