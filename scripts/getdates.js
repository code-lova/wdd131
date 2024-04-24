'use strict';

const currentYear = document.querySelector("#currentyear");

const date = new Date().getFullYear();

currentYear.innerHTML = date;


const lastMod = document.querySelector("#lastModified");

function lastModified(mod){
    mod = formatDate(new Date(document.lastModified));
    return mod;
}

const formatDate = (date) => {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let seconds = ('0' + date.getSeconds()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

lastMod.textContent = `Last Modification= ${lastModified()}`;
