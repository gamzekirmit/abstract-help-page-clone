"use strict";

//Foteer Abstract Link
const abstractLink1 = document.getElementById(`abstract-link-1`);
const abstractLink2 = document.getElementById(`abstract-link-2`);
const abstractLink3 = document.getElementById(`abstract-link-3`);
const footerBackground = document.getElementById(`footer-help-page`);

//footerBackground.style.backgroundColor = `#000000`;
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
const communityTitle = document.createElement("h5");
communityTitle.textContent = "Community";

const communityNewList = document.createElement(`ul`);
document.getElementById("community-link").appendChild(communityTitle);

const communityList1 = document.createElement(`li`);
const communityLink1 = document.createElement(`a`);
communityLink1.textContent = `Twitter`;
communityLink1.href = "https://help.abstract.com/hc/en-us";
communityList1.appendChild(communityLink1);
communityNewList.appendChild(communityList1);

const communityList2 = document.createElement(`li`);
const communityLink2 = document.createElement(`a`);

const communityList3 = document.createElement(`li`);
const communityList4 = document.createElement(`li`);
const communityList5 = document.createElement(`li`);

document.getElementById("community-link").appendChild(communityNewList);
