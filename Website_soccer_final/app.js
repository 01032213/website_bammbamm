const app = () => {
    console.log('DOM Content Loaded')
}

document.addEventListener('DOMContentLoaded', app)

// web component
class HeaderNavbar extends HTMLElement {

    // connect component
    connectedCallback() {
        this.innerHTML = `
        <header>
          <a  href="index.html"><img class="logo" src="./assets/BammBamm logo white.png" alt="Bammbamm logo"></a>
        </header>
        
        <nav>
          <ul>
            <li><a href="games.html">Games</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="stats.html">Stats</a></li>
            <li><a href="history.html">History</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="gallery.html">Gallery</a></li>
          </ul>
        </nav>
        `;
    }

}

class HeaderNavbar2 extends HTMLElement {

    // connect component
    connectedCallback() {
        this.innerHTML = `
        <header>
          <a  href="index.html"><img class="logo" src="../assets/BammBamm logo white.png" alt="Bammbamm logo"></a>
        </header>
        
        <nav>
          <ul>
            <li><a href="../games.html">Games</a></li>
            <li><a href="../team.html">Our Team</a></li>
            <li><a href="../stats.html">Stats</a></li>
            <li><a href="../history.html">History</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../gallery.html">Gallery</a></li>
          </ul>
        </nav>
        `;
    }

}



class Footer extends HTMLElement {

    // connect component
    connectedCallback() {
        this.innerHTML = `
      <footer>
        <p>&copy; 2024 BammBamm. All rights reserved.</p>
      </footer>
      `;
    }

}

// register component
customElements.define('header-navbar', HeaderNavbar);
customElements.define('header-navbar2', HeaderNavbar2);
customElements.define('custom-footer', Footer);