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
            <h2 id="linkTO-magazine">Magazines  <span class="material-symbols-outlined">
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
            <h2 id="linkTO-magazine2">Magazines  <span class="material-symbols-outlined">
                auto_stories
                </span>
            </h2>
`
// Adding "2" to indicate mobile since 2 same ids are not permitted
document.getElementById("footer").innerHTML = `
    <div style="font-family: Cochin, Montserrat; background-color: lightGrey; 
    padding: 10px; margin-bottom: 0; margin-left: 0; margin-right: 0;">
    <h3 style="font-family: Cochin, Montserrat;">©Briars and Ivy, 2025</h3>
    <a href="https://www.instagram.com/bhs_briars_and_ivy/?hl=en"><img src="images/insta.png" style="width: 100px; display: block; margin: 0 auto;" title="Instagram"/></a>
    <br>
    </div>
`


// Navbar Navigation Links
document.getElementById("mainLogo").onclick = function() {
    window.location.href = "index.html";
}

document.getElementById("linkTO-submit").onclick = function() {
    window.location.href = "submit.html";
}
document.getElementById("linkTO-magazine").onclick = function() {
    window.location.href = "magazines.html";
}
document.getElementById("linkTO-awards").onclick = function() {
    window.location.href = "awards.html";
}

document.getElementById("linkTO-submit2").onclick = function() {
    window.location.href = "submit.html";
}
document.getElementById("linkTO-magazine2").onclick = function() {
    window.location.href = "magazines.html";
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

if (localStorage.getItem("visited")===null) {
    document.getElementById("aardbei").innerHTML = "<h1>Redirecting...</h1>";
    localStorage.setItem("visited", true);
    window.location.href = "welcome2025.html";
}
