document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  
  let currentDropdown  
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header-left">
        <div class="header-left-top">
          <a href="index.html" class="header-index">
              <img src="assets/logo.png" class="lpl-logo" alt="LifePulse Labs logo">
          </a>
        </div>
        <div class="header-left-bot">
          <p>Your Life, Our Pulse</p>
        </div>
      </div>
      <div class="header-right">
        <div class="header-right-top">
          <a href="store">
            <img src="assets/cart.png" class="header-cart" alt="shopping cart">
          </a>
        </div>
        <div class="header-right-bottom">
          <div class="dropdown" data-dropdown>
            <button class="link" data-dropdown-button>Cyberware</button>
            <div class="dropdown-menu information-grid">
              <nav class="dropdown-heading">
                <nav class="dropdown-links">Operating Systems</nav>
                <a target="_blank" href="test.html" class="droplink">Biotech</a>
                <a href="#" class="droplink">Rippler</a>
                <a href="#" class="droplink">Netdriver</a>      
              </nav>
              <nav class="dropdown-heading">
                <nav class="dropdown-links">Optics</nav>
                <a href="#" class="droplink">Oracle</a>
                <a href="#" class="droplink">Sentry</a>
                <a href="#" class="droplink">Doomsayer</a>
              </nav>
              <nav class="dropdown-heading">
                <nav class="dropdown-links">Arms</nav>
                <a href="#" class="droplink">MaxTac</a>
                <a href="#" class="droplink">Monowire</a>
                <a href="#" class="droplink">Gorilla</a>
              </nav>
              <nav class="dropdown-heading">
                <nav class="dropdown-links">Legs</nav>
                <a href="#" class="droplink">Lynx</a>
                <a href="#" class="droplink">Cyber</a>
                <a href="#" class="droplink">Bionic</a>
              </nav>
              <nav class="dropdown-heading">
                <nav class="dropdown-links">Bio Systems</nav>
                <a href="#" class="droplink">BioMonitor</a>
                <a href="#" class="droplink">Nano-Plating</a>
                <a href="#" class="droplink">Adreno-Trigger</a>
              </nav>
            </div>
            <a href="https://github.com/HostinsVi/LifePulseLabs" class="link">About</a>
            <div class="dropdown second-dropdown" data-dropdown>
              <button class="link" data-dropdown-button>Trace Ripper</button>
              <div class="dropdown-menu">
                <form class="trace-form">
                  <label for="email">DataPacket(email)</label>
                  <input type="email" name="email" id="email">
                  <label for="password">Ripperdoc(any name)</label>
                  <input type="password" name="password" id="password">
                  <button type="submit">Ping Doc</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>  
    </footer>
    `;
  }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

