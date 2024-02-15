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

// Function to add the English footer
function addEnglishFooter() {
    const rootPath = getRootPath();
    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h2>Contact</h2>
                <p>Reningsverksvägen 2, Ängelholm,</p>
                <p>(+46) 70-325 96 38</p>
                <a href="mailto:info@stisses.se">info@stisses.se</a>
            </div>
            <div class="footer-section">
                <h2>Important for us at Stisses</h2>
                <p>We don't work hard just to have satisfied customers. <a href="${rootPath}en-pages/en-index.html#p1-section"><br>Read more here about how we think</a>.</p> <br>
                <p>For us, all children under 10 years paddle for free accompanied by an adult. <a href="${rootPath}en-pages/en-index.html#p1-2-section"><br>Read more about why</a></p> <br>
                <p>We strive for sustainable tourism. <a href="${rootPath}en-pages/en-index.html#p1-3-section"><br>Learn more about what we do and why</a>.</p> <br>
            </div>
            <div class="footer-section und">
                <h2>Follow us</h2>
                <a href="https://www.facebook.com/Stisses/" target="_blank">
                    <img src="${rootPath}img/blackfb.png" alt="Facebook link">
                </a>

                <a href="https://www.tripadvisor.se/UserReviewEdit-g189835-d14930712-Stisses_Kanotuthyrning-Angelholm_Skane_County.html" target="_blank">
                <img src="${rootPath}img/tripadvisorblack.png" alt="Tripadvisor Link">
            </a>
               
                <a href="https://www.instagram.com/stissesfritid/" target="_blank">
                    <img src="${rootPath}img/blackinsta.png" alt="Instagram link">
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
document.addEventListener('DOMContentLoaded', addEnglishFooter);
