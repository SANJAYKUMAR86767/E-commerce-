import React from "react";

const GenericHubView = ({ categoryId }) => {
  const hubData = {
    home: {
      title: "Home & Living",
      bg: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
      accent: "#00cec9",
      banner: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🏠 Furnishing Essentials",
          items: [
            { name: "Premium Bedsheets Set", brand: "Bombay Dyeing", price: "₹999", oldPrice: "₹2,499", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop" },
            { name: "Blackout Curtains Pair", brand: "Kuber Industries", price: "₹649", oldPrice: "₹1,299", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop" },
            { name: "Memory Foam Pillow", brand: "Sleepyhead", price: "₹799", oldPrice: "₹1,599", img: "https://images.unsplash.com/photo-1584100936595-c0c9f1daf134?w=400&auto=format&fit=crop" },
            { name: "Persian Carpet 5x7", brand: "Status", price: "₹1,499", oldPrice: "₹3,999", img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🎨 Home Decor",
          items: [
            { name: "Wall Art Canvas Set", brand: "Art Street", price: "₹599", oldPrice: "₹1,299", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop" },
            { name: "Vintage Wall Clock", brand: "Ajanta", price: "₹449", oldPrice: "₹899", img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&auto=format&fit=crop" },
            { name: "Indoor Money Plant", brand: "Ugaoo", price: "₹299", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop" },
            { name: "LED String Fairy Lights", brand: "Quace", price: "₹199", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🍳 Kitchen & Dining",
          items: [
            { name: "Non-Stick Cookware Set 5pc", brand: "Prestige", price: "₹1,299", oldPrice: "₹2,999", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop" },
            { name: "Ceramic Dinner Set 21pc", brand: "Cello", price: "₹1,599", oldPrice: "₹3,499", img: "https://images.unsplash.com/photo-1616629969032-4d515a6b7e07?w=400&auto=format&fit=crop" },
            { name: "Steel Water Bottle 1L", brand: "Milton", price: "₹349", oldPrice: "₹699", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&auto=format&fit=crop" },
            { name: "Glass Jar Container Set", brand: "Borosil", price: "₹899", oldPrice: "₹1,899", img: "https://images.unsplash.com/photo-1585237672814-8922ccc51d47?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    appliances: {
      title: "Home Appliances",
      bg: "linear-gradient(135deg, #0c3547 0%, #1a2a6c 100%)",
      accent: "#3498db",
      banner: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "📺 Large Appliances",
          items: [
            { name: "55\" 4K Smart LED TV", brand: "Samsung", price: "₹32,999", oldPrice: "₹64,999", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop" },
            { name: "7kg Front Load Washer", brand: "LG", price: "₹25,499", oldPrice: "₹42,999", img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=400&auto=format&fit=crop" },
            { name: "1.5 Ton Inverter Split AC", brand: "Daikin", price: "₹34,990", oldPrice: "₹58,999", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&auto=format&fit=crop" },
            { name: "260L Double Door Fridge", brand: "Whirlpool", price: "₹21,999", oldPrice: "₹35,999", img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "⚡ Small Appliances",
          items: [
            { name: "Solo Microwave 20L", brand: "Samsung", price: "₹5,999", oldPrice: "₹9,499", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&auto=format&fit=crop" },
            { name: "Mixer Grinder 750W", brand: "Bajaj", price: "₹2,899", oldPrice: "₹4,999", img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&auto=format&fit=crop" },
            { name: "RO Water Purifier 7L", brand: "Kent", price: "₹12,499", oldPrice: "₹21,000", img: "https://images.unsplash.com/photo-1625480865648-3cf8c1108da7?w=400&auto=format&fit=crop" },
            { name: "Steam Iron 1600W", brand: "Philips", price: "₹1,299", oldPrice: "₹2,499", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    "toys-baby": {
      title: "Toys & Baby Care",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accent: "#e84393",
      banner: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🧸 Toys & Games",
          items: [
            { name: "LEGO City Police Set 300pc", brand: "LEGO", price: "₹2,499", oldPrice: "₹4,999", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&auto=format&fit=crop" },
            { name: "Giant Teddy Bear 4ft", brand: "Deals India", price: "₹899", oldPrice: "₹2,499", img: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=400&auto=format&fit=crop" },
            { name: "RC Monster Truck 4WD", brand: "Hot Wheels", price: "₹1,599", oldPrice: "₹3,499", img: "https://images.unsplash.com/photo-1581235707679-97370c25aa62?w=400&auto=format&fit=crop" },
            { name: "Board Games Mega Pack", brand: "Funskool", price: "₹699", oldPrice: "₹1,299", img: "https://images.unsplash.com/photo-1606503153255-59d5e417c4ed?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "👶 Baby Essentials",
          items: [
            { name: "Baby Diapers Pack 72pcs", brand: "Pampers", price: "₹899", oldPrice: "₹1,399", img: "https://images.unsplash.com/photo-1584839404210-0a11e9e1efbf?w=400&auto=format&fit=crop" },
            { name: "Baby Stroller Foldable", brand: "LuvLap", price: "₹4,999", oldPrice: "₹9,999", img: "https://images.unsplash.com/photo-1591534607433-3a2b9060f926?w=400&auto=format&fit=crop" },
            { name: "Organic Baby Lotion 200ml", brand: "Mamaearth", price: "₹299", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop" },
            { name: "STEM Learning Robot Kit", brand: "Smartivity", price: "₹1,299", oldPrice: "₹2,499", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    food: {
      title: "Food & Beverages",
      bg: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
      accent: "#e17055",
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🍫 Snacks & Chocolates",
          items: [
            { name: "Cadbury Celebrations Gift Pack", brand: "Cadbury", price: "₹399", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&auto=format&fit=crop" },
            { name: "Haldiram's Namkeen Combo", brand: "Haldiram's", price: "₹299", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop" },
            { name: "Lay's Party Pack 250g", brand: "Lay's", price: "₹149", oldPrice: "₹199", img: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&auto=format&fit=crop" },
            { name: "Mixed Dry Fruits Box 1kg", brand: "Nutraj", price: "₹899", oldPrice: "₹1,499", img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🥤 Beverages & Staples",
          items: [
            { name: "Green Tea 100 Bags", brand: "Organic India", price: "₹349", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop" },
            { name: "Cold Brew Coffee 500ml", brand: "Sleepy Owl", price: "₹299", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop" },
            { name: "Basmati Rice Premium 5kg", brand: "India Gate", price: "₹499", oldPrice: "₹799", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop" },
            { name: "Extra Virgin Olive Oil 1L", brand: "Borges", price: "₹699", oldPrice: "₹1,199", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    "auto-acc": {
      title: "Auto Accessories",
      bg: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      accent: "#fdcb6e",
      banner: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🚗 Car Essentials",
          items: [
            { name: "Premium Seat Covers Set", brand: "AutoFurnish", price: "₹2,999", oldPrice: "₹5,999", img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&auto=format&fit=crop" },
            { name: "4K Dual Dash Cam", brand: "VIOFO", price: "₹8,499", oldPrice: "₹14,999", img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&auto=format&fit=crop" },
            { name: "Car Air Freshener Luxury", brand: "Godrej Aer", price: "₹299", oldPrice: "₹450", img: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=400&auto=format&fit=crop" },
            { name: "3D Floor Mats Full Set", brand: "7D", price: "₹1,999", oldPrice: "₹3,999", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🏍️ Bike Gear",
          items: [
            { name: "Full Face Helmet ISI", brand: "Studds", price: "₹1,099", oldPrice: "₹2,199", img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=400&auto=format&fit=crop" },
            { name: "Riding Leather Gloves", brand: "Royal Enfield", price: "₹1,499", oldPrice: "₹2,999", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&auto=format&fit=crop" },
            { name: "Engine Oil 10W30 1L", brand: "Motul", price: "₹699", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&auto=format&fit=crop" },
            { name: "Waterproof Bike Cover", brand: "Rainguard", price: "₹449", oldPrice: "₹899", img: "https://images.unsplash.com/photo-1558980394-da1f85af8ffe?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    sports: {
      title: "Sports & Fitness",
      bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      accent: "#00b894",
      banner: "https://images.unsplash.com/photo-1461896836934-bd45ba00a4c3?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🏏 Cricket & Football",
          items: [
            { name: "English Willow Bat Grade 1", brand: "SG", price: "₹4,999", oldPrice: "₹9,999", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&auto=format&fit=crop" },
            { name: "Training Football Size 5", brand: "Nivia", price: "₹799", oldPrice: "₹1,499", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&auto=format&fit=crop" },
            { name: "Complete Cricket Kit", brand: "Kookaburra", price: "₹3,499", oldPrice: "₹7,999", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&auto=format&fit=crop" },
            { name: "Football Shoes Studs", brand: "Adidas", price: "₹2,499", oldPrice: "₹4,999", img: "https://images.unsplash.com/photo-1509255929945-586a420363cf?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "💪 Fitness & Gym",
          items: [
            { name: "Hex Dumbbell Set 20kg", brand: "Boldfit", price: "₹2,499", oldPrice: "₹4,999", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop" },
            { name: "Yoga Mat 6mm Anti-Slip", brand: "Strauss", price: "₹499", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&auto=format&fit=crop" },
            { name: "Whey Protein 1kg", brand: "MuscleBlaze", price: "₹1,999", oldPrice: "₹3,499", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2c910?w=400&auto=format&fit=crop" },
            { name: "Resistance Bands Set 5pc", brand: "Fitlastics", price: "₹399", oldPrice: "₹899", img: "https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    furniture: {
      title: "Furniture Store",
      bg: "linear-gradient(135deg, #3c1053 0%, #ad5389 100%)",
      accent: "#a29bfe",
      banner: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🛋️ Living Room",
          items: [
            { name: "3-Seater Fabric Sofa", brand: "Wakefit", price: "₹12,999", oldPrice: "₹24,999", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop" },
            { name: "Engineered Wood TV Unit", brand: "Amazon Brand", price: "₹4,999", oldPrice: "₹9,999", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&auto=format&fit=crop" },
            { name: "Coffee Table Sheesham", brand: "Induscraft", price: "₹3,499", oldPrice: "₹6,999", img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop" },
            { name: "6-Tier Shoe Rack", brand: "FLIPZON", price: "₹899", oldPrice: "₹1,999", img: "https://images.unsplash.com/photo-1595354921612-e25dfec50ba9?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🛏️ Bedroom & Office",
          items: [
            { name: "Queen Size Bed with Storage", brand: "Wakefit", price: "₹14,999", oldPrice: "₹29,999", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop" },
            { name: "3-Door Wardrobe Engineered", brand: "HomeTown", price: "₹10,999", oldPrice: "₹19,999", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&auto=format&fit=crop" },
            { name: "Ergonomic Office Chair", brand: "Green Soul", price: "₹8,999", oldPrice: "₹15,999", img: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=400&auto=format&fit=crop" },
            { name: "Study Desk with Drawer", brand: "DeckUp", price: "₹5,499", oldPrice: "₹10,999", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    books: {
      title: "Books & Stationery",
      bg: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
      accent: "#74b9ff",
      banner: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "📚 Bestselling Books",
          items: [
            { name: "Atomic Habits - James Clear", brand: "Self-Help", price: "₹299", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop" },
            { name: "The Psychology of Money", brand: "Finance", price: "₹249", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop" },
            { name: "Ikigai: Japanese Secret", brand: "Philosophy", price: "₹199", oldPrice: "₹399", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&auto=format&fit=crop" },
            { name: "Rich Dad Poor Dad", brand: "Finance", price: "₹299", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "✏️ Stationery & Exam Prep",
          items: [
            { name: "Parker Jotter Pen Gift Set", brand: "Parker", price: "₹599", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&auto=format&fit=crop" },
            { name: "JEE Mains Complete Guide", brand: "Arihant", price: "₹699", oldPrice: "₹1,299", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop" },
            { name: "Art Supplies Sketch Kit", brand: "Faber-Castell", price: "₹499", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop" },
            { name: "Scientific Calculator", brand: "Casio", price: "₹799", oldPrice: "₹1,295", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
    "2-wheeler": {
      title: "2-Wheeler Zone",
      bg: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
      accent: "#e74c3c",
      banner: "https://images.unsplash.com/photo-1558980394-da1f85af8ffe?w=1400&auto=format&fit=crop",
      sections: [
        {
          title: "🏍️ Popular 2-Wheelers",
          items: [
            { name: "Classic 350 Reborn", brand: "Royal Enfield", price: "₹1,93,000", oldPrice: "₹2,10,000", img: "https://images.unsplash.com/photo-1558980394-da1f85af8ffe?w=400&auto=format&fit=crop" },
            { name: "Jupiter 125 BS6", brand: "TVS", price: "₹73,400", oldPrice: "₹80,000", img: "https://images.unsplash.com/photo-1571646750052-e75a43e52d08?w=400&auto=format&fit=crop" },
            { name: "Ather 450X Gen 3", brand: "Ather Energy", price: "₹1,31,000", oldPrice: "₹1,49,000", img: "https://images.unsplash.com/photo-1571646750052-e75a43e52d08?w=400&auto=format&fit=crop" },
            { name: "FZ-S V3.0 Deluxe", brand: "Yamaha", price: "₹1,23,000", oldPrice: "₹1,35,000", img: "https://images.unsplash.com/photo-1558980394-da1f85af8ffe?w=400&auto=format&fit=crop" },
          ]
        },
        {
          title: "🧥 Riding Gear",
          items: [
            { name: "Full-Face Helmet DOT", brand: "Steelbird", price: "₹1,299", oldPrice: "₹2,499", img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=400&auto=format&fit=crop" },
            { name: "Armoured Riding Jacket", brand: "Rynox", price: "₹4,999", oldPrice: "₹8,999", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&auto=format&fit=crop" },
            { name: "Knee Guard Set Pro", brand: "Biking Brotherhood", price: "₹1,799", oldPrice: "₹3,499", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&auto=format&fit=crop" },
            { name: "Waterproof Riding Boots", brand: "Solecraft", price: "₹2,999", oldPrice: "₹5,999", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" },
          ]
        }
      ]
    },
  };

  const data = hubData[categoryId] || hubData.home;

  return (
    <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto", background: "#f8f9fa", paddingBottom: 40 }}>

      {/* LIVE DEALS TICKER */}
      <div style={{ background: data.bg, color: "white", padding: "10px 0", overflow: "hidden", fontWeight: 700, fontSize: "0.9rem" }}>
        <div style={{ display: "inline-block", whiteSpace: "nowrap", animation: "fyTicker 35s linear infinite" }}>
          🔥 {data.title} MEGA SALE — Up to 70% Off on Premium Products &bull; ⚡ Limited Time Deals &bull; 🚚 Free Delivery on ₹499+ &bull; 💳 Extra 10% Bank Discount &bull; 🎁 Buy 2 Get 1 Free &bull; 🔥 {data.title} MEGA SALE
        </div>
      </div>

      {/* HERO BANNER */}
      <div style={{ position: "relative", height: 350, overflow: "hidden" }}>
        <img src={data.banner} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 6%" }}>
          <div style={{ color: data.accent, fontWeight: 900, fontSize: "0.9rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>✨ EXCLUSIVE DEALS</div>
          <h1 style={{ color: "white", fontSize: "4rem", fontWeight: 900, margin: "0 0 10px", textShadow: "2px 4px 15px rgba(0,0,0,0.5)" }}>{data.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: 500 }}>Premium products at unbeatable prices. Shop now and save big!</p>
          <button style={{ marginTop: 20, padding: "14px 35px", background: data.accent, color: "#111", border: "none", borderRadius: 30, fontWeight: 900, fontSize: "1rem", cursor: "pointer", width: "fit-content", boxShadow: `0 8px 25px ${data.accent}50` }}>
            Explore All →
          </button>
        </div>
      </div>

      {/* TRENDING TAGS */}
      <div style={{ padding: "20px 20px 0", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {["🔥 Hot Deals", "⭐ Top Rated", "🆕 New Arrivals", "💰 Under ₹999", "🏷️ Clearance", "🎁 Gift Sets", "📦 Combo Offers"].map((tag, i) => (
          <button key={i} style={{ padding: "8px 18px", borderRadius: 25, border: "1px solid #e0e0e0", background: i === 0 ? "#111" : "white", color: i === 0 ? "white" : "#555", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", transition: "all 0.3s" }}
            onMouseOver={e => { e.target.style.background = "#111"; e.target.style.color = "white"; e.target.style.borderColor = "#111"; }}
            onMouseOut={e => { if (i !== 0) { e.target.style.background = "white"; e.target.style.color = "#555"; e.target.style.borderColor = "#e0e0e0"; } }}>
            {tag}
          </button>
        ))}
      </div>

      {/* PRODUCT SECTIONS */}
      {data.sections.map((section, si) => (
        <div key={si} style={{ padding: "30px 20px 10px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#111", marginBottom: 20 }}>{section.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {section.items.map((item, i) => (
              <div key={i} style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 25px rgba(0,0,0,0.07)", transition: "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)", cursor: "pointer" }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.15)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.07)"; }}>
                <div style={{ position: "relative", height: 240, overflow: "hidden", background: "#f5f5f7" }}>
                  {i === 0 && <span style={{ position: "absolute", top: 12, left: 12, background: "linear-gradient(90deg,#ff1493,#ff4500)", color: "white", padding: "4px 10px", borderRadius: 6, fontSize: "0.75rem", fontWeight: 900, zIndex: 2 }}>🔥 BESTSELLER</span>}
                  {i === 1 && <span style={{ position: "absolute", top: 12, left: 12, background: "#111", color: "#ffd700", padding: "4px 10px", borderRadius: 6, fontSize: "0.75rem", fontWeight: 900, zIndex: 2 }}>⭐ TOP RATED</span>}
                  {i === 2 && <span style={{ position: "absolute", top: 12, left: 12, background: "#00b894", color: "white", padding: "4px 10px", borderRadius: 6, fontSize: "0.75rem", fontWeight: 900, zIndex: 2 }}>🆕 NEW</span>}
                  <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.9)", color: "#e91e63", width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", zIndex: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>♡</span>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }}
                    onMouseOver={e => e.target.style.transform = "scale(1.1)"}
                    onMouseOut={e => e.target.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 900, color: data.accent, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 5 }}>{item.brand}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#222", marginBottom: 6, lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                    <span style={{ color: "#ffc107", fontSize: "0.85rem" }}>★★★★★</span>
                    <span style={{ fontSize: "0.75rem", color: "#888" }}>(4.{5 + i})</span>
                    <span style={{ fontSize: "0.7rem", color: "#888", marginLeft: 4 }}>{(1200 + i * 340)} reviews</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#111" }}>{item.price}</span>
                    <span style={{ fontSize: "0.9rem", color: "#aaa", textDecoration: "line-through" }}>{item.oldPrice}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#00b894" }}>50% OFF</span>
                  </div>
                  <button style={{ width: "100%", padding: 12, background: "#111", color: "white", border: "none", borderRadius: 10, fontWeight: "bold", fontSize: "0.95rem", cursor: "pointer", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                    onMouseOver={e => { e.target.style.background = data.accent; e.target.style.color = "#111"; }}
                    onMouseOut={e => { e.target.style.background = "#111"; e.target.style.color = "white"; }}>
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CUSTOMER REVIEWS */}
      <div style={{ padding: "20px 20px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#111", marginBottom: 20 }}>⭐ What Customers Say</h2>
        <div style={{ display: "flex", gap: 15, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 10 }}>
          {[
            { name: "Priya Sharma", rating: 5, text: "Amazing quality! Got it at such a great price. Totally worth it. Will order again!" },
            { name: "Rahul Verma", rating: 5, text: "Fast delivery and genuine products. The packaging was perfect. Highly recommend!" },
            { name: "Ananya Patel", rating: 4, text: "Very good value for money. Slightly exceeded my expectations. Happy with the purchase." },
            { name: "Vikram Singh", rating: 5, text: "Flipkart never disappoints! Best prices compared to any other platform. Love it!" },
          ].map((review, i) => (
            <div key={i} style={{ minWidth: 280, background: "white", borderRadius: 14, padding: 20, boxShadow: "0 4px 15px rgba(0,0,0,0.06)", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `hsl(${i * 80}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: "1.2rem" }}>
                  {review.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#222", fontSize: "0.95rem" }}>{review.name}</div>
                  <div style={{ color: "#ffc107", fontSize: "0.85rem" }}>{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}</div>
                </div>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#aaa", fontWeight: 600 }}>Verified ✓</span>
              </div>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 15, padding: "10px 20px" }}>
        {[
          { icon: "🚚", title: "Free Delivery", desc: "On ₹499+" },
          { icon: "🔄", title: "Easy Returns", desc: "30 days" },
          { icon: "✅", title: "100% Genuine", desc: "Authentic products" },
          { icon: "🔒", title: "Secure Pay", desc: "SSL encrypted" },
        ].map((t, i) => (
          <div key={i} style={{ background: "white", borderRadius: 14, padding: "18px 12px", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", transition: "transform 0.3s", cursor: "pointer" }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ fontSize: "2rem", marginBottom: 6 }}>{t.icon}</div>
            <div style={{ fontWeight: 900, fontSize: "0.9rem", color: "#111", marginBottom: 3 }}>{t.title}</div>
            <div style={{ fontSize: "0.75rem", color: "#888" }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericHubView;
