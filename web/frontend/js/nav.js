function getRootPath() {
    const pathArray = window.location.pathname.split('/');
    let path = '';

    // Check if the current page is the root index.html
    if (pathArray.length === 3 && pathArray[2] === 'index.html') {
        return './'; // Path for the root index.html
    }

    for (let i = 1; i < pathArray.length - 1; i++) {
        if (pathArray[i] !== 'web' && pathArray[i] !== 'frontend') {
            path += '../';
        }
    }
    return path;
}


// Function to add the navigation bar at the top of the header tag
function addNavigationBar() {
    const rootPath = getRootPath();
    const navBarHTML = `
    <nav>
        <ul class='nav-bar'>
            <li class='logo'><a href='${rootPath}index.html'><img src='${rootPath}img/logo.png' /></a></li>
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a class="pos" href='${rootPath}index.html'>START</a></li>
                <li><a class="pos" href='${rootPath}menu-pages/upptack-mer.html'>UPPTÄCK MER</a></li>
                <li><a class="pos" href='${rootPath}menu-pages/kartor.html'>KARTOR</a></li>
                <li><a class="pos" href='${rootPath}menu-pages/presentkort.html'>PRESENTKORT</a></li>
                <li><a class="pos" href='${rootPath}menu-pages/om-oss.html'>OM OSS</a></li>
                <li><a class="pos" href='${rootPath}menu-pages/partners.html'>PARTNERS</a></li>
                <li>
                    <div class="lang-menu2">
                        <div class="selected-lang" tabindex="0">⌄</div>
                        <ul>
                            <li><a href='${rootPath}en-pages/en-index.html' class="en"></a></li>
                        </ul>
                    </div>
                </li>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>
    `;

    // Find the header tag and prepend the navigation bar
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.insertAdjacentHTML('afterbegin', navBarHTML);
    }
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addNavigationBar);
