import React, { useState, useRef, useEffect } from "react";
import "./SnacksBeveragesSection.css";

/* ═══════════════════════════════════════════════════════════════
   4 MEGA TABS
═══════════════════════════════════════════════════════════════ */
const TABS = [
  { id: "namkeen",  icon: "🍿", label: "Namkeen & Snacks",        color: "#ff6b35" },
  { id: "biscuit",  icon: "🍪", label: "Biscuits & Cookies",       color: "#c2855a" },
  { id: "sweets",   icon: "🍬", label: "Indian Sweets & Mithai",   color: "#e91e8c" },
  { id: "drinks",   icon: "🥤", label: "Cold Drinks & Beverages",  color: "#0288d1" },
];

/* ═══════════════════════════════════════════════════════════════
   NAMKEEN & SNACKS — 14 UNIQUE ITEMS
═══════════════════════════════════════════════════════════════ */
const NAMKEEN_ITEMS = [
  {
    id: "nk01", name: "Haldiram's Aloo Bhujia Classic Salty Snack (1 kg)",
    brand: "Haldiram's", tag: "👑 #1 Bestseller",
    price: 249, mrp: 349, discount: 28, rating: 4.9, reviews: "1.2L",
    specs: "🌶️ Classic Recipe · Crunchy Potato Sev · Zero Trans Fat",
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop"
  },
  {
    id: "nk02", name: "Bikaji Navratan Mix Premium Spicy Namkeen (400g)",
    brand: "Bikaji", tag: "🔥 9-Mix Crunch",
    price: 99, mrp: 149, discount: 33, rating: 4.8, reviews: "87K",
    specs: "🌶️ 9 Ingredients Mix · Spicy & Tangy · Rajasthani Recipe",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&auto=format&fit=crop"
  },
  {
    id: "nk03", name: "Bikanervala Panchratan Premium Snack Mix (500g)",
    brand: "Bikanervala", tag: "⭐ Premium Mix",
    price: 149, mrp: 229, discount: 34, rating: 4.8, reviews: "42K",
    specs: "🌰 5-Ingredient Mix · Peanut · Matar · Chana · Dal Moth",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop"
  },
  {
    id: "nk04", name: "Haldiram's Khatta Meetha Tangy Sweet Snack Mix (1 kg)",
    brand: "Haldiram's", tag: "🍋 Khatta Meetha",
    price: 229, mrp: 329, discount: 30, rating: 4.9, reviews: "98K",
    specs: "🍋 Tangy + Sweet · Sev + Peanuts + Raisins · Party Pack",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop"
  },
  {
    id: "nk05", name: "Bikaji Bikaneri Bhujia Authentic Spicy Sev (500g)",
    brand: "Bikaji", tag: "🏆 GI Certified",
    price: 119, mrp: 179, discount: 33, rating: 4.8, reviews: "1.1L",
    specs: "🌶️ GI Certified · Moth Dal Sev · Authentic Bikaner Recipe",
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop"
  },
  {
    id: "nk06", name: "Too Yumm! Multigrain Chilli Chips Baked Not Fried (6 × 30g)",
    brand: "Too Yumm!", tag: "💚 Baked & Healthy",
    price: 99, mrp: 150, discount: 34, rating: 4.7, reviews: "58K",
    specs: "🌾 Baked Not Fried · 40% Less Fat · Whole Grain · Guilt-Free",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&auto=format&fit=crop"
  },
  {
    id: "nk07", name: "Peppy Mexican Chilli Potato Chips Crispy (Pack of 12 × 26g)",
    brand: "Peppy", tag: "🌮 Mexican Crunch",
    price: 169, mrp: 240, discount: 29, rating: 4.7, reviews: "31K",
    specs: "🌶️ Mexican Chilli Seasoning · Extra Crispy · 12-Pack Value",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop"
  },
  {
    id: "nk08", name: "Haldiram's Moong Dal Namkeen Crunchy Lentil Snack (400g)",
    brand: "Haldiram's", tag: "🫛 Lentil Protein",
    price: 89, mrp: 130, discount: 31, rating: 4.8, reviews: "74K",
    specs: "🫛 Moong Dal · High Protein Snack · Crispy Fried Lentils",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop"
  },
  {
    id: "nk09", name: "Lay's American Style Cream & Onion Classic Chips (26g × 24 Pack)",
    brand: "Lay's", tag: "💛 Classic Favourite",
    price: 399, mrp: 576, discount: 30, rating: 4.9, reviews: "2.1L",
    specs: "🧅 Cream & Onion Flavour · Ultra-Thin Crispy · Value Pack 24",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop"
  },
  {
    id: "nk10", name: "Kurkure Masala Munch Triangle Corn Puffs (Pack of 10 × 49g)",
    brand: "Kurkure", tag: "🔶 Masala King",
    price: 329, mrp: 490, discount: 32, rating: 4.8, reviews: "1.5L",
    specs: "🌽 Corn Puff Triangle · Spicy Masala Mix · India's Favourite",
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop"
  },
  {
    id: "nk11", name: "Bikanervala Papdi Atta Crispy Whole Wheat Disc (200g)",
    brand: "Bikanervala", tag: "🫓 Wheat Crisp",
    price: 79, mrp: 120, discount: 34, rating: 4.7, reviews: "22K",
    specs: "🌾 Whole Wheat · No Maida · Ajwain & Jeera · Chat Topping",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop"
  },
  {
    id: "nk12", name: "Godrej Yummiez Masala Mori Puffed Rice Murmura (1 kg)",
    brand: "Godrej Yummiez", tag: "💨 Puffed Rice",
    price: 69, mrp: 110, discount: 37, rating: 4.6, reviews: "18K",
    specs: "💨 Puffed Rice · Masala Flavoured · Low Calorie Light Snack",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&auto=format&fit=crop"
  },
  {
    id: "nk13", name: "Doritos Nacho Cheese Flavoured Tortilla Chips (130g × 6 Pack)",
    brand: "Doritos", tag: "🧀 Nacho Cheese",
    price: 449, mrp: 630, discount: 28, rating: 4.8, reviews: "89K",
    specs: "🧀 Nacho Cheese Dusted · Triangle Tortilla · Imported USA Recipe",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop"
  },
  {
    id: "nk14", name: "Haldiram's Chaat Papri Tangy Mumbai Street Snack (400g)",
    brand: "Haldiram's", tag: "🛺 Street Style",
    price: 109, mrp: 160, discount: 31, rating: 4.8, reviews: "36K",
    specs: "🛺 Mumbai Street Recipe · Tangy Masala · Perfect Chaat Base",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   BISCUITS & COOKIES — 14 UNIQUE ITEMS
═══════════════════════════════════════════════════════════════ */
const BISCUIT_ITEMS = [
  {
    id: "bc01", name: "Parle-G Original Gluco Biscuits Family Pack (1.5 kg)",
    brand: "Parle", tag: "🏆 World's #1",
    price: 89, mrp: 120, discount: 25, rating: 4.9, reviews: "2.4L",
    specs: "🌾 Wheat & Milk · Classic G Biscuit · India's Favourite 80 Years",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc02", name: "Cadbury Oreo Original Vanilla Creme Sandwich Cookies (Pack of 6)",
    brand: "Oreo", tag: "🖤 Twist It!",
    price: 149, mrp: 210, discount: 29, rating: 4.9, reviews: "1.8L",
    specs: "🖤 Chocolate Wafer · Vanilla Creme · Dunk in Milk Tradition",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc03", name: "Britannia Good Day Butter Cashew Cookies (600g)",
    brand: "Britannia", tag: "🥰 Good Day!",
    price: 79, mrp: 115, discount: 31, rating: 4.8, reviews: "96K",
    specs: "🧈 Real Butter · Whole Cashew · Everyday Cookie Classic",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc04", name: "Parle Hide & Seek Bourbon Chocolate Cream Biscuits (12 Packs)",
    brand: "Parle", tag: "🍫 Choco Bourbon",
    price: 169, mrp: 240, discount: 29, rating: 4.8, reviews: "72K",
    specs: "🍫 Dark Chocolate Cream · Embossed Pattern · Rich Cocoa Biscuit",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc05", name: "Britannia Marie Gold Digestive Tea Biscuit (600g Pack)",
    brand: "Britannia", tag: "☕ Tea Partner",
    price: 55, mrp: 80, discount: 31, rating: 4.8, reviews: "1.3L",
    specs: "☕ Light & Crispy · Best with Tea · Low Sugar · Whole Wheat",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc06", name: "McVitie's Digestive Wheatmeal Biscuits (Pack of 3 × 250g)",
    brand: "McVitie's", tag: "🌾 UK Classic",
    price: 199, mrp: 285, discount: 30, rating: 4.9, reviews: "54K",
    specs: "🌾 Whole Wheat Germ · High Fibre · British Recipe 1892 · No HFCS",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc07", name: "Sunfeast Dark Fantasy Choco Fills Luxury Biscuits (300g)",
    brand: "Sunfeast", tag: "✨ Dark Fantasy",
    price: 99, mrp: 145, discount: 31, rating: 4.9, reviews: "1.1L",
    specs: "🍫 Molten Choco Centre Fills · Crisp Shell · Premium Indulgence",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc08", name: "Priyagold Classic Cream Sandwich Biscuits Assorted Flavours (1 kg)",
    brand: "Priyagold", tag: "🎨 Assorted Cream",
    price: 89, mrp: 130, discount: 31, rating: 4.7, reviews: "29K",
    specs: "🌈 Vanilla + Strawberry + Chocolate · Cream-Filled · Value Pack",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc09", name: "Britannia NutriChoice 5 Grain Digestive Oats Biscuit (600g)",
    brand: "Britannia", tag: "💪 Health First",
    price: 109, mrp: 160, discount: 31, rating: 4.8, reviews: "67K",
    specs: "🌾 5 Multigrain · High Fibre · No Cholesterol · Diabetic Friendly",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc10", name: "Lotus Biscoff Caramelised Biscuits Original Belgium (250g)",
    brand: "Lotus Biscoff", tag: "✈️ Flight Favourite",
    price: 249, mrp: 350, discount: 28, rating: 4.9, reviews: "1.4L",
    specs: "🇧🇪 Belgian Caramel · Vegan · Perfect with Coffee · Airline Favourite",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc11", name: "Parle 20-20 Cashew Almond Cookies Premium Gold Pack (600g)",
    brand: "Parle", tag: "🥇 Premium Gold",
    price: 129, mrp: 190, discount: 32, rating: 4.8, reviews: "43K",
    specs: "🥜 Real Cashew + Almond · Buttery Rich · Upmarket Cookie Pack",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc12", name: "Unibic Choco Chip Cookies Crunchy Artisan-Style (500g)",
    brand: "Unibic", tag: "🍪 Artisan Choco",
    price: 149, mrp: 220, discount: 32, rating: 4.8, reviews: "38K",
    specs: "🍫 Real Choco Chips · Soft Centre · Australian Artisan Baker Recipe",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
  {
    id: "bc13", name: "Cadbury Oreo Double Stuff Extra Creme Biscuits (137g × 6)",
    brand: "Oreo", tag: "2× Creme Power",
    price: 229, mrp: 324, discount: 29, rating: 4.9, reviews: "88K",
    specs: "🖤 2× Creme Filling · Chocolate Wafer · Premium Double Stack",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop"
  },
  {
    id: "bc14", name: "Britannia Treat Choco Vanilla Sandwich Biscuits (100g × 12)",
    brand: "Britannia", tag: "🎉 Kids Favourite",
    price: 179, mrp: 252, discount: 28, rating: 4.7, reviews: "51K",
    specs: "🍨 Choco + Vanilla · Kids Party Pack · Fun Embossed Pattern",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   INDIAN SWEETS & MITHAI — 14 UNIQUE ITEMS
═══════════════════════════════════════════════════════════════ */
const SWEETS_ITEMS = [
  {
    id: "sw01", name: "Haldiram's Gulab Jamun Soft Ready-to-Eat in Sugar Syrup (1 kg Tin)",
    brand: "Haldiram's", tag: "🌹 Bestselling Mithai",
    price: 249, mrp: 360, discount: 30, rating: 4.9, reviews: "1.5L",
    specs: "🌹 Soft Khoya Dumplings · Ready-to-Eat · Cardamom Rose Syrup",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw02", name: "Sitara Foods Halawala Rosogolla Rasgulla Premium Bengali (1 kg)",
    brand: "Sitara Foods", tag: "🤍 Bengali Classic",
    price: 199, mrp: 299, discount: 33, rating: 4.8, reviews: "44K",
    specs: "🤍 Soft Chenna Balls · Rose Sugar Syrup · Traditional Bengali Recipe",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw03", name: "Rajbhog Kaju Katli Pure Cashew Mithais Diamond-Cut (500g)",
    brand: "Rajbhog", tag: "💎 Diamond Kaju",
    price: 549, mrp: 799, discount: 31, rating: 4.9, reviews: "38K",
    specs: "🥜 Pure W320 Cashew · Silver Vark Coating · Festive Gift Ready",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw04", name: "Haldiram's Besan Ladoo Classic Gram Flour Sweet (500g)",
    brand: "Haldiram's", tag: "🟡 Festive Ladoo",
    price: 199, mrp: 290, discount: 31, rating: 4.9, reviews: "79K",
    specs: "🟡 Pure Ghee · Roasted Besan · Cardamom Flavoured · No Preservatives",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw05", name: "Mother Dairy Dahi Peda Milk Sweet Pure Cow Milk (400g)",
    brand: "Mother Dairy", tag: "🥛 Milk Peda",
    price: 159, mrp: 240, discount: 33, rating: 4.8, reviews: "27K",
    specs: "🥛 Pure Cow Milk · Cardamom & Pistachio Topping · Soft Texture",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw06", name: "Bengali Sweets Sitara Foods Milk Cake Doodh Ki Barfi (500g)",
    brand: "Sitara Foods", tag: "☕ Milk Cake",
    price: 299, mrp: 449, discount: 33, rating: 4.8, reviews: "19K",
    specs: "🧡 Caramelised Milk · Grain-Textured Burfi · North India Specialty",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw07", name: "Bikanervala Motichoor Ladoo Premium Saffron Royal (500g)",
    brand: "Bikanervala", tag: "🌟 Saffron Royal",
    price: 229, mrp: 340, discount: 32, rating: 4.9, reviews: "51K",
    specs: "🌟 Kesar Saffron · Tiny Boondi Balls · Cardamom + Rose Water",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw08", name: "Rajdhani Pure Ghee Sohan Halwa Karachi Traditional Barfi (500g)",
    brand: "Rajdhani", tag: "🫙 Karachi Halwa",
    price: 349, mrp: 520, discount: 32, rating: 4.8, reviews: "22K",
    specs: "🫙 Cornflour Base · Pure Ghee · Pistachio-Topped · Festive Style",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw09", name: "Anand Sweets Mysore Pak Ghee Richest South Indian Sweet (500g)",
    brand: "Anand Sweets", tag: "🏅 Mysore Pride",
    price: 399, mrp: 599, discount: 33, rating: 4.9, reviews: "16K",
    specs: "🧈 100% Pure Ghee · Besan · Crumbly Texture · Mysore Royal Recipe",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw10", name: "Haldiram's Panjiri Dryfruits Laddoo Winter Superfood (500g)",
    brand: "Haldiram's", tag: "🌿 Winter Health",
    price: 349, mrp: 520, discount: 32, rating: 4.8, reviews: "31K",
    specs: "🌿 Wheat + Dry Fruits + Gond + Ghee · Winter Immunity Superfood",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw11", name: "MTR Gulab Jamun Mix Instant 3-Minute Ready Dessert (175g × 3)",
    brand: "MTR", tag: "⏱️ 3-Min Ready",
    price: 129, mrp: 189, discount: 31, rating: 4.8, reviews: "1.1L",
    specs: "⏱️ Instant Mix · Just Add Water · 3 Minutes Ready · 50 Jamuns",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw12", name: "Bikaji Premium Kaju Barfi Pure Cashew Diamond Burfi (250g)",
    brand: "Bikaji", tag: "💎 Pure Kaju",
    price: 349, mrp: 499, discount: 30, rating: 4.9, reviews: "28K",
    specs: "💎 100% Cashew Paste · Silver Vark · No Artificial Colour",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
  {
    id: "sw13", name: "Ghasitaram's Dry Fruit Modak Ganesh Festival Special (500g)",
    brand: "Ghasitaram's", tag: "🐘 Modak Special",
    price: 599, mrp: 899, discount: 33, rating: 4.9, reviews: "14K",
    specs: "🐘 Kaju + Pista + Almond Filling · Handcrafted · Ganesh Chaturthi",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop"
  },
  {
    id: "sw14", name: "Haldiram's Kheer Kadam Bengali Chhena Sandwich Sweet (500g)",
    brand: "Haldiram's", tag: "🌸 Bengali Fusion",
    price: 289, mrp: 420, discount: 31, rating: 4.8, reviews: "17K",
    specs: "🌸 Sandesh Inside Rasgulla · Saffron Sugar Syrup · Bengali Fusion",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   COLD DRINKS & BEVERAGES — 14 UNIQUE ITEMS
═══════════════════════════════════════════════════════════════ */
const DRINKS_ITEMS = [
  {
    id: "dr01", name: "Coca-Cola Classic Chilled Cold Drink Can (300ml × 24)",
    brand: "Coca-Cola", tag: "🔴 The Real Thing",
    price: 799, mrp: 1152, discount: 30, rating: 4.9, reviews: "2.5L",
    specs: "🔴 Original Cola Formula · Perfect Ice-Cold · Party Pack 24 Cans",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr02", name: "Pepsi Black No Sugar Cola Zero Calorie (2L × 3 Bottles)",
    brand: "Pepsi", tag: "🔵 Zero Sugar",
    price: 249, mrp: 360, discount: 30, rating: 4.8, reviews: "98K",
    specs: "🔵 Zero Sugar · Zero Calories · Max Cola Taste · Diabetic Friendly",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr03", name: "Sprite Lemon-Lime Sparkling Soft Drink Glass Bottle (250ml × 24)",
    brand: "Sprite", tag: "💚 Obey Your Thirst",
    price: 599, mrp: 864, discount: 30, rating: 4.9, reviews: "1.1L",
    specs: "💚 Lemon + Lime · Crystal Clear · No Caffeine · Best Chilled",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr04", name: "Thums Up Toofan Strong Cola Bold Taste (600ml × 12)",
    brand: "Thums Up", tag: "⚡ Toofani Taste",
    price: 539, mrp: 780, discount: 31, rating: 4.9, reviews: "87K",
    specs: "⚡ Strong Bold Cola · Iconic Indian Brand · High Carbonation",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr05", name: "Red Bull Energy Drink Original Austria (250ml × 24 Cans)",
    brand: "Red Bull", tag: "🐂 Gives You Wings",
    price: 2999, mrp: 4320, discount: 30, rating: 4.8, reviews: "1.9L",
    specs: "⚡ Caffeine + Taurine + B-Vitamins · Imported Austria · Energy Boost",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr06", name: "Real Fruit Juice Mixed Fruit No Added Sugar (1L × 6 Tetrapak)",
    brand: "Dabur Real", tag: "🍹 100% Fruit",
    price: 599, mrp: 870, discount: 31, rating: 4.8, reviews: "76K",
    specs: "🍊 Mixed Fruit · No Added Sugar · No Preservatives · Kids Safe",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr07", name: "Mountain Dew Neon Citrus Extreme Rush Soda (600ml × 12)",
    brand: "Mountain Dew", tag: "🟡 Neon Rush",
    price: 539, mrp: 780, discount: 30, rating: 4.8, reviews: "64K",
    specs: "🟡 Citrus Blast · High Caffeine · Neon Yellow · Extreme Sports",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr08", name: "Tropicana Pulpy Orange Premium Fruit Drink (1L × 6 Cartons)",
    brand: "Tropicana", tag: "🍊 Pulpy Best",
    price: 699, mrp: 1020, discount: 31, rating: 4.9, reviews: "1.2L",
    specs: "🍊 Real Orange Pulp · Vitamin C Rich · No Added Colour · Breakfast",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr09", name: "Limca Lemon & Lime Sparkling Nimbu Soda (300ml × 24 Cans)",
    brand: "Limca", tag: "🍋 Lime Fresh",
    price: 749, mrp: 1080, discount: 30, rating: 4.8, reviews: "54K",
    specs: "🍋 Lime + Lemon Sparkling · Best for Summer · Refreshing Light",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr10", name: "Appy Fizz Sparkling Apple Drink Premium Glass Bottle (250ml × 24)",
    brand: "Parle Agro", tag: "🍎 Fizzy Apple",
    price: 699, mrp: 1008, discount: 30, rating: 4.8, reviews: "48K",
    specs: "🍎 Sparkling Apple · Stylish Glass Bottle · Party & Gifting Favourite",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr11", name: "Paper Boat Aamras Mango Pulp Drink Traditional Recipe (200ml × 24)",
    brand: "Paper Boat", tag: "🥭 Nostalgia Drink",
    price: 599, mrp: 864, discount: 30, rating: 4.9, reviews: "91K",
    specs: "🥭 Alphonso Mango Pulp · No Preservatives · Childhood Nostalgia",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr12", name: "Monster Energy Ultra White Zero Sugar Drink (500ml × 12)",
    brand: "Monster Energy", tag: "🤍 Ultra Zero",
    price: 1799, mrp: 2520, discount: 28, rating: 4.8, reviews: "39K",
    specs: "🤍 Zero Sugar · Zero Calorie · B-Vitamins + Taurine · Clean Energy",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
  {
    id: "dr13", name: "Rasna Fruit Fun Mango Orange Lemon Drink Concentrate (750ml × 3)",
    brand: "Rasna", tag: "🌈 Makes 32 Glasses",
    price: 299, mrp: 435, discount: 31, rating: 4.7, reviews: "62K",
    specs: "🌈 3 Flavours Pack · Makes 32 Glasses Each · Budget Family Drink",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop"
  },
  {
    id: "dr14", name: "Fanta Orange Sparkling Soda Can Chilled Party Pack (300ml × 24)",
    brand: "Fanta", tag: "🟠 Orange Fizz",
    price: 799, mrp: 1152, discount: 30, rating: 4.8, reviews: "74K",
    specs: "🟠 Bold Orange Flavour · Sparkling Soda · Party 24-Pack · Chilled",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA MAP
═══════════════════════════════════════════════════════════════ */
const DATA = {
  namkeen: NAMKEEN_ITEMS,
  biscuit: BISCUIT_ITEMS,
  sweets:  SWEETS_ITEMS,
  drinks:  DRINKS_ITEMS,
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
const SnacksBeveragesSection = () => {
  const [activeTab, setActiveTab] = useState("namkeen");
  const cardsRef = useRef(null);

  // Reset scroll on tab switch
  useEffect(() => {
    if (cardsRef.current) cardsRef.current.scrollLeft = 0;
  }, [activeTab]);

  // Auto-rotating carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!cardsRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        cardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const nav = (dir) =>
    cardsRef.current?.scrollBy({ left: dir === "l" ? -320 : 320, behavior: "smooth" });

  const currentTab = TABS.find(t => t.id === activeTab);
  const items = DATA[activeTab] || [];

  return (
    <section className="sbSection" id="snacks-beverages-store">

      {/* ── SECTION HEADER ── */}
      <div className="sbHeader">
        <div className="sbHeaderLeft">
          <span className="sbHeaderChip">🛒 FLIPKART FOOD & BEVERAGES STORE</span>
          <h2 className="sbHeaderTitle">
            {currentTab.icon} {currentTab.label}
          </h2>
          <p className="sbHeaderSub">
            India's favourite brands · Freshness guaranteed · Fast delivery · Up to 35% OFF
          </p>
        </div>
        <div className="sbHeaderRight">
          <div className="sbNavRow">
            <button className="sbNavBtn" onClick={() => nav("l")}>❮</button>
            <span className="sbCountChip">{items.length} Products</span>
            <button className="sbNavBtn" onClick={() => nav("r")}>❯</button>
          </div>
        </div>
      </div>

      {/* ── MEGA TABS ── */}
      <div className="sbTabsBar">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`sbTab ${activeTab === tab.id ? "sbTabActive" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            style={{ "--tabColor": tab.color }}
          >
            <span className="sbTabIcon">{tab.icon}</span>
            <span className="sbTabLabel">{tab.label}</span>
            <span className="sbTabCount">{DATA[tab.id].length} items</span>
          </button>
        ))}
      </div>

      {/* ── 3D PRODUCT CAROUSEL ── */}
      <div className="sbCarousel" ref={cardsRef}>
        {items.map(product => (
          <div key={product.id} className="sbCard">

            {/* IMAGE */}
            <div className="sbCardImgBox" style={{ "--tabColor": currentTab.color }}>
              <img src={product.img} alt="" aria-hidden="true" className="sbCardImg" />
              <span className="sbDiscBadge">-{product.discount}%</span>
              <span className="sbTagBadge">{product.tag}</span>
              <div className="sbCardOverlay">
                <button className="sbOvView">👁 View</button>
                <button className="sbOvBuy">⚡ Buy</button>
              </div>
            </div>

            {/* BODY */}
            <div className="sbCardBody">
              <span className="sbBrand" style={{ color: currentTab.color }}>{product.brand}</span>
              <h4 className="sbTitle">{product.name}</h4>
              <div className="sbSpecs">{product.specs}</div>
              <div className="sbRating">
                <span className="sbStars">★ {product.rating}</span>
                <span className="sbRevs">({product.reviews} reviews)</span>
              </div>
              <div className="sbPrice">
                <span className="sbPriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="sbPriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
                <span className="sbPriceSaved">Save ₹{(product.mrp - product.price).toLocaleString("en-IN")}</span>
              </div>
              <div className="sbDelivery">🚚 Free Delivery · 🔄 Easy Return</div>
              <div className="sbBtns">
                <button className="sbBtnCart">🛒 Add to Cart</button>
                <button className="sbBtnBuy" style={{ background: currentTab.color }}>⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="sbTrustStrip" style={{ "--tabColor": currentTab.color }}>
        <span>🏭 FSSAI Certified Brands</span>
        <span>🚚 Free Delivery on ₹199+</span>
        <span>📦 Secure Freshness Packing</span>
        <span>🔄 7-Day Easy Return</span>
        <span>💳 No Cost EMI Available</span>
        <span>✅ 100% Genuine Products</span>
      </div>

    </section>
  );
};

export default SnacksBeveragesSection;
