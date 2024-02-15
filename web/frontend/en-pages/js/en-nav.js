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

// Function to add the English navigation bar at the top of the header tag
function addEnglishNavigationBar() {
    const rootPath = getRootPath();
    const navBarHTML = `
    <nav>
        <ul class='nav-bar'>
            <li class='logo'><a href='${rootPath}en-pages/en-index.html'><img src='${rootPath}img/logo.png' /></a></li>
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a class="pos" href='${rootPath}en-pages/en-index.html'>START</a></li>
                <li><a class="pos" href='${rootPath}en-pages/menu-pages/en-upptack-mer.html'>EXPLORE</a></li>
                <li><a class="pos" href='${rootPath}en-pages/menu-pages/en-kartor.html'>MAPS</a></li>
                <li><a class="pos" href='${rootPath}en-pages/menu-pages/giftcard.html'>GIFTCARD</a></li>
                <li><a class="pos" href='${rootPath}en-pages/menu-pages/en-om-oss.html'>ABOUT US</a></li>
                <li><a class="pos" href='${rootPath}en-pages/menu-pages/en-partners.html'>PARTNERS</a></li>
                <li>
                    <div class="lang-menu2 lang-menu3">
                        <div class="selected-lang selected-lang2" tabindex="0">⌄</div>
                        <ul>
                            <li><a href='${rootPath}index.html' class="en en2"></a></li>
                        </ul>
                    </div>
                </li>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>`;

    // Find the header tag and prepend the navigation bar
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.insertAdjacentHTML('afterbegin', navBarHTML);
    }
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addEnglishNavigationBar);
