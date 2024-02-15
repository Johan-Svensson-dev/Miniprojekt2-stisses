// Function to dynamically determine the relative path to the root directory
function getRootPath() {
    const pathArray = window.location.pathname.split('/');
    let path = '';
    for (let i = 1; i < pathArray.length - 1; i++) {
        if (pathArray[i] !== 'web' && pathArray[i] !== 'frontend') {
            path += '../';
        }
    }
    return path;
}

// Function to add the footer
function addFooter() {
    const rootPath = getRootPath();
    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h2>Kontakt</h2>
                <p>Reningsverksvägen 2, Ängelholm,</p>
                <p>(+46) 70-325 96 38</p>
                <a href="mailto:info@stisses.se">info@stisses.se</a>
            </div>
            <div class="footer-section">
                <h2>Viktigt för oss som driver Stisses</h2>
                <p>Vi jobbar inte hårt för att få nöjda kunder. <a href="${rootPath}index.html#p1-section"><br>Läs mer här om hur vi tänker</a>.</p> <br>
                <p>Hos oss paddlar alla barn under 10 år gratis i sällskap med vuxen. <a href="${rootPath}index.html#p1-2-section"><br>Läs mer varför</a></p> <br>
                <p>Vi jobbar stenhårt för en hållbar turism. <a href="${rootPath}index.html#p1-3-section"><br>Läs mer vad vi gör och varför</a>.</p> <br>        
            </div>
            <div class="footer-section und">
                <h2>Följ oss</h2>
                <a href="https://www.facebook.com/Stisses/" target="_blank">
                    <img src="${rootPath}img/blackfb.png" alt="Facebook link">
                </a>
                
                <a href="https://www.tripadvisor.se/UserReviewEdit-g189835-d14930712-Stisses_Kanotuthyrning-Angelholm_Skane_County.html" target="_blank">
                    <img src="${rootPath}img/tripadvisorblack.png" alt="Tripadvisor Link">
                </a>
                <a href="https://www.instagram.com/stissesfritid/" target="_blank">
                    <img src="${rootPath}img/blackinsta.png" alt="Instagram link">
                </a>

            </a>
                
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2024 Stisses Sport & Fritid. All rights reserved.</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addFooter);
