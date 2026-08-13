import React, { useState, useEffect } from "react";
import "./ForYouHubView.css";

const ForYouHubView = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 47, seconds: 33 });
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [activeBrandModal, setActiveBrandModal] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  const heroBanners = [
    {
      title: "BIG BILLION DAYS",
      subtitle: "Up to 80% OFF on Laptops, TVs & Gadgets",
      badge: "⚡ LIVE NOW",
      bankOffer: "💳 Extra 10% off on SBI Cards",
      bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=550&auto=format&fit=crop",
      accentColor: "#00f5d4"
    },
    {
      title: "SMARTPHONES FEST",
      subtitle: "Exchange & save ₹3,000 + No Cost EMI",
      badge: "🔥 HOT DEALS",
      bankOffer: "💳 HDFC ₹5,000 Instant Cashback",
      bg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=550&auto=format&fit=crop",
      accentColor: "#fcb045"
    },
    {
      title: "FASHION WEEK SALE",
      subtitle: "Min. 50% OFF on Zara, Nike & Top Brands",
      badge: "🌟 TRENDING",
      bankOffer: "🚚 Free Express Delivery + 30-Day Return",
      bg: "linear-gradient(135deg, #005c97 0%, #363795 100%)",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=550&auto=format&fit=crop",
      accentColor: "#a8edea"
    }
  ];

  const [activeBanner, setActiveBanner] = useState(0);
  const [showMegaSaleModal, setShowMegaSaleModal] = useState(false);

  // Live Notification State
  const [liveUserCount, setLiveUserCount] = useState(54230);
  const [liveNotificationIndex, setLiveNotificationIndex] = useState(0);

  const notifications = [
    `🔥 ${liveUserCount.toLocaleString()} users are shopping the Mega Sale right now!`,
    `🛍️ Someone in Mumbai just bought an iPhone 15 Pro Max`,
    `⏱️ Hurry! Flash Sale discounts end in a few hours`,
    `🎁 1,240 people claimed their Daily Mystery Reward`,
    `💸 Mega Drop: Extra 10% Off on SBI Cards applied!`
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveBanner(p => (p + 1) % heroBanners.length), 4000);
    return () => clearInterval(t);
  }, [heroBanners.length]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setLiveUserCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3500);
    const notificationInterval = setInterval(() => {
      setLiveNotificationIndex(prev => (prev + 1) % notifications.length);
    }, 4500);
    return () => {
      clearInterval(countInterval);
      clearInterval(notificationInterval);
    };
  }, [notifications.length]);

  const flashSaleItems = [
    { name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: "₹1,29,999", oldPrice: "₹1,34,999", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop", discount: "5%" },
    { name: "Apple iPhone 15 Pro Max", brand: "Apple", price: "₹1,44,900", oldPrice: "₹1,59,900", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop", discount: "9%" },
    { name: "Google Pixel 8 Pro", brand: "Google", price: "₹1,06,999", oldPrice: "₹1,14,999", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop", discount: "7%" },
    { name: "OnePlus 12 5G", brand: "OnePlus", price: "₹64,999", oldPrice: "₹69,999", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop", discount: "7%" },
    { name: "Xiaomi 14 Ultra", brand: "Xiaomi", price: "₹99,999", oldPrice: "₹1,19,999", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop", discount: "16%" },
    { name: "Vivo X100 Pro", brand: "Vivo", price: "₹89,999", oldPrice: "₹99,999", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop", discount: "10%" },
    { name: "Nothing Phone (2)", brand: "Nothing", price: "₹39,999", oldPrice: "₹49,999", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop", discount: "20%" },
    { name: "Motorola Edge 50 Pro", brand: "Motorola", price: "₹31,999", oldPrice: "₹41,999", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop", discount: "23%" },
  ];

  const trendingCategories = [
    { name: "Smartphones", icon: "📱", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop", offer: "Up to 40% Off" },
    { name: "Fashion", icon: "👗", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&auto=format&fit=crop", offer: "Min. 50% Off" },
    { name: "Laptops", icon: "💻", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop", offer: "From ₹29,999" },
    { name: "Beauty", icon: "💄", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&auto=format&fit=crop", offer: "Up to 70% Off" },
    { name: "Watches", icon: "⌚", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&auto=format&fit=crop", offer: "Min. 30% Off" },
    { name: "Sneakers", icon: "👟", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop", offer: "From ₹999" },
    { name: "Headphones", icon: "🎧", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop", offer: "Up to 60% Off" },
    { name: "Home Decor", icon: "🏠", img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300&auto=format&fit=crop", offer: "Under ₹499" },
    { name: "Furniture", icon: "🪑", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&auto=format&fit=crop", offer: "Up to 80% Off" },
    { name: "Grocery", icon: "🛒", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&auto=format&fit=crop", offer: "Everyday Low Price" },
  ];

  const rakshaBandhanSpecials = [
    { name: "Premium Silver Rakhi", discount: "20% Off", img: "https://images.unsplash.com/photo-1628795551980-60b73c9f225d?w=400&auto=format&fit=crop", tag: "PREMIUM" },
    { name: "Cadbury Silk Potli", discount: "₹349", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&auto=format&fit=crop", tag: "SWEETS" },
    { name: "Brother-Sister Hamper", discount: "Min. 30% Off", img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&auto=format&fit=crop", tag: "GIFTING" },
    { name: "Personalized Mug", discount: "Under ₹199", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop", tag: "PERSONALIZED" },
    { name: "Assorted Dry Fruits", discount: "Flat 10% Off", img: "https://images.unsplash.com/photo-1596531398845-66795f5cbaec?w=400&auto=format&fit=crop", tag: "HEALTHY" },
    { name: "Kids Superhero Rakhi", discount: "₹99", img: "https://images.unsplash.com/photo-1628795551980-60b73c9f225d?w=400&auto=format&fit=crop", tag: "KIDS" },
    { name: "Kundan Rakhi Set", discount: "40% Off", img: "https://images.unsplash.com/photo-1628795551980-60b73c9f225d?w=400&auto=format&fit=crop", tag: "TRADITIONAL" },
    { name: "Men's Grooming Kit", discount: "Under ₹799", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&auto=format&fit=crop", tag: "FOR HIM" },
  ];

  const topPicksRows = [
    {
      title: "Electronics Under ₹999",
      color: "#1a1a2e",
      accent: "#0f3460",
      items: [
        { name: "USB-C Fast Charger", img: "https://images.unsplash.com/photo-1600490036275-89bcd0f5d63a?w=300&auto=format&fit=crop", price: "₹599" },
        { name: "Wireless Mouse", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&auto=format&fit=crop", price: "₹799" },
        { name: "Cable Organizer", img: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=300&auto=format&fit=crop", price: "₹299" },
        { name: "LED Desk Lamp", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&auto=format&fit=crop", price: "₹899" },
        { name: "Bluetooth Speaker", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&auto=format&fit=crop", price: "₹999" },
        { name: "Power Bank 10000mAh", img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300&auto=format&fit=crop", price: "₹899" },
        { name: "Earbuds Case", img: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=300&auto=format&fit=crop", price: "₹249" },
        { name: "Laptop Stand", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=300&auto=format&fit=crop", price: "₹699" },
      ]
    },
    {
      title: "Beauty Under ₹499",
      color: "#2d0a31",
      accent: "#7b1fa2",
      items: [
        { name: "Vitamin C Serum", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=300&auto=format&fit=crop", price: "₹399" },
        { name: "Rose Face Mist", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=300&auto=format&fit=crop", price: "₹299" },
        { name: "SPF 50 Sunscreen", img: "https://images.unsplash.com/photo-1556228720-1c2ae6ba6a11?w=300&auto=format&fit=crop", price: "₹449" },
        { name: "Hydrating Face Mask", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&auto=format&fit=crop", price: "₹199" },
        { name: "Matte Lipstick", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&auto=format&fit=crop", price: "₹349" },
        { name: "Eyeliner Pen", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&auto=format&fit=crop", price: "₹249" },
        { name: "Makeup Sponge", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&auto=format&fit=crop", price: "₹149" },
        { name: "Body Lotion", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&auto=format&fit=crop", price: "₹299" },
      ]
    },
    {
      title: "Premium Watches",
      color: "#0f2027",
      accent: "#2c5364",
      items: [
        { name: "Casio Edifice", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&auto=format&fit=crop", price: "₹8,995" },
        { name: "Titan Octane", img: "https://images.unsplash.com/photo-1508656937553-61b5853775d7?w=300&auto=format&fit=crop", price: "₹5,499" },
        { name: "Tommy Hilfiger", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=300&auto=format&fit=crop", price: "₹9,999" },
        { name: "Daniel Wellington", img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=300&auto=format&fit=crop", price: "₹12,499" },
        { name: "Fossil Gen 6", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&auto=format&fit=crop", price: "₹14,995" },
        { name: "Seiko 5 Sports", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=300&auto=format&fit=crop", price: "₹22,500" },
        { name: "Citizen Eco-Drive", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&auto=format&fit=crop", price: "₹18,999" },
        { name: "G-Shock Mudmaster", img: "https://images.unsplash.com/photo-1617611413968-537a2ba4986d?w=300&auto=format&fit=crop", price: "₹11,495" },
      ]
    }
  ];

  const spotlightDeals = [
    { img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop", title: "Smart TVs", offer: "Up to 85% Off", badge: "SALE" },
    { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700&auto=format&fit=crop", title: "Premium Phones", offer: "From ₹30,999", badge: "HOT" },
    { img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=700&auto=format&fit=crop", title: "Perfumes", offer: "Min. 40% Off", badge: "NEW" },
    { img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop", title: "Backpacks", offer: "Under ₹1,999", badge: "DEAL" },
    { img: "https://images.unsplash.com/photo-1572569533941-5975003fa6f4?w=700&auto=format&fit=crop", title: "Laptops", offer: "Min. ₹10k Off", badge: "TECH" },
    { img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop", title: "Hair Care", offer: "Up to 50% Off", badge: "BEAUTY" },
    { img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&auto=format&fit=crop", title: "Lipsticks", offer: "Under ₹499", badge: "TRENDING" },
    { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop", title: "Denim Jackets", offer: "From ₹999", badge: "FASHION" },
    { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop", title: "Sneakers", offer: "Under ₹1,499", badge: "HOT" },
    { img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=700&auto=format&fit=crop", title: "Handbags", offer: "Min. 60% Off", badge: "STYLE" },
    { img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=700&auto=format&fit=crop", title: "MacBooks", offer: "Student Discount", badge: "TECH" },
    { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop", title: "Headphones", offer: "Up to 70% Off", badge: "SALE" },
  ];

  const budgetStoreItems = [
    { title: "Under ₹199", img: "https://images.unsplash.com/photo-1588722420803-1e56d7881076?w=400&auto=format&fit=crop" },
    { title: "Under ₹299", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&auto=format&fit=crop" },
    { title: "Under ₹499", img: "https://images.unsplash.com/photo-1595354921612-e25dfec50ba9?w=400&auto=format&fit=crop" },
  ];

  const liveShoppingVideos = [
    { title: "Tech Fest Live: Best Gadgets", viewers: "4.5K", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop", time: "LIVE" },
    { title: "Beauty Secrets with experts", viewers: "12K", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop", time: "LIVE" },
    { title: "Sneaker Heads: Unboxing", viewers: "8.2K", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop", time: "LIVE" },
    { title: "Home Decor Haul", viewers: "3.1K", img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop", time: "LIVE" },
  ];

  const topBrands = [
    { name: "Apple", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&auto=format&fit=crop", offer: "Up to 10% Off", items: [
      { name: "iPhone 15 Pro Max", price: "₹1,44,900", oldPrice: "₹1,59,900", discount: "9% Off", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop" },
      { name: "MacBook Pro M3", price: "₹1,69,900", oldPrice: "₹1,89,900", discount: "10% Off", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop" },
      { name: "Apple Watch Ultra 2", price: "₹89,900", oldPrice: "₹94,900", discount: "5% Off", img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&auto=format&fit=crop" },
      { name: "AirPods Pro 2", price: "₹24,900", oldPrice: "₹26,900", discount: "7% Off", img: "https://images.unsplash.com/photo-1606220588913-b3aecb4b2762?w=400&auto=format&fit=crop" },
      { name: "iPad Pro M4", price: "₹99,900", oldPrice: "₹1,09,900", discount: "9% Off", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop" },
      { name: "Mac Studio", price: "₹1,99,900", oldPrice: "₹2,10,000", discount: "5% Off", img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=400&auto=format&fit=crop" },
      { name: "Apple Pencil Pro", price: "₹11,900", oldPrice: "₹12,900", discount: "8% Off", img: "https://images.unsplash.com/photo-1590494472304-44bce63fb64c?w=400&auto=format&fit=crop" },
      { name: "Magic Keyboard", price: "₹14,900", oldPrice: "₹16,900", discount: "12% Off", img: "https://images.unsplash.com/photo-1587826359049-93e5e042296d?w=400&auto=format&fit=crop" }
    ] },
    { name: "Samsung", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop", offer: "Exchange Deals", items: [
      { name: "Galaxy S24 Ultra", price: "₹1,29,999", oldPrice: "₹1,34,999", discount: "5% Off", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop" },
      { name: "Galaxy Z Fold 5", price: "₹1,54,999", oldPrice: "₹1,64,999", discount: "6% Off", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop" },
      { name: "Galaxy Watch 6", price: "₹29,999", oldPrice: "₹34,999", discount: "14% Off", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&auto=format&fit=crop" },
      { name: "Galaxy Buds 2 Pro", price: "₹14,999", oldPrice: "₹19,999", discount: "25% Off", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop" },
      { name: "Galaxy Tab S9", price: "₹72,999", oldPrice: "₹83,999", discount: "13% Off", img: "https://images.unsplash.com/photo-1588702545922-77ca5146c986?w=400&auto=format&fit=crop" },
      { name: "Smart Monitor M8", price: "₹49,999", oldPrice: "₹59,999", discount: "16% Off", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&auto=format&fit=crop" },
      { name: "Galaxy Book3 Ultra", price: "₹1,89,990", oldPrice: "₹2,10,000", discount: "9% Off", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&auto=format&fit=crop" },
      { name: "Freestyle Projector", price: "₹59,990", oldPrice: "₹69,990", discount: "14% Off", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop" }
    ] },
    { name: "Nike", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop", offer: "Min. 40% Off", items: [
      { name: "Air Force 1 '07", price: "₹7,495", oldPrice: "₹8,495", discount: "11% Off", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" },
      { name: "Air Jordan 1 Mid", price: "₹11,495", oldPrice: "₹12,995", discount: "11% Off", img: "https://images.unsplash.com/photo-1552346154-21d32810baa3?w=400&auto=format&fit=crop" },
      { name: "Nike Dunk Low", price: "₹8,695", oldPrice: "₹9,695", discount: "10% Off", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop" },
      { name: "Pegasus 40", price: "₹10,495", oldPrice: "₹11,995", discount: "12% Off", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop" },
      { name: "Air Max 270", price: "₹13,995", oldPrice: "₹15,495", discount: "9% Off", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&auto=format&fit=crop" },
      { name: "Dri-FIT T-Shirt", price: "₹1,495", oldPrice: "₹1,995", discount: "25% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "Heritage Backpack", price: "₹2,495", oldPrice: "₹3,495", discount: "28% Off", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop" },
      { name: "Sports Shorts", price: "₹1,295", oldPrice: "₹1,795", discount: "27% Off", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&auto=format&fit=crop" }
    ] },
    { name: "Adidas", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=300&auto=format&fit=crop", offer: "Under ₹2499", items: [
      { name: "Ultraboost Light", price: "₹12,999", oldPrice: "₹18,999", discount: "31% Off", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=400&auto=format&fit=crop" },
      { name: "Superstar Shoes", price: "₹5,499", oldPrice: "₹8,999", discount: "38% Off", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop" },
      { name: "Stan Smith", price: "₹4,999", oldPrice: "₹7,999", discount: "37% Off", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&auto=format&fit=crop" },
      { name: "NMD_R1 V3", price: "₹8,999", oldPrice: "₹14,999", discount: "40% Off", img: "https://images.unsplash.com/photo-1588824141973-519d1cb58e4d?w=400&auto=format&fit=crop" },
      { name: "Originals Hoodie", price: "₹3,499", oldPrice: "₹4,999", discount: "30% Off", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop" },
      { name: "Tiro Track Pants", price: "₹2,499", oldPrice: "₹3,599", discount: "30% Off", img: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=400&auto=format&fit=crop" },
      { name: "Samba OG", price: "₹10,999", oldPrice: "₹11,999", discount: "8% Off", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop" },
      { name: "Classic Cap", price: "₹999", oldPrice: "₹1,499", discount: "33% Off", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop" }
    ] },
    { name: "Sony", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop", offer: "Premium Audio", items: [
      { name: "WH-1000XM5 Headphones", price: "₹26,990", oldPrice: "₹34,990", discount: "22% Off", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop" },
      { name: "PlayStation 5 Console", price: "₹49,990", oldPrice: "₹54,990", discount: "9% Off", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&auto=format&fit=crop" },
      { name: "Bravia XR 65 OLED", price: "₹2,49,990", oldPrice: "₹3,49,990", discount: "28% Off", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop" },
      { name: "WF-1000XM4 Earbuds", price: "₹16,990", oldPrice: "₹24,990", discount: "32% Off", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop" },
      { name: "Alpha 7 IV Camera", price: "₹2,14,990", oldPrice: "₹2,34,990", discount: "8% Off", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop" },
      { name: "DualSense Controller", price: "₹5,490", oldPrice: "₹6,490", discount: "15% Off", img: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=400&auto=format&fit=crop" },
      { name: "Soundbar HT-A7000", price: "₹1,24,990", oldPrice: "₹1,44,990", discount: "13% Off", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" },
      { name: "SRS-XB13 Speaker", price: "₹3,490", oldPrice: "₹4,990", discount: "30% Off", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop" }
    ] },
    { name: "Lakme", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&auto=format&fit=crop", offer: "₹99 onwards", items: [
      { name: "Lumi Cream 30g", price: "₹299", oldPrice: "₹350", discount: "14% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
      { name: "CC Complexion Care", price: "₹320", oldPrice: "₹399", discount: "19% Off", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&auto=format&fit=crop" },
      { name: "Absolute Matte Melt", price: "₹499", oldPrice: "₹850", discount: "41% Off", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop" },
      { name: "Eyeconic Kajal", price: "₹199", oldPrice: "₹275", discount: "27% Off", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&auto=format&fit=crop" },
      { name: "9to5 Primer + Matte", price: "₹420", oldPrice: "₹550", discount: "23% Off", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop" },
      { name: "Peach Milk Moisturizer", price: "₹250", oldPrice: "₹320", discount: "21% Off", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop" },
      { name: "Absolute Blur Perfect", price: "₹599", oldPrice: "₹750", discount: "20% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" },
      { name: "Rose Powder", price: "₹160", oldPrice: "₹200", discount: "20% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" }
    ] },
    { name: "MAC", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&auto=format&fit=crop", offer: "Up to 40% Off", items: [
      { name: "Retro Matte Lipstick", price: "₹1,950", oldPrice: "₹2,300", discount: "15% Off", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop" },
      { name: "Studio Fix Fluid SPF 15", price: "₹3,300", oldPrice: "₹3,900", discount: "15% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
      { name: "Prep + Prime Fix+", price: "₹2,200", oldPrice: "₹2,500", discount: "12% Off", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop" },
      { name: "Pro Longwear Concealer", price: "₹2,600", oldPrice: "₹3,100", discount: "16% Off", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&auto=format&fit=crop" },
      { name: "Ruby Woo Lipstick", price: "₹1,950", oldPrice: "₹2,300", discount: "15% Off", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop" },
      { name: "Mineralize Skinfinish", price: "₹3,500", oldPrice: "₹4,000", discount: "12% Off", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&auto=format&fit=crop" },
      { name: "Macstack Mascara", price: "₹2,800", oldPrice: "₹3,200", discount: "12% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
      { name: "Strobe Cream", price: "₹3,600", oldPrice: "₹4,200", discount: "14% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" }
    ] },
    { name: "Puma", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&auto=format&fit=crop", offer: "Flat 50% Off", items: [
      { name: "Smash v2 Sneakers", price: "₹1,999", oldPrice: "₹3,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop" },
      { name: "RS-X 3D Sneakers", price: "₹4,999", oldPrice: "₹9,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" },
      { name: "Ferrari Race Polo", price: "₹1,499", oldPrice: "₹2,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "Active Duffle Bag", price: "₹999", oldPrice: "₹1,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop" },
      { name: "Softride Rift Shoes", price: "₹3,499", oldPrice: "₹6,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" },
      { name: "Essential Logo Tee", price: "₹799", oldPrice: "₹1,599", discount: "50% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "Training Sweatpants", price: "₹1,499", oldPrice: "₹2,999", discount: "50% Off", img: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=400&auto=format&fit=crop" },
      { name: "Popcat 20 Slides", price: "₹899", oldPrice: "₹1,799", discount: "50% Off", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop" }
    ] },
    { name: "Gucci", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=300&auto=format&fit=crop", offer: "Luxury Picks", items: [
      { name: "GG Marmont Matelassé", price: "₹1,85,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&auto=format&fit=crop" },
      { name: "Ace Web Sneaker", price: "₹65,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&auto=format&fit=crop" },
      { name: "Double G Belt", price: "₹38,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1627885065098-b851b47fb59c?w=400&auto=format&fit=crop" },
      { name: "Flora Gorgeous Gardenia EDP", price: "₹11,500", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
      { name: "Ophidia GG Mini Bag", price: "₹95,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&auto=format&fit=crop" },
      { name: "Princetown Slipper", price: "₹72,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" },
      { name: "Gucci Bloom EDP", price: "₹12,500", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
      { name: "GG Silk Tie", price: "₹18,000", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop" }
    ] },
    { name: "Zara", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&auto=format&fit=crop", offer: "Trendy Styles", items: [
      { name: "Oversized Blazer", price: "₹4,990", oldPrice: "₹6,990", discount: "28% Off", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop" },
      { name: "Satin Slip Dress", price: "₹2,990", oldPrice: "₹3,990", discount: "25% Off", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&auto=format&fit=crop" },
      { name: "Wide Leg Trousers", price: "₹2,590", oldPrice: "₹3,590", discount: "27% Off", img: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=400&auto=format&fit=crop" },
      { name: "Faux Leather Biker", price: "₹5,990", oldPrice: "₹7,990", discount: "25% Off", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop" },
      { name: "Cropped Knit Sweater", price: "₹2,290", oldPrice: "₹3,290", discount: "30% Off", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop" },
      { name: "Pleated Midi Skirt", price: "₹3,590", oldPrice: "₹4,590", discount: "21% Off", img: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=400&auto=format&fit=crop" },
      { name: "Basic White Shirt", price: "₹1,990", oldPrice: "₹2,590", discount: "23% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "Strappy Heels", price: "₹3,990", oldPrice: "₹4,990", discount: "20% Off", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop" }
    ] },
    { name: "H&M", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop", offer: "From ₹499", items: [
      { name: "Cotton T-Shirt", price: "₹499", oldPrice: "₹799", discount: "37% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "Relaxed Fit Hoodie", price: "₹1,499", oldPrice: "₹1,999", discount: "25% Off", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop" },
      { name: "Mom High Ankle Jeans", price: "₹1,999", oldPrice: "₹2,699", discount: "25% Off", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop" },
      { name: "Puffer Jacket", price: "₹2,999", oldPrice: "₹3,999", discount: "25% Off", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop" },
      { name: "Sweatpants", price: "₹1,299", oldPrice: "₹1,799", discount: "27% Off", img: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=400&auto=format&fit=crop" },
      { name: "Knit Cardigan", price: "₹1,999", oldPrice: "₹2,499", discount: "20% Off", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop" },
      { name: "Denim Shorts", price: "₹1,499", oldPrice: "₹1,999", discount: "25% Off", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop" },
      { name: "Ribbed Tank Top", price: "₹399", oldPrice: "₹599", discount: "33% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" }
    ] },
    { name: "Levi's", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&auto=format&fit=crop", offer: "Denim Fest", items: [
      { name: "501 Original Fit", price: "₹2,999", oldPrice: "₹4,299", discount: "30% Off", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop" },
      { name: "Trucker Denim Jacket", price: "₹3,499", oldPrice: "₹4,999", discount: "30% Off", img: "https://images.unsplash.com/photo-1572569533941-5975003fa6f4?w=400&auto=format&fit=crop" },
      { name: "Graphic Logo T-Shirt", price: "₹999", oldPrice: "₹1,599", discount: "37% Off", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop" },
      { name: "511 Slim Fit Jeans", price: "₹2,799", oldPrice: "₹3,999", discount: "30% Off", img: "https://images.unsplash.com/photo-1582042784534-1cd761fdf96e?w=400&auto=format&fit=crop" },
      { name: "711 Skinny Jeans", price: "₹2,899", oldPrice: "₹4,199", discount: "30% Off", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop" },
      { name: "Western Denim Shirt", price: "₹2,499", oldPrice: "₹3,499", discount: "28% Off", img: "https://images.unsplash.com/photo-1572569533941-5975003fa6f4?w=400&auto=format&fit=crop" },
      { name: "505 Regular Fit", price: "₹2,599", oldPrice: "₹3,799", discount: "31% Off", img: "https://images.unsplash.com/photo-1582042784534-1cd761fdf96e?w=400&auto=format&fit=crop" },
      { name: "Leather Belt", price: "₹1,299", oldPrice: "₹1,999", discount: "35% Off", img: "https://images.unsplash.com/photo-1627885065098-b851b47fb59c?w=400&auto=format&fit=crop" }
    ] },
    { name: "L'Oreal", img: "https://images.unsplash.com/photo-1580870058869-d5c41c7b8053?w=300&auto=format&fit=crop", offer: "Best Sellers", items: [
      { name: "Hyaluronic Acid Serum", price: "₹799", oldPrice: "₹999", discount: "20% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" },
      { name: "Revitalift Day Cream", price: "₹699", oldPrice: "₹850", discount: "17% Off", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop" },
      { name: "Excellence Creme Color", price: "₹499", oldPrice: "₹650", discount: "23% Off", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&auto=format&fit=crop" },
      { name: "Infallible Matte Foundation", price: "₹950", oldPrice: "₹1,200", discount: "20% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
      { name: "Crystal Micro-Essence", price: "₹899", oldPrice: "₹1,150", discount: "21% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" },
      { name: "Volume Million Mascara", price: "₹750", oldPrice: "₹950", discount: "21% Off", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
      { name: "Clay Mask", price: "₹599", oldPrice: "₹750", discount: "20% Off", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop" },
      { name: "Dream Lengths Shampoo", price: "₹349", oldPrice: "₹450", discount: "22% Off", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop" }
    ] },
    { name: "Bose", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&auto=format&fit=crop", offer: "No Cost EMI", items: [
      { name: "QuietComfort 45", price: "₹29,900", oldPrice: "₹34,900", discount: "14% Off", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop" },
      { name: "SoundLink Revolve+", price: "₹24,500", oldPrice: "₹28,500", discount: "14% Off", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop" },
      { name: "QuietComfort Earbuds II", price: "₹25,900", oldPrice: "₹29,900", discount: "13% Off", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop" },
      { name: "Smart Soundbar 900", price: "₹99,900", oldPrice: "₹1,14,900", discount: "13% Off", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" },
      { name: "Bose Frames Tenor", price: "₹21,900", oldPrice: "₹25,900", discount: "15% Off", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop" },
      { name: "SoundLink Flex", price: "₹13,900", oldPrice: "₹15,900", discount: "12% Off", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop" },
      { name: "Sleepbuds II", price: "₹22,900", oldPrice: "₹25,900", discount: "11% Off", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop" },
      { name: "Bose TV Speaker", price: "₹25,900", oldPrice: "₹29,900", discount: "13% Off", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" }
    ] },
    { name: "Plum", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&auto=format&fit=crop", offer: "Cruelty Free", items: [
      { name: "Green Tea Pore Cleanser", price: "₹299", oldPrice: "₹345", discount: "13% Off", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop" },
      { name: "Vitamin C Serum", price: "₹599", oldPrice: "₹750", discount: "20% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" },
      { name: "Hawaiian Rumba Body Mist", price: "₹399", oldPrice: "₹525", discount: "24% Off", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
      { name: "Niacinamide Serum", price: "₹499", oldPrice: "₹650", discount: "23% Off", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop" },
      { name: "Green Tea Toner", price: "₹350", oldPrice: "₹420", discount: "16% Off", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop" },
      { name: "Vanilla Vibes Perfume", price: "₹299", oldPrice: "₹350", discount: "14% Off", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
      { name: "Chamomile Night Cream", price: "₹550", oldPrice: "₹690", discount: "20% Off", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop" },
      { name: "Charcoal Face Mask", price: "₹450", oldPrice: "₹550", discount: "18% Off", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop" }
    ] }
  ];

  const bankOffers = [
    { text: "Flat ₹5,000 Off", subtext: "On HDFC Credit Cards", icon: "https://logo.clearbit.com/hdfcbank.com" },
    { text: "10% Instant Discount", subtext: "On SBI Debit & Credit Cards", icon: "https://logo.clearbit.com/sbi.co.in" },
    { text: "5% Unlimited Cashback", subtext: "On Flipkart Axis Bank Card", icon: "https://logo.clearbit.com/axisbank.com" },
  ];

  const suggestedItems = [
    { title: "Sony PlayStation 5 Console", price: "₹49,990", oldPrice: "₹54,990", discount: "9% Off", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&auto=format&fit=crop" },
    { title: "Apple Watch Series 9", price: "₹41,900", oldPrice: "₹44,900", discount: "6% Off", img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&auto=format&fit=crop" },
    { title: "Oculus Quest 2 VR Headset", price: "₹31,999", oldPrice: "₹40,000", discount: "20% Off", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&auto=format&fit=crop" },
    { title: "Bose QuietComfort 45", price: "₹29,900", oldPrice: "₹34,900", discount: "14% Off", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop" },
    { title: "DJI Mini 3 Pro Drone", price: "₹74,990", oldPrice: "₹85,000", discount: "11% Off", img: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=400&auto=format&fit=crop" },
    { title: "Samsung Galaxy Tab S9", price: "₹72,999", oldPrice: "₹83,999", discount: "13% Off", img: "https://images.unsplash.com/photo-1588702545922-77ca5146c986?w=400&auto=format&fit=crop" },
    { title: "Nintendo Switch OLED", price: "₹34,990", oldPrice: "₹39,990", discount: "12% Off", img: "https://images.unsplash.com/photo-1578306899723-5e72d3e9118c?w=400&auto=format&fit=crop" },
    { title: "Nespresso Coffee Machine", price: "₹14,999", oldPrice: "₹18,999", discount: "21% Off", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&auto=format&fit=crop" },
    { title: "AirPods Max Silver", price: "₹59,900", oldPrice: "₹65,000", discount: "8% Off", img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&auto=format&fit=crop" },
    { title: "Dyson V15 Detect Vacuum", price: "₹55,900", oldPrice: "₹62,900", discount: "11% Off", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&auto=format&fit=crop" },
    { title: "Insta360 X3 Action Cam", price: "₹44,990", oldPrice: "₹49,990", discount: "10% Off", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop" },
    { title: "Marshall Stanmore II", price: "₹32,999", oldPrice: "₹37,999", discount: "13% Off", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" },
  ];

  const shoppableShorts = [
    { title: "GRWM: Festive Look", views: "1.2M", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop" },
    { title: "Top 5 Sneaker Drops", views: "850K", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop" },
    { title: "Skincare Routine", views: "2.1M", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop" },
    { title: "Tech Desk Setup", views: "3.4M", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&auto=format&fit=crop" },
    { title: "My Perfume Haul", views: "620K", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
  ];

  const kiranaStoreItems = [
    { name: "Aashirvaad Shudh Chakki Atta", price: "₹219", oldPrice: "₹260", discount: "15% Off", qty: "5 kg", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop" },
    { name: "Fortune Sunlite Refined Oil", price: "₹135", oldPrice: "₹155", discount: "12% Off", qty: "1 L", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop" },
    { name: "Tata Salt, Iodised", price: "₹24", oldPrice: "₹28", discount: "14% Off", qty: "1 kg", img: "https://images.unsplash.com/photo-1627483262769-04d0a1401487?w=400&auto=format&fit=crop" },
    { name: "India Gate Basmati Rice", price: "₹189", oldPrice: "₹220", discount: "14% Off", qty: "1 kg", img: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=400&auto=format&fit=crop" },
    { name: "Amul Taaza Toned Milk", price: "₹68", oldPrice: "₹72", discount: "5% Off", qty: "1 L", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop" },
    { name: "Maggi 2-Minute Noodles", price: "₹140", oldPrice: "₹160", discount: "12% Off", qty: "12 Pack", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&auto=format&fit=crop" },
    { name: "Tata Tea Gold", price: "₹315", oldPrice: "₹350", discount: "10% Off", qty: "500 g", img: "https://images.unsplash.com/photo-1576092762791-dd9e222046d8?w=400&auto=format&fit=crop" },
    { name: "Surf Excel Easy Wash", price: "₹295", oldPrice: "₹330", discount: "10% Off", qty: "3 kg", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&auto=format&fit=crop" }
  ];

  return (
    <div className="forYouHubContainer">


      {/* LIVE OFFERS TICKER */}
      <div className="fy-ticker-bar fy-animate-1">
        <div className="fy-ticker-track">
          ⚡ BIG BILLION DAYS LIVE NOW — 80% Off on Electronics &bull; 🔥 Extra ₹3,000 on Exchange &bull; 💳 SBI Cards: 10% Instant Discount &bull; 🚚 Free Delivery on orders above ₹499 &bull; 🎁 Buy 2 Get 1 FREE on Fashion &bull; ⚡ BIG BILLION DAYS LIVE NOW
        </div>
      </div>

      {/* WELCOME BANNER */}
      <div className="fy-welcome-banner fy-animate-1">
        <div className="fy-welcome-text">
          <h2>Good Afternoon, Shopper! 👋</h2>
          <p>Here are your personalized picks for the day.</p>
        </div>
        <div className="fy-user-avatar">
          S
        </div>
      </div>

      {/* TRENDING SEARCHES - VIBRANT */}
      <div className="fy-trending-searches fy-animate-1" style={{ marginBottom: "15px" }}>
        {[
          { text: "iPhone 15 Pro", icon: "📱", color: "#e8f0fe", textColor: "#1967d2" },
          { text: "Nike Air Force", icon: "👟", color: "#fce8e6", textColor: "#d93025" },
          { text: "Smart TV 4K", icon: "📺", color: "#e6f4ea", textColor: "#137333" },
          { text: "MAC Lipstick", icon: "💄", color: "#fef7e0", textColor: "#f29900" },
          { text: "DSLR Cameras", icon: "📷", color: "#f3e8fd", textColor: "#9334e6" },
          { text: "Protein Powder", icon: "💪", color: "#e8f0fe", textColor: "#1967d2" },
          { text: "Office Chairs", icon: "🪑", color: "#fce8e6", textColor: "#d93025" },
        ].map((item, i) => (
          <div key={i} className="fy-search-pill" style={{ background: item.color, color: item.textColor, border: "none", fontWeight: 800 }}>
            <span>{item.icon}</span> {item.text}
          </div>
        ))}
      </div>

      {/* DAILY MYSTERY REWARD */}
      <div className="fy-animate-1" style={{ margin: "0 20px 15px", background: "linear-gradient(90deg, #111, #333)", borderRadius: "16px", padding: "15px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 10px 20px rgba(0,0,0,0.15)", cursor: "pointer" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <div style={{ fontSize: "2.5rem", animation: "fyFloat 3s ease-in-out infinite" }}>🎁</div>
          <div>
            <div style={{ color: "#00f5d4", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: 1 }}>Daily Mystery Box</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 600 }}>Tap to unlock today's guaranteed reward!</div>
          </div>
        </div>
      </div>

      {/* KIRANA / GROCERY SECTION */}
      <div className="fy-animate-2" style={{ padding: "0 15px", marginBottom: "30px", marginTop: "20px" }}>
        <div className="fy-section-heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>🛒 Super Kirana Store</span>
          <span style={{ fontSize: "0.85rem", color: "#f26f21", cursor: "pointer", fontWeight: 800 }}>View All Grocery ➔</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 15 }}>
          {kiranaStoreItems.map((item, i) => (
            <div key={i} style={{ background: "white", borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", boxShadow: "0 6px 15px rgba(0,0,0,0.06)", border: "1px solid #eee", transition: "all 0.3s" }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ position: "absolute", top: 10, left: 10, background: "#f26f21", color: "white", fontSize: "0.7rem", fontWeight: 900, padding: "3px 8px", borderRadius: 6, zIndex: 2 }}>{item.discount}</div>
              <div style={{ height: 160, overflow: "hidden", padding: 10, background: "#f9f9f9" }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply", transition: "transform 0.4s" }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"} />
              </div>
              <div style={{ padding: "12px 15px" }}>
                <div style={{ color: "#888", fontSize: "0.75rem", fontWeight: 700, marginBottom: 4 }}>{item.qty}</div>
                <div style={{ color: "#111", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: 8, height: 38, overflow: "hidden" }}>{item.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ color: "#00b894", fontWeight: 900, fontSize: "1.1rem" }}>{item.price}</div>
                  <div style={{ color: "#999", fontSize: "0.8rem", textDecoration: "line-through", fontWeight: 600 }}>{item.oldPrice}</div>
                </div>
                <button style={{ width: "100%", marginTop: 12, padding: "8px", background: "#f26f21", color: "white", border: "none", borderRadius: 8, fontWeight: 800, cursor: "pointer", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.background = "#e05c0e"} onMouseOut={e => e.currentTarget.style.background = "#f26f21"}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BRAND STORIES (INSTAGRAM STYLE) */}
      <div className="fy-stories-container fy-animate-2">
        {topBrands.map((brand, i) => (
          <div key={i} className="fy-story-item" onClick={() => setActiveBrandModal(brand)} style={{cursor: "pointer"}}>
            <div className="fy-story-ring">
              <img src={brand.img} alt={brand.name} />
            </div>
            <div className="fy-story-name">{brand.name}</div>
          </div>
        ))}
        <div className="fy-story-item">
            <div className="fy-story-ring" style={{ background: "#e0e0e0" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "1.5rem", color: "#666" }}>
                +
              </div>
            </div>
            <div className="fy-story-name" style={{ color: "#666" }}>More</div>
        </div>
      </div>

      {/* ANIMATED HERO CAROUSEL */}
      <div className="fy-hero-carousel fy-animate-1">
        {heroBanners.map((banner, i) => (
          <div key={i} className={`fy-hero-slide ${i === activeBanner ? "active" : ""}`} style={{ background: banner.bg }}>
            <div className="fy-hero-content">
              <span className="fy-hero-badge" style={{ background: banner.accentColor, color: "#111" }}>{banner.badge}</span>
              <h1 className="fy-hero-title">{banner.title}</h1>
              <p className="fy-hero-subtitle">{banner.subtitle}</p>
              <div className="fy-hero-bank-offer">{banner.bankOffer}</div>
              <button className="fy-hero-cta" style={{ borderColor: banner.accentColor, color: banner.accentColor }} onClick={() => setShowMegaSaleModal(true)}>Shop Now →</button>
            </div>
            <div className="fy-hero-img-box">
              <img src={banner.img} alt={banner.title} />
            </div>
          </div>
        ))}
        <div className="fy-hero-dots">
          {heroBanners.map((_, i) => (
            <div key={i} className={`fy-dot ${i === activeBanner ? "active" : ""}`} onClick={() => setActiveBanner(i)} />
          ))}
        </div>
      </div>

      {/* FLASH SALE COUNTDOWN */}
      <div className="fy-flash-sale fy-animate-2">
        <div className="fy-flash-header">
          <div>
            <span className="fy-flash-title" style={{ fontSize: "1.8rem" }}>⚡ BIG BILLION DAYS: Smartphones</span>
            <span className="fy-flash-sub">Ends in:</span>
            <div className="fy-countdown">
              <div className="fy-timer-block"><span>{pad(timeLeft.hours)}</span><small>HRS</small></div>
              <span className="fy-colon">:</span>
              <div className="fy-timer-block"><span>{pad(timeLeft.minutes)}</span><small>MIN</small></div>
              <span className="fy-colon">:</span>
              <div className="fy-timer-block"><span>{pad(timeLeft.seconds)}</span><small>SEC</small></div>
            </div>
          </div>
          <button className="fy-view-all-btn">View All →</button>
        </div>
        <div className="fy-flash-grid">
          {flashSaleItems.map((item, i) => (
            <div className="fy-flash-card" key={i}>
              <div className="fy-flash-img-box">
                <span className="fy-discount-badge">-{item.discount}</span>
                <span className="fy-wishlist-btn">♡</span>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="fy-flash-info">
                <div className="fy-flash-brand">{item.brand}</div>
                <div className="fy-flash-name">{item.name}</div>
                <div className="fy-flash-pricing">
                  <span className="fy-flash-price">{item.price}</span>
                  <span className="fy-flash-old">{item.oldPrice}</span>
                </div>
                <button className="fy-add-bag-btn" onClick={(e) => { e.stopPropagation(); setQuickViewItem({ title: item.name, price: item.price, oldPrice: item.oldPrice, discount: item.discount, img: item.img, tag: item.brand, category: "Mobiles" }); }}>Quick View / Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUPER DESIGNING: HOLOGRAPHIC MEGA BANNER */}
      <div className="fy-holographic-banner fy-animate-3" style={{ marginBottom: "30px" }}>
        <div className="fy-holo-bg"></div>
        <div className="fy-holo-content">
          <h2 className="fy-holo-title">WELCOME TO THE FUTURE</h2>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "25px", color: "rgba(255,255,255,0.8)" }}>
            Experience ultra-premium virtual shopping. Get flat 50% Off on VR Headsets & Next-Gen Tech.
          </p>
          <button className="fy-holo-btn">Unlock VIP Access</button>
        </div>
        <div className="fy-holo-img-wrapper">
          <div className="fy-holo-glow"></div>
          <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop" style={{ borderRadius: "50%" }} alt="VR Headset Floating" />
        </div>
      </div>

      {/* SHOPPABLE VIDEO SHORTS (REELS STYLE) */}
      <div className="fy-animate-3" style={{ marginBottom: "20px" }}>
        <div className="fy-section-heading"><span>📱 Just for You (Shorts)</span></div>
        <div className="fy-shorts-grid">
          {shoppableShorts.map((short, i) => (
            <div key={i} className="fy-short-card">
              <img src={short.img} alt={short.title} />
              <div className="fy-short-overlay">
                <div className="fy-short-play-btn">▶</div>
                <div style={{ marginTop: "auto" }}>
                  <div className="fy-short-views">👁️ {short.views}</div>
                  <div className="fy-short-title">{short.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="fy-animate-4">
        <div className="fy-section-heading">
          <span>🛍️ Shop by Category</span>
        </div>
        <div className="fy-category-grid">
          {trendingCategories.map((cat, i) => (
            <div className="fy-cat-tile" key={i}>
              <div className="fy-cat-img-wrap">
                <img src={cat.img} alt={cat.name} />
                <div className="fy-cat-overlay">
                  <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
                </div>
              </div>
              <div className="fy-cat-name">{cat.name}</div>
              <div className="fy-cat-offer">{cat.offer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP BRANDS */}
      <div className="fy-animate-3">
        <div className="fy-section-heading"><span>✨ Shop by Brand</span></div>
        <div className="fy-brand-carousel">
          {topBrands.map((brand, i) => (
            <div key={i} className="fy-brand-item">
              <div className="fy-brand-img-wrap">
                <img src={brand.img} alt={brand.name} />
              </div>
              <div className="fy-brand-name">{brand.name}</div>
              <div className="fy-brand-offer">{brand.offer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BANK OFFERS STRIP */}
      <div className="fy-animate-4 fy-bank-strip">
        {bankOffers.map((offer, i) => (
          <div key={i} className="fy-bank-card">
            <img src={offer.icon} alt="Bank" className="fy-bank-icon" />
            <div className="fy-bank-text">
              <h4>{offer.text}</h4>
              <p>{offer.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GAMIFICATION PROMO (SPIN & WIN) */}
      <div className="fy-gamification-banner fy-animate-5" style={{ marginBottom: "20px" }}>
        <div className="fy-game-content">
          <h3>Spin & Win!</h3>
          <p>Get guaranteed rewards, extra discounts & more.</p>
          <button className="fy-play-btn">Play Now 🎮</button>
        </div>
        <div className="fy-wheel-img">🎡</div>
      </div>

      {/* RAKSHA BANDHAN SPECIALS - 3D DESIGN */}
      <div className="fy-occ-block fy-animate-4">
        <div className="fy-occ-header">
          <div>
            <h3>🎀 Raksha Bandhan Specials</h3>
            <p>Celebrate love with the best gifts</p>
          </div>
          <button className="fy-view-all-btn">See All →</button>
        </div>
        <div className="fy-occ-grid">
          {rakshaBandhanSpecials.map((item, i) => (
            <div className="fy-occ-card" key={i}>
              <span className="fy-occ-badge">{item.tag}</span>
              <div className="fy-occ-img-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="fy-occ-info">
                <h4>{item.name}</h4>
                <p>{item.discount}</p>
                <button className="fy-gift-btn" onClick={(e) => { e.stopPropagation(); setQuickViewItem({ title: item.name, price: item.discount, oldPrice: "", discount: "", img: item.img, tag: item.tag, category: "Gifting" }); }}>Send Gift 🎁</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IN THE SPOTLIGHT */}
      <div className="fy-animate-4">
        <div className="fy-section-heading"><span>🔦 In the Spotlight</span></div>
        <div className="fy-spotlight-grid">
          {spotlightDeals.map((deal, i) => (
            <div className="fy-spotlight-card" key={i}>
              <img src={deal.img} alt={deal.title} />
              <div className="fy-spotlight-overlay">
                <span className="fy-spotlight-badge">{deal.badge}</span>
                <div className="fy-spotlight-title">{deal.title}</div>
                <div className="fy-spotlight-offer">{deal.offer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP PICKS ROWS */}
      {topPicksRows.map((row, ri) => (
        <div key={ri} className="fy-top-picks-section fy-animate-5" style={{ background: `linear-gradient(135deg, ${row.color} 0%, ${row.accent} 100%)` }}>
          <div className="fy-top-picks-header">{row.title}</div>
          <div className="fy-top-picks-grid">
            {row.items.map((item, i) => (
              <div className="fy-top-pick-card" key={i}>
                <div className="fy-pick-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="fy-pick-name">{item.name}</div>
                <div className="fy-pick-price">{item.price}</div>
                <button className="fy-pick-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MEGA BRAND DEALS */}
      <div className="fy-animate-5" style={{ padding: "0 15px" }}>
        <div className="fy-section-heading"><span>🏷️ Mega Brand Deals</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 15 }}>
          {[
            { brand: "Apple", logo: "https://logo.clearbit.com/apple.com", deal: "iPhone 16 Pro Max", price: "₹1,34,900", oldPrice: "₹1,59,900", bg: "#000", color: "#fff", accent: "#0071e3" },
            { brand: "Samsung", logo: "https://logo.clearbit.com/samsung.com", deal: "Galaxy S25 Ultra", price: "₹1,09,999", oldPrice: "₹1,34,999", bg: "#1428a0", color: "#fff", accent: "#fff" },
            { brand: "Nike", logo: "https://logo.clearbit.com/nike.com", deal: "Air Jordan Retro", price: "₹12,995", oldPrice: "₹18,995", bg: "#111", color: "#fff", accent: "#f26f21" },
            { brand: "Sony", logo: "https://logo.clearbit.com/sony.com", deal: "WH-1000XM5 Headphones", price: "₹24,990", oldPrice: "₹34,990", bg: "#000", color: "#fff", accent: "#00bcd4" },
          ].map((b, i) => (
            <div key={i} style={{ background: b.bg, borderRadius: 16, padding: 25, display: "flex", alignItems: "center", gap: 20, cursor: "pointer", transition: "transform 0.3s", overflow: "hidden", position: "relative" }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, background: `${b.accent}20`, borderRadius: "50%" }}></div>
              <img src={b.logo} alt={b.brand} style={{ width: 60, height: 60, objectFit: "contain", background: "white", borderRadius: 12, padding: 8, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ color: b.accent, fontWeight: 900, fontSize: "0.8rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>{b.brand}</div>
                <div style={{ color: b.color, fontWeight: 800, fontSize: "1.1rem", marginBottom: 8 }}>{b.deal}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ color: b.color, fontWeight: 900, fontSize: "1.3rem" }}>{b.price}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", textDecoration: "line-through", fontSize: "0.9rem" }}>{b.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECENTLY VIEWED */}
      <div className="fy-animate-5" style={{ padding: "0 15px" }}>
        <div className="fy-section-heading"><span>🕐 Recently Viewed</span></div>
        <div style={{ display: "flex", gap: 15, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 10 }}>
          {[
            { name: "MacBook Air M3", price: "₹1,14,900", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop" },
            { name: "Ray-Ban Aviator", price: "₹5,990", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&auto=format&fit=crop" },
            { name: "Boat Airdopes 141", price: "₹999", img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&auto=format&fit=crop" },
            { name: "PUMA RS-X Sneakers", price: "₹5,499", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop" },
            { name: "Fossil Chronograph", price: "₹8,495", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop" },
            { name: "Canon EOS M50", price: "₹52,990", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&auto=format&fit=crop" },
          ].map((p, i) => (
            <div key={i} style={{ minWidth: 160, background: "white", borderRadius: 14, overflow: "hidden", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.06)", cursor: "pointer", transition: "transform 0.3s" }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ height: 140, overflow: "hidden" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 10 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                <div style={{ fontSize: "1rem", fontWeight: 900, color: "#f26f21" }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY SHOP WITH US - TRUST BADGES */}
      <div className="fy-animate-5" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 15, padding: "10px 15px" }}>
        {[
          { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹499" },
          { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
          { icon: "✅", title: "100% Authentic", desc: "Verified products only" },
          { icon: "🔒", title: "Secure Payment", desc: "256-bit SSL encrypted" },
        ].map((t, i) => (
          <div key={i} style={{ background: "white", borderRadius: 14, padding: "20px 15px", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", transition: "transform 0.3s", cursor: "pointer" }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>{t.icon}</div>
            <div style={{ fontWeight: 900, fontSize: "1rem", color: "#111", marginBottom: 4 }}>{t.title}</div>
            <div style={{ fontSize: "0.8rem", color: "#888" }}>{t.desc}</div>
          </div>
        ))}
      </div>

      {/* BOTTOM PROMO BANNER */}
      <div className="fy-animate-5 fy-promo-banner">
        <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", height: "200px" }}>
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&auto=format&fit=crop" alt="Sale" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)", display: "flex", alignItems: "center", padding: "0 5%" }}>
            <div>
              <div style={{ color: "#ffc107", fontWeight: "900", fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>🎁 Limited Time Offer</div>
              <h2 style={{ color: "white", fontSize: "2.5rem", fontWeight: "900", margin: "0 0 10px" }}>Freedom Sale is LIVE!</h2>
              <button style={{ padding: "12px 30px", background: "#f26f21", color: "white", border: "none", borderRadius: "30px", fontWeight: "900", fontSize: "1rem", cursor: "pointer" }}>Shop Now →</button>
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING NOW GALLERY */}
      <div className="fy-animate-5" style={{ padding: "0 15px", marginBottom: "30px" }}>
        <div className="fy-section-heading"><span>📈 Trending Now</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 15 }}>
          {[
            { tag: "Gadgets", name: "Drone 4K Pro", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=300&auto=format&fit=crop", price: "₹29,990" },
            { tag: "Fashion", name: "Denim Jacket", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300&auto=format&fit=crop", price: "₹1,499" },
            { tag: "Decor", name: "Ceramic Vases", img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=300&auto=format&fit=crop", price: "₹799" },
            { tag: "Fitness", name: "Smart Kettlebell", img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=300&auto=format&fit=crop", price: "₹2,499" },
            { tag: "Audio", name: "Vintage Turntable", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=300&auto=format&fit=crop", price: "₹14,990" },
            { tag: "Gaming", name: "Wireless Controller", img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=300&auto=format&fit=crop", price: "₹4,990" },
          ].map((item, i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 220, cursor: "pointer", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
              onMouseOver={e => e.currentTarget.firstChild.style.transform = "scale(1.1)"}
              onMouseOut={e => e.currentTarget.firstChild.style.transform = "scale(1)"}>
              <div style={{ position: "absolute", inset: 0, transition: "transform 0.5s" }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}></div>
              <div style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", padding: "2px 8px", borderRadius: 4, color: "white", fontSize: "0.7rem", fontWeight: 700, marginBottom: 6 }}>{item.tag}</span>
                <div style={{ color: "white", fontWeight: 800, fontSize: "1rem", lineHeight: 1.2, marginBottom: 4 }}>{item.name}</div>
                <div style={{ color: "#00f5d4", fontWeight: 900, fontSize: "1.1rem" }}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUPER ADVANCED: SHOP THE LOOK (HOTSPOTS) */}
      <div className="fy-animate-5" style={{ marginBottom: "30px" }}>
        <div className="fy-section-heading"><span>✨ Shop the Look</span></div>
        <div className="fy-shop-look-container">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&auto=format&fit=crop" className="fy-shop-look-img" alt="Fashion Look" />
          
          {/* Hotspot 1: Sunglasses */}
          <div className="fy-hotspot" style={{ top: "25%", left: "45%" }}>
            <div className="fy-hotspot-card">
              <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&auto=format&fit=crop" alt="Sunglasses" />
              <div className="fy-hc-info">
                <div className="fy-hc-title">Retro Cat-Eye Sunglasses</div>
                <div className="fy-hc-price">₹1,299</div>
              </div>
            </div>
          </div>

          {/* Hotspot 2: Jacket */}
          <div className="fy-hotspot" style={{ top: "45%", left: "55%" }}>
            <div className="fy-hotspot-card">
              <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&auto=format&fit=crop" alt="Jacket" />
              <div className="fy-hc-info">
                <div className="fy-hc-title">Oversized Leather Jacket</div>
                <div className="fy-hc-price">₹4,499</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SUGGESTED FOR YOU (INFINITE SCROLL FEEL) */}
      <div className="fy-animate-6" style={{ marginBottom: "30px" }}>
        <div className="fy-section-heading"><span>🎯 Suggested for You</span></div>
        <div className="fy-suggested-grid">
          {suggestedItems.map((item, i) => (
            <div key={i} className="fy-suggested-card">
              <div className="fy-suggested-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="fy-suggested-info">
                <div className="fy-suggested-title">{item.title}</div>
                <div className="fy-suggested-price-row">
                  <span className="fy-suggested-price">{item.price}</span>
                  <span className="fy-suggested-old">{item.oldPrice}</span>
                  <span className="fy-suggested-discount">{item.discount}</span>
                </div>
                <button className="fy-suggested-quickview-btn" onClick={() => setQuickViewItem(item)}>
                  <span>⚡ Quick View</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUDGET STORE */}
      <div className="fy-animate-6" style={{ marginBottom: "30px" }}>
        <div className="fy-section-heading"><span>💸 Budget Store</span></div>
        <div className="fy-budget-grid">
          {budgetStoreItems.map((item, i) => (
            <div key={i} className="fy-budget-card">
              <img src={item.img} alt={item.title} />
              <div className="fy-budget-overlay">
                <span style={{ color: "#ff007f", fontWeight: 900, fontSize: "0.8rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>EVERYDAY LOW PRICE</span>
                <div style={{ color: "white", fontWeight: 900, fontSize: "2rem", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIVE SHOPPING */}
      <div className="fy-animate-6" style={{ marginBottom: "30px" }}>
        <div className="fy-section-heading">
          <span>🔴 Live Shopping</span>
          <span className="fy-view-all-text">View Schedule</span>
        </div>
        <div className="fy-live-grid">
          {liveShoppingVideos.map((video, i) => (
            <div key={i} className="fy-live-card">
              <img src={video.img} alt={video.title} />
              <div className="fy-live-badge">
                <span style={{ display: "inline-block", width: 8, height: 8, background: "white", borderRadius: "50%" }}></span>
                {video.time}
              </div>
              <div className="fy-live-info">
                <div style={{ color: "#00f5d4", fontWeight: 800, fontSize: "0.85rem", marginBottom: 5 }}>👁️ {video.viewers} watching</div>
                <div style={{ fontWeight: 900, fontSize: "1.2rem", lineHeight: 1.3 }}>{video.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* STICKY BOTTOM NAV (Mobile View) */}
      <div className="fy-sticky-nav">
        <div className="fy-nav-item active">
          <span>🏠</span>
          <small>Home</small>
        </div>
        <div className="fy-nav-item">
          <span>🔍</span>
          <small>Search</small>
        </div>
        <div className="fy-nav-item">
          <span>🛍️</span>
          <small>Categories</small>
        </div>
        <div className="fy-nav-item">
          <span>❤️</span>
          <small>Wishlist</small>
        </div>
        <div className="fy-nav-item">
          <span>👤</span>
          <small>Account</small>
        </div>
      </div>

      {/* FLOATING CART BUTTON */}
      <div className="fy-floating-cart">
        🛒
        <div className="fy-cart-badge">2</div>
      </div>

      {/* PROPER WORKING FEATURE: QUICK VIEW MODAL */}
      {quickViewItem && (
        <div className="fy-quickview-overlay" onClick={() => setQuickViewItem(null)}>
          <div className="fy-quickview-modal" onClick={e => e.stopPropagation()}>
            <button className="fy-quickview-close" onClick={() => setQuickViewItem(null)}>×</button>
            <div className="fy-qv-image">
              <img src={quickViewItem.img} alt={quickViewItem.title} />
            </div>
            <div className="fy-qv-details">
              <div className="fy-qv-title">{quickViewItem.title || quickViewItem.name}</div>
              <div className="fy-qv-price-row">
                <span className="fy-qv-price">{quickViewItem.price}</span>
                {quickViewItem.oldPrice && <span className="fy-qv-oldprice">{quickViewItem.oldPrice}</span>}
                {quickViewItem.discount && <span className="fy-qv-discount">{quickViewItem.discount}</span>}
              </div>
              <div className="fy-qv-subtitle">Select Variant</div>
              <div className="fy-qv-variants">
                <div className="fy-qv-var active">S</div>
                <div className="fy-qv-var">M</div>
                <div className="fy-qv-var">L</div>
                <div className="fy-qv-var">XL</div>
              </div>
              <div className="fy-qv-actions">
                <button className="fy-qv-add" onClick={() => { alert('Added to Mega Cart!'); setQuickViewItem(null); }}>Add to Bag 🛍️</button>
                <div className="fy-qv-wishlist">♡</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BRAND COLLECTION MODAL */}
      {activeBrandModal && (
        <div className="fy-brand-modal-overlay" onClick={() => setActiveBrandModal(null)}>
          <div className="fy-brand-modal-content" onClick={e => e.stopPropagation()}>
            <div className="fy-brand-modal-close" onClick={() => setActiveBrandModal(null)}>×</div>
            <div className="fy-brand-modal-header">
              <img src={activeBrandModal.img} alt={activeBrandModal.name} />
              <div>
                <h2>{activeBrandModal.name} Collection</h2>
                <p>{activeBrandModal.offer}</p>
              </div>
            </div>
            <div className="fy-brand-items-grid">
              {activeBrandModal.items.map((item, i) => (
                <div key={i} className="fy-brand-item-card">
                  <img src={item.img} alt={item.name} />
                  <div className="fy-brand-item-info">
                    <h4>{item.name}</h4>
                    <div className="fy-brand-item-pricing">
                      <span className="price">{item.price}</span>
                      {item.oldPrice && <small className="old-price">{item.oldPrice}</small>}
                      {item.discount && <span className="discount">{item.discount}</span>}
                    </div>
                    <button className="fy-brand-item-btn" onClick={() => { setActiveBrandModal(null); setQuickViewItem({ title: item.name, price: item.price, oldPrice: item.oldPrice, discount: item.discount, img: item.img, tag: activeBrandModal.name, category: "Brand Collection" }); }}>Quick View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ForYouHubView;
