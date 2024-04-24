const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
function lastModified() {
    const date = new Date(document.lastModified);
    const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC' }); // Adjust timeZone if needed
    return formattedDate;
}
lastMod.textContent = `Last Modification = ${lastModified()}`;