const products = [
  {
    id: 1,
    name: 'Teléfono',
    category: 'electronica',
    price: 200,
    image:
      'https://th.bing.com/th/id/R.258ae2b952de1297133691a35854c507?rik=hAWaBP%2bOkXGAMA&pid=ImgRaw&r=0'
  },
  {
    id: 2,
    name: 'Camiseta',
    category: 'ropa',
    price: 20,
    image:
      'https://th.bing.com/th/id/OIP.PNN709GJYgtuUyuQAHINpQHaHm?w=198&h=204&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 3,
    name: 'Sofá',
    category: 'hogar',
    price: 500,
    image:
      'https://th.bing.com/th/id/OIP.34gXS__7pqYi5Y68g3d60AHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 4,
    name: 'Laptop',
    category: 'electronica',
    price: 1000,
    image:
      'https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=220&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 5,
    name: 'Pantalones',
    category: 'ropa',
    price: 30,
    image:
      'https://th.bing.com/th/id/OIP.SkP3DpTZGFK4PX60eCnuGQHaJ9?w=204&h=274&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 6,
    name: 'Televisor',
    category: 'electronica',
    price: 300,
    image:
      'https://th.bing.com/th/id/OIP.KgNMttVRJZABGKv9k-a3JQHaGn?w=209&h=187&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 7,
    name: 'Mesa',
    category: 'hogar',
    price: 150,
    image:
      'https://th.bing.com/th/id/OIP.CRlCe-e2X_6ZHUnoeJ6dMgHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 8,
    name: 'Chaqueta',
    category: 'ropa',
    price: 60,
    image:
      'https://th.bing.com/th/id/OIP.SQsU37GQh79G11QTAZKVoQHaKA?w=204&h=275&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 9,
    name: 'Auriculares',
    category: 'electronica',
    price: 80,
    image:
      'https://th.bing.com/th/id/OIP.fbYGCNmgbzw1b0cVNKo7lAHaIa?w=178&h=202&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 10,
    name: 'Zapatos',
    category: 'ropa',
    price: 100,
    image:
      'https://th.bing.com/th/id/OIP.fIThf3aG1O1AVcKkDCeDpQHaHa?w=195&h=196&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 11,
    name: 'Lámpara',
    category: 'hogar',
    price: 40,
    image:
      'https://th.bing.com/th/id/OIP.XKtKEEXoDyV7JWrI34snNAHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 12,
    name: 'Smartwatch',
    category: 'electronica',
    price: 150,
    image:
      'https://th.bing.com/th/id/OIP.00ujnZe-7HxtdZ9qCA3ZowHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 13,
    name: 'Shorts',
    category: 'ropa',
    price: 25,
    image:
      'https://th.bing.com/th/id/OIP.fFmWa8VZnbUw3QfACs8N2gHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 14,
    name: 'Cocina Eléctrica',
    category: 'hogar',
    price: 200,
    image:
      'https://th.bing.com/th/id/OIP.E_TcGa6gU-HO7CdfHKjNIwHaHa?rs=1&pid=ImgDetMain'
  },
  {
    id: 15,
    name: 'Tablet',
    category: 'electronica',
    price: 350,
    image:
      'https://th.bing.com/th/id/OIP.Bin9XqWpiw52DFAu4vK6ngHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 16,
    name: 'Mochila',
    category: 'ropa',
    price: 50,
    image:
      'https://th.bing.com/th/id/OIP.4Dd-PewQ2DCXaToIAAKEfAHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 17,
    name: 'Silla',
    category: 'hogar',
    price: 120,
    image:
      'https://th.bing.com/th/id/OIP.PdOjgMTVTCzrX73xQ24HCgHaHa?w=189&h=190&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 18,
    name: 'Proyector',
    category: 'electronica',
    price: 400,
    image:
      'https://th.bing.com/th/id/OIP.r1_djCAOl4gWwW35t919YAHaD3?w=339&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 19,
    name: 'Gafas de Sol',
    category: 'ropa',
    price: 15,
    image:
      'https://th.bing.com/th/id/OIP.sQq0uIYZM0ELkveSQo3X1QHaDr?w=301&h=173&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 20,
    name: 'Estufa gas',
    category: 'hogar',
    price: 300,
    image:
      'https://th.bing.com/th/id/OIP.uHskv1LlkvP25v7vJgs6TQHaJx?w=151&h=200&c=7&r=0&o=5&pid=1.7'
  }
]
const productList = document.getElementById('productList')
const filtersModal = document.getElementById('filtersModal')
const filtersBtn = document.getElementById('filtersBtn')
const closeModal = document.getElementsByClassName('close')[0]
const applyFiltersBtn = document.getElementById('applyFilters')
const clearFiltersBtn = document.getElementById('clearFilters')
const categorySelect = document.getElementById('category')
const priceInput = document.getElementById('price')

// Función para renderizar productos
const renderProducts = (filteredProducts) => {
  productList.innerHTML = ''

  // Verificar si hay productos filtrados
  if (filteredProducts.length === 0) {
    return // No hay productos para mostrar
  } else {
    filteredProducts.forEach((product) => {
      const productElement = document.createElement('div')
      productElement.className = 'product'
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Categoría: ${product.category}</p>
        <p>Precio: ${product.price}€</p>
        <a href="#comprar" class="buy-link">COMPRAR</a>` // Enlace "COMPRAR" agregado
      productList.appendChild(productElement)
    })
  }
}

// Muestra y oculta el modal de filtros
filtersBtn.onclick = () => {
  filtersModal.style.display = 'block'
}

closeModal.onclick = () => {
  filtersModal.style.display = 'none'
}

window.onclick = (event) => {
  if (event.target === filtersModal) {
    filtersModal.style.display = 'none'
  }
}

// Aplicar filtros
applyFiltersBtn.onclick = () => {
  const selectedCategory = categorySelect.value
  const maxPrice = parseFloat(priceInput.value) || Infinity

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === '' || product.category === selectedCategory) &&
      product.price <= maxPrice // Menor o igual al precio máximo
    )
  })

  renderProducts(filteredProducts)
  filtersModal.style.display = 'none' // Cerrar el modal después de aplicar filtros
}

// Limpiar filtros
clearFiltersBtn.onclick = () => {
  categorySelect.value = ''
  priceInput.value = ''
  renderProducts(products) // Muestra todos los productos
}

// Inicializa la lista de productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products)
})
