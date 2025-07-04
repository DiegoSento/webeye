// Global Variables
let currentSlideIndex = 0
let testimonialIndex = 0
let currentFilter = "all"
const cart = []
const wishlist = []

// Featured Products Data
const featuredProducts = [
  {
    id: 1,
    name: "Sérum Hidratante Facial",
    price: 45000,
    rating: 4.8,
    reviews: 124,
    badge: "Más Vendido",
    badgeClass: "bestseller",
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Base de Maquillaje HD",
    price: 38000,
    rating: 4.6,
    reviews: 89,
    badge: "Nuevo",
    badgeClass: "new",
    category: "maquillaje",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Kit de Manicura Profesional",
    price: 125000,
    rating: 4.9,
    reviews: 67,
    badge: "Más Vendido",
    badgeClass: "bestseller",
    category: "unas",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Shampoo Reparador",
    price: 32000,
    rating: 4.7,
    reviews: 156,
    badge: "",
    badgeClass: "",
    category: "cabello",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Paleta de Sombras Nude",
    price: 68000,
    rating: 4.5,
    reviews: 203,
    badge: "Más Vendido",
    badgeClass: "bestseller",
    category: "maquillaje",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Crema Corporal Hidratante",
    price: 28000,
    rating: 4.4,
    reviews: 98,
    badge: "Nuevo",
    badgeClass: "new",
    category: "corporal",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 7,
    name: "Aceite Facial Nutritivo",
    price: 52000,
    rating: 4.7,
    reviews: 89,
    badge: "",
    badgeClass: "",
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 8,
    name: "Esmalte de Uñas Premium",
    price: 18000,
    rating: 4.3,
    reviews: 78,
    badge: "",
    badgeClass: "",
    category: "unas",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
]

// Testimonials Data
const testimonials = [
  {
    name: "María González",
    role: "Estilista Profesional",
    rating: 5,
    comment:
      "Los productos de ellos y ellas han transformado mi trabajo. La calidad es excepcional y mis clientes siempre quedan satisfechos con los resultados.",
    initial: "M",
  },
  {
    name: "Carlos Rodríguez",
    role: "Peluquero",
    rating: 5,
    comment:
      "Como profesional, necesito productos confiables. Esta marca nunca me ha decepcionado. Altamente recomendada para colegas del sector.",
    initial: "C",
  },
  {
    name: "Ana Martínez",
    role: "Manicurista",
    rating: 5,
    comment:
      "El kit de manicura profesional es increíble. Mis clientas notan la diferencia inmediatamente. Productos de primera calidad.",
    initial: "A",
  },
  {
    name: "Laura Pérez",
    role: "Cliente Frecuente",
    rating: 5,
    comment:
      "Uso sus productos de cuidado facial desde hace meses y mi piel nunca se ha visto mejor. Definitivamente seguiré comprando.",
    initial: "L",
  },
  {
    name: "Roberto Silva",
    role: "Barbero",
    rating: 5,
    comment:
      "Los productos para cabello son fantásticos. Mis clientes siempre preguntan qué uso porque los resultados son visibles.",
    initial: "R",
  },
]

// Search suggestions
const searchSuggestions = [
  "Sérum facial",
  "Base de maquillaje",
  "Kit de manicura",
  "Shampoo",
  "Paleta de sombras",
  "Crema corporal",
  "Aceite facial",
  "Esmalte de uñas",
]

// Import AOS library
const AOS = window.AOS

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.classList.add("hidden")

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, 2000)

  initializeHeroSlider()
  loadFeaturedProducts()
  loadTestimonials()
  initializeSearch()
  initializeFilters()
  initializeMobileMenu()
  initializeScrollEffects()
  updateCartCount()
  updateWishlistCount()

  // Set background images for hero slides
  setHeroBackgrounds()
})

// Hero Slider Functions
function initializeHeroSlider() {
  setInterval(() => {
    changeSlide(1)
  }, 6000)
}

function setHeroBackgrounds() {
  const slides = document.querySelectorAll(".slide")
  slides.forEach((slide) => {
    const bgImage = slide.getAttribute("data-bg")
    if (bgImage) {
      slide.style.backgroundImage = `linear-gradient(135deg, rgba(233, 30, 99, 0.4), rgba(194, 24, 91, 0.3), rgba(233, 30, 99, 0.4)), url(${bgImage})`
      slide.style.backgroundSize = "cover"
      slide.style.backgroundPosition = "center"
      slide.style.backgroundAttachment = "fixed"
    }
  })
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")

  slides[currentSlideIndex].classList.remove("active")
  dots[currentSlideIndex].classList.remove("active")

  currentSlideIndex += direction

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1
  }

  slides[currentSlideIndex].classList.add("active")
  dots[currentSlideIndex].classList.add("active")
}

function currentSlide(index) {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")

  slides[currentSlideIndex].classList.remove("active")
  dots[currentSlideIndex].classList.remove("active")

  currentSlideIndex = index - 1

  slides[currentSlideIndex].classList.add("active")
  dots[currentSlideIndex].classList.add("active")
}

// Products Functions
function loadFeaturedProducts() {
  const productsGrid = document.getElementById("productsGrid")
  productsGrid.innerHTML = ""

  const filteredProducts =
    currentFilter === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === currentFilter)

  filteredProducts.forEach((product, index) => {
    const productCard = createProductCard(product, index)
    productsGrid.appendChild(productCard)
  })

  // Re-initialize AOS for new elements
  AOS.refresh()
}

function createProductCard(product, index) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-aos", "fade-up")
  card.setAttribute("data-aos-delay", (index * 100).toString())

  const stars = generateStars(product.rating)
  const badge = product.badge ? `<div class="product-badge ${product.badgeClass}">${product.badge}</div>` : ""
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  card.innerHTML = `
    <div class="product-image" style="background-image: url('${product.image}');">
      ${badge}
      <button class="wishlist-btn ${isInWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})" title="Agregar a favoritos">
        <i class="fas fa-heart"></i>
      </button>
      <div class="product-overlay">
        <button class="btn-outline" onclick="quickView(${product.id})">Vista Rápida</button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">
        <div class="stars">${stars}</div>
        <span class="rating-text">(${product.reviews})</span>
      </div>
      <div class="product-price">$${product.price.toLocaleString()}</div>
      <button class="add-to-cart" onclick="addToCart(${product.id})">
        <i class="fas fa-shopping-cart"></i>
        Añadir al Carrito
      </button>
    </div>
  `

  return card
}

function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star star"></i>'
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt star"></i>'
    } else {
      stars += '<i class="fas fa-star star empty"></i>'
    }
  }
  return stars
}

function addToCart(productId) {
  const product = featuredProducts.find((p) => p.id === productId)
  if (product) {
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    }
    updateCartCount()
    updateCartSidebar()
    showNotification(`${product.name} agregado al carrito`, "success")

    // Add bounce animation to cart icon
    const cartBtn = document.querySelector(".cart-btn")
    cartBtn.style.animation = "bounce 0.5s ease"
    setTimeout(() => {
      cartBtn.style.animation = ""
    }, 500)
  }
}

function toggleWishlist(productId) {
  const product = featuredProducts.find((p) => p.id === productId)
  if (product) {
    const existingItem = wishlist.find((item) => item.id === productId)
    if (existingItem) {
      const index = wishlist.indexOf(existingItem)
      wishlist.splice(index, 1)
      showNotification(`${product.name} removido de favoritos`, "info")
    } else {
      wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      showNotification(`${product.name} agregado a favoritos`, "success")
    }
    updateWishlistCount()
    loadFeaturedProducts() // Reload to update wishlist buttons
  }
}

function quickView(productId) {
  const product = featuredProducts.find((p) => p.id === productId)
  if (product) {
    showNotification(`Vista rápida de ${product.name} - Funcionalidad próximamente`, "info")
  }
}

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  if (totalItems > 0) {
    cartCount.classList.add("show")
  } else {
    cartCount.classList.remove("show")
  }
}

function updateWishlistCount() {
  const wishlistCount = document.querySelector(".wishlist-count")
  const totalItems = wishlist.length
  wishlistCount.textContent = totalItems

  if (totalItems > 0) {
    wishlistCount.classList.add("show")
  } else {
    wishlistCount.classList.remove("show")
  }
}

// Cart Sidebar Functions
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar")
  const cartOverlay = document.getElementById("cartOverlay")

  cartSidebar.classList.toggle("open")
  cartOverlay.classList.toggle("show")

  if (cartSidebar.classList.contains("open")) {
    updateCartSidebar()
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
}

function updateCartSidebar() {
  const cartItems = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")

  cartItems.innerHTML = ""

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center text-gray-500">Tu carrito está vacío</p>'
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
        <div class="cart-item-image" style="background-image: url('${item.image}');"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toLocaleString()}</div>
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: #e91e63;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `
      cartItems.appendChild(cartItem)
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = `$${total.toLocaleString()}`
}

function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity = newQuantity
    updateCartCount()
    updateCartSidebar()
  }
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId)
  if (index > -1) {
    const product = cart[index]
    cart.splice(index, 1)
    updateCartCount()
    updateCartSidebar()
    showNotification(`${product.name} removido del carrito`, "info")
  }
}

// Add event listener for cart button
document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.querySelector(".cart-btn")
  if (cartBtn) {
    cartBtn.addEventListener("click", (e) => {
      e.preventDefault()
      toggleCart()
    })
  }
})

// Filter Functions
function initializeFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      // Update current filter
      currentFilter = btn.getAttribute("data-filter")

      // Reload products with animation
      const productsGrid = document.getElementById("productsGrid")
      productsGrid.style.opacity = "0"
      productsGrid.style.transform = "translateY(20px)"

      setTimeout(() => {
        loadFeaturedProducts()
        productsGrid.style.opacity = "1"
        productsGrid.style.transform = "translateY(0)"
      }, 300)
    })
  })
}

// Search Functions
function initializeSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchSuggestionsEl = document.getElementById("searchSuggestions")

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim()

      if (query.length > 0) {
        const filtered = searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(query))

        if (filtered.length > 0) {
          searchSuggestionsEl.innerHTML = filtered
            .map(
              (suggestion) =>
                `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`,
            )
            .join("")
          searchSuggestionsEl.classList.add("show")
        } else {
          searchSuggestionsEl.classList.remove("show")
        }
      } else {
        searchSuggestionsEl.classList.remove("show")
      }
    })

    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        searchSuggestionsEl.classList.remove("show")
      }
    })
  }
}

function selectSuggestion(suggestion) {
  const searchInput = document.getElementById("searchInput")
  const searchSuggestionsEl = document.getElementById("searchSuggestions")

  searchInput.value = suggestion
  searchSuggestionsEl.classList.remove("show")

  // Perform search
  showNotification(`Buscando: ${suggestion}`, "info")
}

// Mobile Menu Functions
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active")
      mobileMenu.classList.toggle("show")

      if (mobileMenu.classList.contains("show")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active")
        mobileMenu.classList.remove("show")
        document.body.style.overflow = ""
      })
    })
  }
}

// Scroll Effects
function initializeScrollEffects() {
  const header = document.getElementById("header")
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY

    // Header scroll effect
    if (scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Back to top button
    if (scrollY > 500) {
      backToTop.classList.add("show")
    } else {
      backToTop.classList.remove("show")
    }

    // Parallax effect for hero
    const hero = document.querySelector(".hero")
    if (hero && scrollY < window.innerHeight) {
      hero.style.transform = `translateY(${scrollY * 0.5}px)`
    }
  })
}

// Navigation Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const headerHeight = document.getElementById("header").offsetHeight
    const targetPosition = section.offsetTop - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Update navigation active states
function updateNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  })
}

// Initialize navigation
document.addEventListener("DOMContentLoaded", updateNavigation)

// Testimonials Functions
function loadTestimonials() {
  const testimonialTrack = document.getElementById("testimonialTrack")
  const testimonialDots = document.getElementById("testimonialDots")

  testimonialTrack.innerHTML = ""
  testimonialDots.innerHTML = ""

  testimonials.forEach((testimonial, index) => {
    const testimonialCard = createTestimonialCard(testimonial)
    testimonialTrack.appendChild(testimonialCard)

    // Create dot
    const dot = document.createElement("div")
    dot.className = `testimonial-dot ${index === 0 ? "active" : ""}`
    dot.onclick = () => goToTestimonial(index)
    testimonialDots.appendChild(dot)
  })

  // Auto-rotate testimonials
  setInterval(() => {
    moveTestimonials(1)
  }, 8000)
}

function createTestimonialCard(testimonial) {
  const card = document.createElement("div")
  card.className = "testimonial-card"

  const stars = generateStars(testimonial.rating)

  card.innerHTML = `
    <div class="testimonial-content">
      <div class="testimonial-header">
        <div class="testimonial-avatar">${testimonial.initial}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
          <div class="testimonial-rating">${stars}</div>
        </div>
      </div>
      <p class="testimonial-text">"${testimonial.comment}"</p>
    </div>
  `

  return card
}

function moveTestimonials(direction) {
  const track = document.getElementById("testimonialTrack")
  const dots = document.querySelectorAll(".testimonial-dot")
  const totalTestimonials = testimonials.length

  // Update index
  testimonialIndex += direction

  if (testimonialIndex >= totalTestimonials) {
    testimonialIndex = 0
  } else if (testimonialIndex < 0) {
    testimonialIndex = totalTestimonials - 1
  }

  // Update transform
  const translateX = -testimonialIndex * 100
  track.style.transform = `translateX(${translateX}%)`

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === testimonialIndex)
  })
}

function goToTestimonial(index) {
  const track = document.getElementById("testimonialTrack")
  const dots = document.querySelectorAll(".testimonial-dot")

  testimonialIndex = index
  const translateX = -testimonialIndex * 100
  track.style.transform = `translateX(${translateX}%)`

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === testimonialIndex)
  })
}

// WhatsApp Function
function openWhatsApp() {
  const phoneNumber = "573001234567"
  const message = "Hola! Me interesa conocer más sobre sus productos de belleza."
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// Utility Functions
function showNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = "notification"

  const colors = {
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6",
    warning: "#f59e0b",
  }

  const icons = {
    success: "fas fa-check-circle",
    error: "fas fa-exclamation-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-triangle",
  }

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 350px;
    font-size: 14px;
  `

  notification.innerHTML = `
    <i class="${icons[type]}"></i>
    <span>${message}</span>
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const target = document.getElementById(targetId)
      if (target) {
        const headerHeight = document.getElementById("header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Error handling for failed image loads
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      e.target.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=="
    }
  },
  true,
)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // ESC key to close modals/menus
  if (e.key === "Escape") {
    const cartSidebar = document.getElementById("cartSidebar")
    const mobileMenu = document.getElementById("mobileMenu")
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")

    if (cartSidebar && cartSidebar.classList.contains("open")) {
      toggleCart()
    }

    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenuBtn.classList.remove("active")
      mobileMenu.classList.remove("show")
      document.body.style.overflow = ""
    }
  }

  // Arrow keys for hero slider
  if (e.key === "ArrowLeft") {
    changeSlide(-1)
  } else if (e.key === "ArrowRight") {
    changeSlide(1)
  }
})

// Touch/swipe support for mobile
let touchStartX = 0
let touchEndX = 0

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      changeSlide(1)
    } else {
      // Swipe right - previous slide
      changeSlide(-1)
    }
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Initialize animations on load
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".product-card, .category-card, .look-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effect to buttons
  const buttons = document.querySelectorAll(".btn-primary, .btn-outline")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
    })
  })

  // Add click effect to cards
  const cards = document.querySelectorAll(".product-card, .category-card, .look-card")
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Create ripple effect
      const ripple = document.createElement("div")
      const rect = card.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(233, 30, 99, 0.1);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1;
      `

      card.style.position = "relative"
      card.style.overflow = "hidden"
      card.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

// Add CSS for ripple animation
const style = document.createElement("style")
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Initialize everything when page loads
window.addEventListener("load", () => {
  // Add loaded class to body for any CSS transitions
  document.body.classList.add("loaded")

  // Initialize any remaining functionality
  console.log("🎉 ellos y ellas website loaded successfully!")
})
