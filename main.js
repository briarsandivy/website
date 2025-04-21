// By using JS to render the navbar, updates are super easy
document.getElementById("navbar").innerHTML = `
            <img src="images/briarsAndIvy.png" id="mainLogo">
            <h3 id="mobileIcon" style="padding-top: 15px; margin-top: 20px;"><span class="material-symbols-outlined" style="font-size: 30px;">
                menu
                </span>
            </h3>
            <h2 id="linkTO-awards">Awards <span class="material-symbols-outlined" style="font-size: 20px;">
                license
                </span>
            </h2>
            <h2 id="linkTO-submit">Submissions <span class="material-symbols-outlined" style="font-size: 20px;">
                publish
                </span>
            </h2>
            <h2 id="linkTO-magazine">2024  <span class="material-symbols-outlined">
                auto_stories
                </span>
            </h2>
`;
document.getElementById("mobileNav").innerHTML = `
            <h2 id="linkTO-awards2">Awards <span class="material-symbols-outlined" style="font-size: 20px;">
                license
                </span>
            </h2>
            <h2 id="linkTO-submit2">Submissions <span class="material-symbols-outlined" style="font-size: 20px;">
                publish
                </span>
            </h2>
            <h2 id="linkTO-magazine2">2024  <span class="material-symbols-outlined">
                auto_stories
                </span>
            </h2>
`
// Adding "2" to indicate mobile since 2 same ids are not permitted
document.getElementById("footer").innerHTML = `
    <h3 style="font-family: Cochin, Montserrat; background-color: lightGrey; 
    padding: 10px; margin-bottom: 0; margin-left: 0; margin-right: 0;">
    ©Briars and Ivy, 2025 | Website design by Luke Joseph
    </h3>
`


// Navbar Navigation Links
document.getElementById("mainLogo").onclick = function() {
    window.location.href = "index.html";
}

document.getElementById("linkTO-submit").onclick = function() {
    window.location.href = "submit.html";
}
document.getElementById("linkTO-magazine").onclick = function() {
    window.location.href = "2024.html";
}
document.getElementById("linkTO-awards").onclick = function() {
    window.location.href = "awards.html";
}

document.getElementById("linkTO-submit2").onclick = function() {
    window.location.href = "submit.html";
}
document.getElementById("linkTO-magazine2").onclick = function() {
    window.location.href = "2024.html";
}
document.getElementById("linkTO-awards2").onclick = function() {
    window.location.href = "awards.html";
}

document.getElementById("mobileIcon").onclick = function() {
    let bar = document.getElementById("mobileNav");
    if (bar.classList.contains("mobileNavON")) {
        bar.classList.remove("mobileNavON");
    }
    else {
        bar.classList.add("mobileNavON");
    }
}