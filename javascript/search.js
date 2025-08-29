// Define your product data
const products = [
    {
      name: "KKraveBeauty Hemp Cleanser",
      price: "$15",
      image: "photos/cskin1.jpg"
    },
    {
      name: "La Mer Mini Moisturizer",
      price: "$25",
      image: "photos/cskin2.jpg"
    },
    {
      name: "Kiehl’s Ultra Facial Cream",
      price: "$27",
      image: "photos/cskin3.jpg"
    },
    {
      name: "Caudalie Glow Serum",
      price: "$20",
      image: "photos/cskin4.jpg"
    },
    {
      name: "La Roche Foaming Wash",
      price: "$12",
      image: "photos/oily1.jpg"
    },
    {
      name: "The Ordinary Hyaluronic",
      price: "$23",
      image: "photos/oily3.jpg"
    },
    {
        name: "Some By Mi Glow Serum",
        price: "$54",
        image: "photos/oily4.jpg"
      },
      {
        name: "Kiehl’s Creamy Eye Treatment with Avocado",
        price: "$35",
        image: "photos/sensitive1.jpg"
      },
      {
        name: "Soon Jung 5.5 Foam Cleanser by Etude House",
        price: "$10",
        image: "photos/sensitive2.jpg"
      },
      {
        name: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        price: "$6",
        image: "photos/sensitive3.jpg"
      },
      {
        name: "Round Lab 1025 Dokdo Toner for redness",
        price: "$18",
        image: "photos/sensitive4.jpg"
      },
      {
        name: "The Ordinary Natural Moisturizing Factors + HA",
        price: "$7",
        image: "photos/skin4.jpg"
      },
      {
        name: "SKIN1004 Madagascar Centella Toning Toner for acne prone",
        price: "$22",
        image: "photos/skin5.jpg"
      },
      {
        name: "Kiehl’s Creamy Eye Treatment with Avocado",
        price: "$35",
        image: "photos/skin6.jpg"
      },
      {
        name: "Fresh Brown Sugar Body Polish Exfoliator night scrub",
        price: "$45",
        image: "photos/skin7.jpg"
      },
      {
        name: "YSL Lash Clash Extreme Mascara",
        price: "$29",
        image: "photos/b5.jpg"
      },
      {
        name: "Rare Beauty Liquid Foundation",
        price: "20",
        image: "photos/b6.jpg"
      },
      {
        name: "hanel Les 4 Ombres Palette",
        price: "$65",
        image: "photos/b7.jpg"
      },
      {
        name: "Rare Beauty Liquid Blush",
        price: "$23",
        image: "photos/b8.jpg"
      },
      {
      name: "Fenty Beauty Pro Filt’r Powder",
      price: "$34",
      image: "photos/b9.jpg"
    },

    {
      name: "MAC Matte Lipstick (2-Pack",
      price: "$42",
      image: "photos/b10.jpg"
    },
    {
      name: "Reverie Shampoo & Conditioner",
      price: "$72",
      image: "photos/s1.jpg"
    },
    {
      name: "Briogeo Curl Charisma Duo",
      price: "$52",
      image: "photos/s2.jpg"
    },
    {
      name: "OSEA Undaria Body Butter Jar",
      price: "$48",
      image: "photos/s3.jpg"
    },
    {
      name: "Goumi Berry Sugar Body Scrub",
      price: "$18",
      image: "photos/s4.jpg"
    },
    {
      name: "Biossance Marine Cream Jar",
      price: "$52",
      image: "photos/s5.jpg"
    },
    {
      name: "Cardamom Coffee Scrub Jar",
      price: "$16",
      image: "photos/s6.jpg"
    },
    {
      name: "Herbivore Bamboo Charcoal Bar",
      price: "$14",
      image: "photos/s7.jpg"
    },
    {
      name: "Real Sensation Butter Balm",
      price: "$21",
      image: "photos/s8.jpg"
    },
    {
      name: "Nécessaire Body Lotion Jar",
      price: "$28",
      image: "photos/s9.jpg"
    },
    {
      name: "Watermelon Sugar Scrub Jar",
      price: "$16",
      image: "photos/r1.jpg",
    },
    {
      name: "OSEA Body Scrub ",
      price: "$27",
      image: "photos/r2.jpg",
    },
    {
      name: "Gory Scented Sugar Scrub",
      price: "$50",
      image: "photos/r3.jpg"
    },
    {
      name: "Squalane + Marine Algae Eye Cream",
      price: "$17",
      image: "photos/r4.jpg"
    },
    {
      name: "Cardamom + Coffee Body Scrub",
      price: "$24",
      image: "photos/r5.jpg"
    },
    {
      name: "Exfoliating Soap Bars",
      price: "$10",
      image: "photos/r6.jpg"
    },
    {
      name: "CReal Sensation Face Cream",
      price: "$45",
      image: "photos/r7.jpg"
    },
    {
      name: "Body Glow Whipped Cream ",
      price: "$21",
      image: "photos/r8.jpg"
    },
    {
      name: "Watermelon Sugar Body Scrub",
      price: "$27",
      image: "photos/r9.jpg"
    },
    {
      name: "Rare Beauty Setting Spray",
      price: "$32",
      image: "photos/r10.jpg"
    },
    {
      name: "Glow Recipe Watermelon Toner",
      price: "$27",
      image: "photos/r11.jpg"
    },
    {
      name: "Charlotte Tilbury Eyeshadow Palette<",
      price: "$43",
      image: "photos/n1.jpg"
    },
    {
      name: "Fenty Beauty Tinted Moisturizer (Tube)",
      price: "$36",
      image: "photos/n2.jpg"
    },
    {
      name: "Fenty Beauty Foundation (with sponge)",
      price: "$54",
      image: "photos/n3.jpg"
    },
    {
      name: "Chanel Rouge Coco Lipstick",
      price: "$93",
      image: "photos/n4.jpg"
    },
    {
      name: "Huda Beauty Glow Powder",
      price: "$64",
      image: "photos/n5.jpg"
    },
    {
      name: "Nude Eyeshadow Palette",
      price: "$30",
      image: "photos/n6.jpg"
    },
    {
      name: "Dior Highlighter Compact ",
      price: "$80",
      image: "photos/n7.jpg"
    },
    {
      name: "Chanel Vitalumière Foundation ",
      price: "$102",
      image: "photos/n8.jpg"
    },
    {
      name: "Rare Beauty Liquid Concealer",
      price: "$60",
      image: "photos/n9.jpg"
    },
  
  ];
// 🔍 Handle the search input
function handleSearch(inputValue) {
    const keyword = inputValue.toLowerCase();
    const matches = products.filter(product =>
      product.name.toLowerCase().includes(keyword)
    );
  
    if (matches.length > 0) {
      const params = new URLSearchParams();
      params.set("results", JSON.stringify(matches));
      window.location.href = `search.html?${params.toString()}`;
    } else {
      alert("No matching products found.");
    }
  }
  
  // 🚀 When DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".search-box");
  
    if (searchBox) {
      searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          handleSearch(this.value.trim());
        }
      });
    }
  
    // 🧾 Display results if on the search result page
    if (window.location.pathname.includes("search.html")) {
      const params = new URLSearchParams(window.location.search);
      const resultsJSON = params.get("results");
  
      if (resultsJSON) {
        const results = JSON.parse(resultsJSON);
        const container = document.getElementById("resultsContainer");
  
        if (!container) {
          console.error("Missing #resultsContainer in HTML.");
          return;
        }
  
        if (results.length === 0) {
          container.innerHTML = "<p>No results found.</p>";
        } else {
          results.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
              <img src="${product.image}" alt="${product.name}" />
              <h2>${product.name}</h2>
              <p><strong>${product.price}</strong></p>
            `;
            container.appendChild(card);
          });
        }
      }
    }
  });
  
  
  
  

