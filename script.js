"use strict";
//Header section left
const abstractHeader = document.createElement(`a`);
abstractHeader.textContent = `Abstract`;
abstractHeader.href = `#`;
abstractHeader.style.fontWeight = `550`;
abstractHeader.style.fontSize = `24px`;
const helpCenter = document.createElement(`a`);
helpCenter.textContent = `Help Center`;
helpCenter.href = `#`;
const topbarCenter = document.getElementById(`header-help-center`);
abstractHeader.style.borderRight = `2px solid #fff`;
abstractHeader.style.margin = `8px`;
abstractHeader.style.padding = `8px`;
topbarCenter.appendChild(abstractHeader);
topbarCenter.appendChild(helpCenter);

//Header section Right request button
const buttonRequest = document.createElement(`button`);
const buttonLink = document.createElement(`a`);
const link = (buttonLink.href = `#`);
buttonRequest.textContent = `Submit a request`;
buttonRequest.style.padding = `6px 22px`;
buttonRequest.style.fontSize = `24px`;
buttonRequest.style.fontWeight = `400`;
buttonRequest.style.border = `1px solid #fff`;
buttonRequest.style.color = `#fff`;
buttonRequest.style.backgroundColor = `#191a1b`;
buttonRequest.style.borderRadius = `8px`;
buttonRequest.style.position = `right`;
buttonRequest.style.marginRight = `15px`;
buttonRequest.appendChild(buttonLink);

buttonRequest.addEventListener(`click`, function () {
  window.open(link, `_blank`);
});
document.getElementById(`header-sign`).appendChild(buttonRequest);

//Header section Right sign button
const buttonSign = document.createElement(`button`);
buttonSign.textContent = `Sign in`;
const linkSign = (buttonSign.href = `#`);
buttonSign.style.backgroundColor = `#4C5FD5`;
buttonSign.style.color = `#fff`;
buttonSign.style.padding = `6px 22px`;
buttonSign.style.fontSize = `24px`;
buttonSign.style.fontWeight = `400`;
buttonSign.style.border = `1px solid transparent `;
buttonSign.style.borderRadius = `8px `;
buttonSign.style.paddingRight = `32px `;
buttonSign.style.paddingLeft = `32px `;

buttonSign.addEventListener(`click`, function () {
  window.open(linkSign, `_blank`);
});
document.getElementById(`header-sign`).appendChild(buttonSign);

//Nav section SearchBox
const helpTitle = document.createElement(`h1`);
helpTitle.textContent = `How can we help?`;
document.getElementById("help-title").appendChild(helpTitle);

const navSearchBox = document.createElement("input");
navSearchBox.type = "text";
navSearchBox.placeholder = "Search";
navSearchBox.style.padding = "5px";
navSearchBox.style.marginBottom = "10px";
navSearchBox.style.width = "700px";
navSearchBox.style.height = "60px";
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

//Footer Company link
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

  const contactTitle = document.createElement("h6");
  contactTitle.textContent = "Contact Us";
  contactTitle.style.marginTop = " 30px";
  companyContainer.appendChild(contactTitle);

  const contactList = document.createElement("ul");
  companyContainer.appendChild(contactList);

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
createCompanyLinks();
