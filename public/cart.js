if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')

  for(var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click',  removeCartItem)
  }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < removeCartItemButtons.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

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
            <a href="cart.html">
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
              <a href="#" class="link">Dictionary</a>
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


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
       var price = parseFloat(priceElement.innerText.replace('$', ''))
       var quantity = quantityElement.value
       total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total 
}