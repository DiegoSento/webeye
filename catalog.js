// Catalog specific JavaScript
const catalogProducts = [
  {
    id: 1,
    name: "Sérum Hidratante Facial Premium",
    description:
      "Sérum facial con ácido hialurónico y vitamina C. Hidrata profundamente y reduce los signos del envejecimiento.",
    price: 45000,
    rating: 4.8,
    reviews: 124,
    badge: "Más Vendido",
    badgeClass: "bestseller",
    category: "facial",
    inStock: true,
    sku: "SF001",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 2,
    name: "Base de Maquillaje HD Cobertura Total",
    description:
      "Base líquida de alta definición con cobertura total y acabado natural. Resistente al agua y larga duración.",
    price: 38000,
    rating: 4.6,
    reviews: 89,
    badge: "Nuevo",
    badgeClass: "new",
    category: "maquillaje",
    inStock: true,
    sku: "MQ002",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 3,
    name: "Kit de Manicura Profesional Completo",
    description:
      "Kit completo para manicura profesional. Incluye limas, cortaúñas, empujador de cutículas y esmalte base.",
    price: 125000,
    rating: 4.9,
    reviews: 67,
    badge: "Más Vendido",
    badgeClass: "bestseller",
    category: "unas",
    inStock: true,
    sku: "UN003",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 4,
    name: "Shampoo Reparador Keratina",
    description: "Shampoo reparador con keratina natural. Fortalece el cabello dañado y aporta brillo natural.",
    price: 32000,
    rating: 4.7,
    reviews: 156,
    badge: "",
    badgeClass: "",
    category: "cabello",
    inStock: true,
    sku: "CB004",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 5,
    name: "Paleta de Sombras Nude Collection",
    description:
      "Paleta de 12 sombras en tonos nude y tierra. Pigmentación intensa y larga duración. Perfecta para looks naturales.",
    price: 68000,
    rating: 4.5,
    reviews: 203,
    badge: "Agotado",
    badgeClass: "out-of-stock",
    category: "maquillaje",
    inStock: false,
    sku: "MQ005",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 6,
    name: "Crema Corporal Hidratante Coco",
    description:
      "Crema hidratante corporal con extracto de coco y manteca de karité. Nutre y suaviza la piel por 24 horas.",
    price: 28000,
    rating: 4.4,
    reviews: 98,
    badge: "Nuevo",
    badgeClass: "new",
    category: "corporal",
    inStock: true,
    sku: "CO006",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 7,
    name: "Limpiador Facial Suave Espuma",
    description: "Gel limpiador facial que se transforma en espuma suave. Elimina impurezas sin resecar la piel.",
    price: 35000,
    rating: 4.6,
    reviews: 145,
    badge: "",
    badgeClass: "",
    category: "facial",
    inStock: true,
    sku: "SF007",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 8,
    name: "Esmalte de Uñas Premium Larga Duración",
    description: "Esmalte de uñas de alta calidad con tecnología de secado rápido. Disponible en 15 colores vibrantes.",
    price: 18000,
    rating: 4.3,
    reviews: 78,
    badge: "",
    badgeClass: "",
    category: "unas",
    inStock: true,
    sku: "UN008",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  },
]

// Catalog state
let filteredCatalogProducts = [...catalogProducts]
let currentView = "grid"
let currentSort = "featured"
let currentFilters = {
  categories: [],
  priceRanges: [],
  availability: ["in-stock"],
  search: "",
}

// Global variables
const catalogCart = JSON.parse(localStorage.getItem("catalogCart")) || []
const catalogWishlist = JSON.parse(localStorage.getItem("catalogWishlist")) || []

// Import AOS library
// const AOS = window.AOS

// Initialize catalog when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing catalog...") // Debug

  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.classList.add("hidden")
    }

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      })
    }
  }, 1500)

  // Inicializar inmediatamente sin esperar
  initializeCatalog()
  loadCatalogProducts()
  initializeCatalogFilters()
  initializeCatalogSearch()
  initializeViewToggle()
  initializeSortSelect()
  initializeScrollEffects()
  initializeMobileMenu()
  updateCatalogCartCount()
  updateCatalogWishlistCount()

  console.log("Catalog initialization complete") // Debug
})

function initializeCatalog() {
  // Check URL parameters for category filter
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("categoria")
  if (category) {
    currentFilters.categories = [category]
    // Check the corresponding checkbox
    const checkbox = document.querySelector(`input[name="category"][value="${category}"]`)
    if (checkbox) {
      checkbox.checked = true
    }
  }
}

function loadCatalogProducts() {
  console.log("Loading products...") // Debug
  const productsContainer = document.getElementById("productsContainer")
  const resultsCount = document.getElementById("resultsCount")
  const noResults = document.getElementById("noResults")

  console.log("Products container:", productsContainer) // Debug
  console.log("Catalog products:", catalogProducts) // Debug

  if (!productsContainer) {
    console.error("Products container not found!")
    return
  }

  // Apply filters
  applyFilters()

  console.log("Filtered products:", filteredCatalogProducts) // Debug

  // Clear container
  productsContainer.innerHTML = ""
  productsContainer.className = `products-container ${currentView}-view`

  if (filteredCatalogProducts.length === 0) {
    if (noResults) noResults.style.display = "block"
    if (resultsCount) resultsCount.textContent = "No se encontraron productos"
    return
  }

  if (noResults) noResults.style.display = "none"
  if (resultsCount)
    resultsCount.textContent = `Mostrando ${filteredCatalogProducts.length} de ${catalogProducts.length} productos`

  // Create product cards
  filteredCatalogProducts.forEach((product, index) => {
    const productCard = createCatalogProductCard(product, index)
    productsContainer.appendChild(productCard)
  })

  // Re-initialize AOS for new elements
  if (window.AOS) {
    window.AOS.refresh()
  }
}

function createCatalogProductCard(product, index) {
  const card = document.createElement("div")
  card.className = `product-card ${currentView}-view`
  card.setAttribute("data-aos", "fade-up")
  card.setAttribute("data-aos-delay", (index * 50).toString())

  const stars = generateStars(product.rating)
  const badge = product.badge ? `<div class="product-badge ${product.badgeClass}">${product.badge}</div>` : ""
  const isInWishlist = catalogWishlist.some((item) => item.id === product.id)
  const mainImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : "https://via.placeholder.com/300x300?text=Sin+Imagen"

  // Generate image preview dots
  const imagePreviewDots =
    product.images && product.images.length > 1
      ? product.images
          .map((_, index) => `<div class="image-preview-dot ${index === 0 ? "active" : ""}"></div>`)
          .join("")
      : ""

  if (currentView === "grid") {
    card.innerHTML = `
      <div class="product-image-container" onclick="openImageModal(${product.id})">
        <div class="product-image" style="background-image: url('${mainImage}');">
          ${badge}
          <button class="wishlist-btn ${isInWishlist ? "active" : ""}" onclick="event.stopPropagation(); toggleCatalogWishlist(${product.id})" title="Agregar a favoritos">
            <i class="fas fa-heart"></i>
          </button>
          <div class="product-overlay">
            <button class="btn-outline">Ver Imágenes</button>
          </div>
          ${imagePreviewDots ? `<div class="product-images-preview">${imagePreviewDots}</div>` : ""}
        </div>
      </div>
      <div class="product-info">
        <div class="product-sku">SKU: ${product.sku}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-price">$${product.price.toLocaleString()}</div>
        <button class="add-to-cart" onclick="addToCatalogCart(${product.id})" ${!product.inStock ? "disabled" : ""}>
          <i class="fas fa-shopping-cart"></i>
          ${product.inStock ? "Añadir al Carrito" : "Agotado"}
        </button>
      </div>
    `
  } else {
    card.innerHTML = `
      <div class="product-image-container" onclick="openImageModal(${product.id})">
        <div class="product-image" style="background-image: url('${mainImage}');">
          ${badge}
          <button class="wishlist-btn ${isInWishlist ? "active" : ""}" onclick="event.stopPropagation(); toggleCatalogWishlist(${product.id})" title="Agregar a favoritos">
            <i class="fas fa-heart"></i>
          </button>
          ${imagePreviewDots ? `<div class="product-images-preview">${imagePreviewDots}</div>` : ""}
        </div>
      </div>
      <div class="product-info">
        <div class="product-sku">SKU: ${product.sku}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="rating-text">(${product.reviews} reseñas)</span>
        </div>
        <div class="product-price">$${product.price.toLocaleString()}</div>
        <div class="product-actions">
          <button class="add-to-cart" onclick="addToCatalogCart(${product.id})" ${!product.inStock ? "disabled" : ""}>
            <i class="fas fa-shopping-cart"></i>
            ${product.inStock ? "Añadir al Carrito" : "Agotado"}
          </button>
          <button class="view-details-btn" onclick="openImageModal(${product.id})">
            Ver Imágenes
            <i class="fas fa-images"></i>
          </button>
        </div>
      </div>
    `
  }

  return card
}

function applyFilters() {
  filteredCatalogProducts = catalogProducts.filter((product) => {
    // Search filter
    if (currentFilters.search && !product.name.toLowerCase().includes(currentFilters.search.toLowerCase())) {
      return false
    }

    // Category filter
    if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) {
      return false
    }

    // Price range filter
    if (currentFilters.priceRanges.length > 0) {
      const matchesPrice = currentFilters.priceRanges.some((range) => {
        switch (range) {
          case "0-25000":
            return product.price < 25000
          case "25000-50000":
            return product.price >= 25000 && product.price <= 50000
          case "50000-100000":
            return product.price >= 50000 && product.price <= 100000
          case "100000+":
            return product.price > 100000
          default:
            return true
        }
      })
      if (!matchesPrice) return false
    }

    // Availability filter
    if (currentFilters.availability.length > 0) {
      const inStock = product.inStock
      const showInStock = currentFilters.availability.includes("in-stock")
      const showOutOfStock = currentFilters.availability.includes("out-of-stock")

      if (!((inStock && showInStock) || (!inStock && showOutOfStock))) {
        return false
      }
    }

    return true
  })

  // Apply sorting
  applySorting()
}

function applySorting() {
  switch (currentSort) {
    case "price-low":
      filteredCatalogProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredCatalogProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredCatalogProducts.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      filteredCatalogProducts.sort((a, b) => b.id - a.id)
      break
    default:
      // Featured - keep original order
      break
  }
}

function initializeCatalogFilters() {
  // Filter toggle for mobile
  const filterToggleBtn = document.getElementById("filterToggleBtn")
  const filtersSidebar = document.getElementById("filtersSidebar")

  if (filterToggleBtn && filtersSidebar) {
    filterToggleBtn.addEventListener("click", () => {
      filtersSidebar.classList.toggle("show")
    })
  }

  // Category filters
  const categoryCheckboxes = document.querySelectorAll('input[name="category"]')
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        currentFilters.categories.push(e.target.value)
      } else {
        currentFilters.categories = currentFilters.categories.filter((cat) => cat !== e.target.value)
      }
      loadCatalogProducts()
    })
  })

  // Price filters
  const priceCheckboxes = document.querySelectorAll('input[name="price"]')
  priceCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        currentFilters.priceRanges.push(e.target.value)
      } else {
        currentFilters.priceRanges = currentFilters.priceRanges.filter((price) => price !== e.target.value)
      }
      loadCatalogProducts()
    })
  })

  // Availability filters
  const availabilityCheckboxes = document.querySelectorAll('input[name="availability"]')
  availabilityCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        currentFilters.availability.push(e.target.value)
      } else {
        currentFilters.availability = currentFilters.availability.filter((avail) => avail !== e.target.value)
      }
      loadCatalogProducts()
    })
  })

  // Clear filters
  const clearFiltersBtn = document.getElementById("clearFiltersBtn")
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", clearAllFilters)
  }
}

function initializeCatalogSearch() {
  const searchInput = document.getElementById("catalogSearchInput")
  if (searchInput) {
    let searchTimeout
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        currentFilters.search = e.target.value
        loadCatalogProducts()
      }, 300)
    })
  }
}

function initializeViewToggle() {
  const viewBtns = document.querySelectorAll(".view-btn")
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      viewBtns.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      // Update current view
      currentView = btn.getAttribute("data-view")

      // Reload products with new view
      loadCatalogProducts()
    })
  })
}

function initializeSortSelect() {
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value
      loadCatalogProducts()
    })
  }
}

function clearAllFilters() {
  // Reset filters
  currentFilters = {
    categories: [],
    priceRanges: [],
    availability: ["in-stock"],
    search: "",
  }

  // Reset form elements
  document.querySelectorAll('input[name="category"]').forEach((cb) => (cb.checked = false))
  document.querySelectorAll('input[name="price"]').forEach((cb) => (cb.checked = false))
  document.querySelectorAll('input[name="availability"]').forEach((cb) => {
    cb.checked = cb.value === "in-stock"
  })

  const searchInput = document.getElementById("catalogSearchInput")
  if (searchInput) searchInput.value = ""

  // Reset sort
  currentSort = "featured"
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) sortSelect.value = "featured"

  // Reload products
  loadCatalogProducts()
}

// Cart functions
function addToCatalogCart(productId) {
  const product = catalogProducts.find((p) => p.id === productId)
  if (product && product.inStock) {
    const existingItem = catalogCart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      catalogCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      })
    }

    // Save to localStorage
    localStorage.setItem("catalogCart", JSON.stringify(catalogCart))

    updateCatalogCartCount()
    updateCartSidebar()
    showNotification(`${product.name} agregado al carrito`, "success")

    // Add bounce animation to cart icon
    const cartBtn = document.querySelector(".cart-btn")
    if (cartBtn) {
      cartBtn.classList.add("bounce-animation")
      setTimeout(() => {
        cartBtn.classList.remove("bounce-animation")
      }, 600)
    }
  }
}

function toggleCatalogWishlist(productId) {
  const product = catalogProducts.find((p) => p.id === productId)
  if (product) {
    const existingItem = catalogWishlist.find((item) => item.id === productId)
    if (existingItem) {
      const index = catalogWishlist.indexOf(existingItem)
      catalogWishlist.splice(index, 1)
      showNotification(`${product.name} removido de favoritos`, "info")
    } else {
      catalogWishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
      showNotification(`${product.name} agregado a favoritos`, "success")
    }

    // Save to localStorage
    localStorage.setItem("catalogWishlist", JSON.stringify(catalogWishlist))

    updateCatalogWishlistCount()
    loadCatalogProducts() // Reload to update wishlist buttons
  }
}

function quickView(productId) {
  const product = catalogProducts.find((p) => p.id === productId)
  if (product) {
    showNotification(`Vista rápida de ${product.name} - Funcionalidad próximamente`, "info")
  }
}

// Utility functions
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

function updateCatalogCartCount() {
  const cartCount = document.querySelector(".cart-count")
  if (cartCount) {
    const totalItems = catalogCart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems

    if (totalItems > 0) {
      cartCount.classList.add("show")
    } else {
      cartCount.classList.remove("show")
    }
  }
}

function updateCatalogWishlistCount() {
  const wishlistCount = document.querySelector(".wishlist-count")
  if (wishlistCount) {
    const totalItems = catalogWishlist.length
    wishlistCount.textContent = totalItems

    if (totalItems > 0) {
      wishlistCount.classList.add("show")
    } else {
      wishlistCount.classList.remove("show")
    }
  }
}

function updateCartSidebar() {
  const cartItems = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")

  if (!cartItems || !cartTotal) return

  cartItems.innerHTML = ""

  if (catalogCart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Tu carrito está vacío</p>'
  } else {
    catalogCart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.style.cssText = "display: flex; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0;"
      cartItem.innerHTML = `
        <div class="cart-item-image" style="background-image: url('${item.image}'); width: 60px; height: 60px; border-radius: 8px; background-size: cover; background-position: center;"></div>
        <div class="cart-item-info" style="flex: 1; margin-left: 15px;">
          <div class="cart-item-name" style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">${item.name}</div>
          <div class="cart-item-price" style="color: #e91e63; font-weight: 600; margin-bottom: 5px;">$${item.price.toLocaleString()}</div>
          <div class="cart-item-controls" style="display: flex; align-items: center; gap: 10px;">
            <button class="quantity-btn" onclick="updateCatalogCartQuantity(${item.id}, ${item.quantity - 1})" style="width: 25px; height: 25px; border: 1px solid #e5e7eb; background: white; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px;">-</button>
            <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCatalogCartQuantity(${item.id}, ${item.quantity + 1})" style="width: 25px; height: 25px; border: 1px solid #e5e7eb; background: white; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px;">+</button>
            <button class="quantity-btn" onclick="removeFromCatalogCart(${item.id})" style="width: 25px; height: 25px; border: 1px solid #e5e7eb; background: white; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-left: 10px; color: #e91e63;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `
      cartItems.appendChild(cartItem)
    })
  }

  const total = catalogCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = `$${total.toLocaleString()}`
}

function updateCatalogCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCatalogCart(productId)
    return
  }

  const item = catalogCart.find((item) => item.id === productId)
  if (item) {
    item.quantity = newQuantity
    localStorage.setItem("catalogCart", JSON.stringify(catalogCart))
    updateCatalogCartCount()
    updateCartSidebar()
  }
}

function removeFromCatalogCart(productId) {
  const index = catalogCart.findIndex((item) => item.id === productId)
  if (index > -1) {
    const product = catalogCart[index]
    catalogCart.splice(index, 1)
    localStorage.setItem("catalogCart", JSON.stringify(catalogCart))
    updateCatalogCartCount()
    updateCartSidebar()
    showNotification(`${product.name} removido del carrito`, "info")
  }
}

// Cart sidebar toggle
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar")
  const cartOverlay = document.getElementById("cartOverlay")

  if (cartSidebar && cartOverlay) {
    cartSidebar.classList.toggle("open")
    cartOverlay.classList.toggle("show")

    if (cartSidebar.classList.contains("open")) {
      updateCartSidebar()
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
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

// Mobile menu functions
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

// Scroll effects
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
  })
}

// Navigation functions
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// WhatsApp function
function openWhatsApp() {
  const phoneNumber = "573001234567"
  const message = "Hola! Me interesa conocer más sobre sus productos de belleza."
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// Notification function
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

// Category filter from dropdown
document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll("[data-category]")
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const category = e.currentTarget.getAttribute("data-category")

      // Clear existing filters
      clearAllFilters()

      // Set category filter
      currentFilters.categories = [category]

      // Check the corresponding checkbox
      const checkbox = document.querySelector(`input[name="category"][value="${category}"]`)
      if (checkbox) {
        checkbox.checked = true
      }

      // Reload products
      loadCatalogProducts()

      // Scroll to catalog section
      const catalogSection = document.getElementById("catalog")
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
})

// Dynamic title functionality
let titleIndex = 0
const titles = [
  {
    title: "Catálogo de Productos",
    subtitle: "Descubre nuestra amplia selección de productos de belleza y cuidado personal",
  },
  { title: "Belleza para Todos", subtitle: "Productos de alta calidad para realzar tu belleza natural" },
  { title: "Cuidado Personal Premium", subtitle: "Tu bienestar es nuestra prioridad, encuentra todo lo que necesitas" },
  { title: "Innovación en Belleza", subtitle: "Las últimas tendencias y tecnologías en productos de belleza" },
  { title: "Ellos y Ellas Beauty", subtitle: "Donde la belleza se encuentra con la calidad y el estilo" },
]

function updateDynamicTitle() {
  const titleElement = document.getElementById("dynamicTitle")
  const subtitleElement = document.getElementById("dynamicSubtitle")

  if (titleElement && subtitleElement) {
    // Animación de salida
    titleElement.style.transform = "translateY(-20px)"
    titleElement.style.opacity = "0"
    subtitleElement.style.transform = "translateY(20px)"
    subtitleElement.style.opacity = "0"

    setTimeout(() => {
      titleElement.textContent = titles[titleIndex].title
      subtitleElement.textContent = titles[titleIndex].subtitle

      // Animación de entrada
      titleElement.style.transform = "translateY(0)"
      titleElement.style.opacity = "1"
      subtitleElement.style.transform = "translateY(0)"
      subtitleElement.style.opacity = "1"

      titleIndex = (titleIndex + 1) % titles.length
    }, 500)
  }
}

// Image modal functionality
let currentImageIndex = 0
let currentProductImages = []

function openImageModal(productId, startIndex = 0) {
  const product = catalogProducts.find((p) => p.id === productId)
  if (!product || !product.images) return

  currentProductImages = product.images
  currentImageIndex = startIndex

  const modal = document.getElementById("imageModal")
  const carouselImages = document.getElementById("carouselImages")
  const carouselDots = document.getElementById("carouselDots")

  // Clear existing content
  carouselImages.innerHTML = ""
  carouselDots.innerHTML = ""

  // Add images
  currentProductImages.forEach((image, index) => {
    const img = document.createElement("img")
    img.src = image
    img.alt = `${product.name} - Imagen ${index + 1}`
    img.className = "carousel-image"
    carouselImages.appendChild(img)

    // Add dots
    const dot = document.createElement("div")
    dot.className = `carousel-dot ${index === currentImageIndex ? "active" : ""}`
    dot.onclick = () => goToImage(index)
    carouselDots.appendChild(dot)
  })

  updateCarousel()
  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeImageModal() {
  const modal = document.getElementById("imageModal")
  modal.classList.remove("show")
  document.body.style.overflow = ""
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length
  updateCarousel()
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentProductImages.length
  updateCarousel()
}

function goToImage(index) {
  currentImageIndex = index
  updateCarousel()
}

function updateCarousel() {
  const carouselImages = document.getElementById("carouselImages")
  const dots = document.querySelectorAll(".carousel-dot")

  carouselImages.style.transform = `translateX(-${currentImageIndex * 100}%)`

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentImageIndex)
  })
}

// Start dynamic title rotation
setInterval(updateDynamicTitle, 5000)

// Función para crear partículas dinámicas
function createFloatingParticles() {
  const catalogSection = document.querySelector(".catalog-section")
  const particles = ["✨", "💫", "🌟", "⭐", "💎", "🔮", "💖", "🌸"]

  setInterval(() => {
    const particle = document.createElement("div")
    particle.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 10}px;
      color: rgba(233, 30, 99, ${Math.random() * 0.5 + 0.2});
      pointer-events: none;
      z-index: 1;
      left: ${Math.random() * 100}%;
      top: 100%;
      animation: floatUp 4s linear forwards;
    `
    particle.textContent = particles[Math.floor(Math.random() * particles.length)]

    catalogSection.appendChild(particle)

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 4000)
  }, 2000)
}

// Agregar estilos para la animación de partículas
const particleStyles = document.createElement("style")
particleStyles.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`
document.head.appendChild(particleStyles)

// Función para animar las tarjetas al hacer scroll
function animateCardsOnScroll() {
  const cards = document.querySelectorAll(".product-card")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animation = `cardFadeIn 0.6s ease-out ${index * 0.1}s both`
          }, index * 100)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  cards.forEach((card) => observer.observe(card))
}

// Función para efectos de hover mejorados en las tarjetas
function enhanceCardHoverEffects() {
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".product-card")) {
      const card = e.target.closest(".product-card")
      card.style.transform = "translateY(-15px) scale(1.02) rotateX(5deg)"

      // Efecto de brillo
      const shimmer = document.createElement("div")
      shimmer.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: shimmer 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
      `
      card.style.position = "relative"
      card.appendChild(shimmer)

      setTimeout(() => {
        if (shimmer.parentNode) {
          shimmer.parentNode.removeChild(shimmer)
        }
      }, 600)
    }
  })

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".product-card")) {
      const card = e.target.closest(".product-card")
      card.style.transform = "translateY(0) scale(1) rotateX(0deg)"
    }
  })
}

// Agregar estilos para el efecto shimmer
const shimmerStyles = document.createElement("style")
shimmerStyles.textContent = `
  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`
document.head.appendChild(shimmerStyles)

// Función para crear ondas en el fondo
function createBackgroundWaves() {
  const waves = document.createElement("div")
  waves.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 25% 25%, rgba(233, 30, 99, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%);
    animation: waveMove 10s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  `

  const catalogSection = document.querySelector(".catalog-section")
  catalogSection.appendChild(waves)
}

const waveStyles = document.createElement("style")
waveStyles.textContent = `
  @keyframes waveMove {
    0%, 100% {
      transform: translateX(0) translateY(0) scale(1);
    }
    33% {
      transform: translateX(30px) translateY(-20px) scale(1.1);
    }
    66% {
      transform: translateX(-20px) translateY(30px) scale(0.9);
    }
  }
`
document.head.appendChild(waveStyles)

// Inicializar todas las funciones dinámicas
document.addEventListener("DOMContentLoaded", () => {
  // Crear partículas flotantes
  setTimeout(createFloatingParticles, 2000)

  // Crear ondas de fondo
  createBackgroundWaves()

  // Mejorar efectos de hover
  enhanceCardHoverEffects()

  // Animar tarjetas al hacer scroll
  setTimeout(animateCardsOnScroll, 1000)
})
