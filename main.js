"use strict";
console.log("MAIN!");

// Also check out session storage here:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp

const stuff ={};

stuff.user={};
stuff.order=[];
stuff.likedItems=[];

const user = {
    name: "Teresa",
    email: "dr.te@g.com",
    zip:12345
}

if(!localStorage.getItem(stuff)){
    populateStorage();
}else{
    getDb();
}

function populateStorage(){
    stuff.user = user;
    const dvbObjtoString = JSON.stringify(stuff);
    localStorage.setItem("stuff", dvbObjtoString);
}

function getDb(){
    const db = localStorage.getItem("stuff");
    const parseDB = JSON.parse(db);
}