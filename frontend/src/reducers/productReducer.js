import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  RECOMMENDATION_REQUEST,
  RECOMMENDATION_SUCCESS,
  RECOMMENDATION_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

const defaultSampleProducts = [
  // --- SmartPhones ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c001",
    name: "Apple iPhone 15 Pro Max (256GB - Natural Titanium)",
    description: "Forged in titanium with A17 Pro chip, 48MP main camera with 5x Telephoto zoom.",
    price: 134900,
    ratings: 4.8,
    category: "SmartPhones",
    Stock: 15,
    numOfReviews: 1240,
    images: [{ url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c002",
    name: "Samsung Galaxy S24 Ultra 5G (Titanium Gray)",
    description: "Galaxy AI powered flagship with Snapdragon 8 Gen 3, 200MP camera.",
    price: 129999,
    ratings: 4.7,
    category: "SmartPhones",
    Stock: 20,
    numOfReviews: 980,
    images: [{ url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c003",
    name: "OnePlus 12 5G (16GB RAM, 512GB Storage)",
    description: "Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, 100W SUPERVOOC.",
    price: 69999,
    ratings: 4.6,
    category: "SmartPhones",
    Stock: 25,
    numOfReviews: 750,
    images: [{ url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c101",
    name: "Google Pixel 8 Pro 5G (12GB RAM, 256GB)",
    description: "Tensor G3 processor with Google AI, 50MP triple camera.",
    price: 93999,
    ratings: 4.6,
    category: "SmartPhones",
    Stock: 18,
    numOfReviews: 620,
    images: [{ url: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Laptop ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c004",
    name: "Apple MacBook Pro M3 Max (16-inch, 36GB RAM)",
    description: "Mind-blowing M3 Max chip with 14-core CPU and Liquid Retina XDR display.",
    price: 249900,
    ratings: 4.9,
    category: "Laptop",
    Stock: 10,
    numOfReviews: 540,
    images: [{ url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c005",
    name: "ASUS ROG Strix G16 Gaming Laptop (Intel i9, RTX 4070)",
    description: "16-inch QHD+ 240Hz Nebula display, Intel Core i9-14900HX.",
    price: 164990,
    ratings: 4.6,
    category: "Laptop",
    Stock: 12,
    numOfReviews: 320,
    images: [{ url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c006",
    name: "Dell XPS 15 OLED Touch Laptop (Intel i7, 32GB RAM)",
    description: "3.5K OLED Touch Display, 13th Gen Intel Core i7, RTX 4060 GPU.",
    price: 189990,
    ratings: 4.7,
    category: "Laptop",
    Stock: 8,
    numOfReviews: 290,
    images: [{ url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Camera ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c007",
    name: "Sony Alpha ILCE-7M4 Full-Frame Mirrorless Camera",
    description: "33MP BSI CMOS sensor, 4K 60p video, real-time Eye AF.",
    price: 214990,
    ratings: 4.8,
    category: "Camera",
    Stock: 8,
    numOfReviews: 410,
    images: [{ url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c008",
    name: "Canon EOS R6 Mark II Mirrorless Camera Body",
    description: "24.2MP full-frame sensor, 40 fps burst shooting, 4K 60p video.",
    price: 209990,
    ratings: 4.9,
    category: "Camera",
    Stock: 6,
    numOfReviews: 280,
    images: [{ url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Footwear ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c009",
    name: "Nike Air Jordan 1 Retro High OG Sneakers",
    description: "Iconic high-top leather sneakers with Air-Sole cushioning.",
    price: 16995,
    ratings: 4.9,
    category: "Footwear",
    Stock: 25,
    numOfReviews: 2150,
    images: [{ url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c010",
    name: "Adidas Ultraboost Light Running Shoes",
    description: "Ultralight BOOST cushioning with Continental Rubber outsole.",
    price: 11999,
    ratings: 4.7,
    category: "Footwear",
    Stock: 30,
    numOfReviews: 840,
    images: [{ url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c011",
    name: "Asian Shoes Wonder-13 Mesh Running Shoes",
    description: "Breathable mesh upper with EVA shock-absorbing sole.",
    price: 999,
    ratings: 4.3,
    category: "Footwear",
    Stock: 80,
    numOfReviews: 5400,
    images: [{ url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Attire ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c012",
    name: "Royal Enfield Urban Hiker Armoured Riding Jacket",
    description: "CORDURA high-density fabric, Knox Level 2 CE armours.",
    price: 8500,
    ratings: 4.8,
    category: "Attire",
    Stock: 15,
    numOfReviews: 640,
    images: [{ url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c013",
    name: "Manyavar Men's Royal Silk Blend Kurta Pyjama Set",
    description: "Traditional designer jacquard weave kurta with mandarin collar.",
    price: 4999,
    ratings: 4.8,
    category: "Attire",
    Stock: 30,
    numOfReviews: 1120,
    images: [{ url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c014",
    name: "Raymond Men's Charcoal Grey Wool Blend Suit",
    description: "Slim fit tailored suit blazer and trousers crafted with wool blend.",
    price: 14999,
    ratings: 4.8,
    category: "Attire",
    Stock: 12,
    numOfReviews: 510,
    images: [{ url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Bottom ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c015",
    name: "Levi's 501 Original Fit Straight Denim Jeans",
    description: "The original straight-leg blue denim jeans with button fly.",
    price: 3499,
    ratings: 4.5,
    category: "Bottom",
    Stock: 50,
    numOfReviews: 1580,
    images: [{ url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c016",
    name: "Wrangler Men's Regular Fit Stretch Cargo Pants",
    description: "Durable cotton stretch cargo trousers with multiple pockets.",
    price: 2499,
    ratings: 4.4,
    category: "Bottom",
    Stock: 40,
    numOfReviews: 690,
    images: [{ url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Tops ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c017",
    name: "Biba Women's Printed Cotton Anarkali Kurta Set",
    description: "100% pure breathable cotton flared Anarkali kurta.",
    price: 3599,
    ratings: 4.7,
    category: "Tops",
    Stock: 35,
    numOfReviews: 870,
    images: [{ url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c018",
    name: "FabIndia Pure Handloom Chanderi Silk Saree",
    description: "Handcrafted lightweight Chanderi silk saree with zari border.",
    price: 6990,
    ratings: 4.9,
    category: "Tops",
    Stock: 18,
    numOfReviews: 430,
    images: [{ url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c019",
    name: "Zara Oversized Premium Cotton Hooded Sweatshirt",
    description: "Ultra-soft heavy fleece hoodie with relaxed drop shoulder fit.",
    price: 2990,
    ratings: 4.6,
    category: "Tops",
    Stock: 35,
    numOfReviews: 420,
    images: [{ url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Appliances ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c020",
    name: "Prestige Iris 750W Mixer Grinder with 4 Jars",
    description: "Heavy duty 750-watt motor, wet grinding, chutney jar.",
    price: 3299,
    ratings: 4.5,
    category: "Appliances",
    Stock: 45,
    numOfReviews: 2890,
    images: [{ url: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c117",
    name: "Samsung 55-inch Crystal 4K Vivid Pro Smart TV",
    description: "4K Upscaling, Crystal Processor 4K, Motion Xcelerator.",
    price: 44990,
    ratings: 4.8,
    category: "Appliances",
    Stock: 15,
    numOfReviews: 3210,
    images: [{ url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80" }],
  },

  // --- Beauty ---
  {
    _id: "64f1a2b3c4d5e6f7a8b9c023",
    name: "L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum",
    description: "Intense hydration serum for radiant, glowing skin.",
    price: 999,
    ratings: 4.7,
    category: "Beauty",
    Stock: 60,
    numOfReviews: 3410,
    images: [{ url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80" }],
  },
  {
    _id: "64f1a2b3c4d5e6f7a8b9c024",
    name: "Kama Ayurveda Kumkumadi Beauty Fluid Night Serum",
    description: "100% Ayurvedic night serum for radiant and glowing skin.",
    price: 3195,
    ratings: 4.8,
    category: "Beauty",
    Stock: 30,
    numOfReviews: 890,
    images: [{ url: "https://images.unsplash.com/photo-1608248597261-e4d990f14d87?w=800&auto=format&fit=crop&q=80" }],
  },
];

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS: {
      let fetchedProducts = action.payload.products;

      if (!fetchedProducts || fetchedProducts.length === 0) {
        fetchedProducts = defaultSampleProducts;
      }

      return {
        loading: false,
        products: fetchedProducts,
        productsCount: action.payload.productsCount || 100000,
        resultPerPage: action.payload.resultPerPage || 12,
        filteredProductsCount: action.payload.filteredProductsCount || fetchedProducts.length,
      };
    }

    case ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCT_FAIL:
    case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload && action.payload._id ? action.payload : defaultSampleProducts[0],
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        product: defaultSampleProducts[0],
        error: null,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const recommendationsReducer = (
  state = { recommendations: [] },
  action
) => {
  switch (action.type) {
    case RECOMMENDATION_REQUEST:
      return {
        loading: true,
        recommendations: [],
      };
    case RECOMMENDATION_SUCCESS:
      return {
        loading: false,
        recommendations: action.payload,
      };
    case RECOMMENDATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

