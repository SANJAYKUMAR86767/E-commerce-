import React, { useState, useRef, useEffect, useMemo } from "react";
import "./KidsToysSection.css";

/* ═══════════════════════════════════════════════════════════════
   CATEGORY PILLS — Matching user's screenshot categories
═══════════════════════════════════════════════════════════════ */
const TOY_PILLS = [
  { id: "all",       label: "🌟 All Toys",             icon: "🌟" },
  { id: "baby",      label: "👶 Baby & Infant",         icon: "👶" },
  { id: "activity",  label: "🎮 Activity & Learning",   icon: "🎮" },
  { id: "kitchen",   label: "🍳 Kitchen Playset",       icon: "🍳" },
  { id: "cars",      label: "🚗 Cars & Vehicles",       icon: "🚗" },
  { id: "girls",     label: "💄 Girls Beauty Set",      icon: "💄" },
  { id: "stem",      label: "🔧 STEM & Mechanic",       icon: "🔧" },
  { id: "edu",       label: "📚 Educational",           icon: "📚" },
  { id: "outdoor",   label: "⛳ Outdoor & Sports",      icon: "⛳" },
  { id: "cartoon",   label: "🦸 Cartoon & Characters",  icon: "🦸" },
  { id: "dance",     label: "🌵 Musical & Dancing",     icon: "🌵" },
  { id: "craft",     label: "🎨 Art & Craft",           icon: "🎨" },
];

/* ═══════════════════════════════════════════════════════════════
   26 UNIQUE KIDS TOYS — ALL DIFFERENT ITEMS
═══════════════════════════════════════════════════════════════ */
const TOYS = [
  {
    id: "ty01",
    name: "Fisher-Price 3-in-1 Music, Glow & Gym Baby Activity Gym Mat (0-3 Years)",
    brand: "Fisher-Price", cat: "baby",
    price: 1299, mrp: 2499, discount: 47, rating: 4.9, reviews: "89K",
    age: "0–3 yr", specs: "🎵 Music + Lights + Gym Mat · 5 Developmental Modes · Soft Plush Arch",
    badge: "👶 Newborn #1",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
  },
  {
    id: "ty02",
    name: "Kitmeer 5-in-1 Activity Triangle Wooden Baby Sensory Toy (6 Months+)",
    brand: "Kitmeer", cat: "baby",
    price: 899, mrp: 1799, discount: 50, rating: 4.8, reviews: "44K",
    age: "6M+", specs: "🪵 Solid Wood · 5 Sensory Boards · BIS Certified · Safe Paints",
    badge: "🌿 Wooden Safety",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
  },
  {
    id: "ty03",
    name: "AS TRADERS Dancing Singing Cactus Soft Plush Musical Toy (2 Yr+)",
    brand: "AS Traders", cat: "dance",
    price: 499, mrp: 999, discount: 50, rating: 4.8, reviews: "1.1L",
    age: "2+ yr", specs: "🌵 60+ Songs · Wiggle Dance · Record & Repeat · USB Rechargeable",
    badge: "🔥 Viral Hit Toy",
    img: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=600&auto=format&fit=crop"
  },
  {
    id: "ty04",
    name: "Buy Khilona House 36-Piece Kitchen Cooking Playset with Sink & Stove (3 Yr+)",
    brand: "Khilona House", cat: "kitchen",
    price: 799, mrp: 1499, discount: 46, rating: 4.8, reviews: "62K",
    age: "3+ yr", specs: "🍳 36 Pcs Set · Sink + Stove + Oven · Realistic Sound & Light",
    badge: "🍳 Kitchen Star",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&auto=format&fit=crop"
  },
  {
    id: "ty05",
    name: "Hot Wheels 20-Car Gift Pack Die-Cast Metal Collector Set (3 Yr+)",
    brand: "Hot Wheels", cat: "cars",
    price: 799, mrp: 1299, discount: 38, rating: 4.9, reviews: "2.4L",
    age: "3+ yr", specs: "🚗 20 Die-Cast Cars · 1:64 Scale · Collector Pack · 10 Exclusive Models",
    badge: "🏎️ Cars #1 Brand",
    img: "https://images.unsplash.com/photo-1568001518728-e4a9b68c5bd8?w=600&auto=format&fit=crop"
  },
  {
    id: "ty06",
    name: "Khilona Wala Toy Beauty Set Makeup Kit for Girls (Pink Suitcase, 4 Yr+)",
    brand: "Khilona Wala", cat: "girls",
    price: 599, mrp: 1199, discount: 50, rating: 4.7, reviews: "38K",
    age: "4+ yr", specs: "💄 Non-Toxic · Lipstick + Blush + Brush Set · Cute Pink Suitcase",
    badge: "💄 Girls' Favourite",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop"
  },
  {
    id: "ty07",
    name: "Meccano Kicz Early Development MECHANIX D 0 Metal Construction Set (8 Yr+)",
    brand: "Meccano Kicz", cat: "stem",
    price: 999, mrp: 1799, discount: 44, rating: 4.9, reviews: "28K",
    age: "8+ yr", specs: "🔧 218 Metal Parts · Build 30 Models · Real Tools · STEM Certified",
    badge: "🏆 STEM Winner",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
  },
  {
    id: "ty08",
    name: "Wooden Montessori Rainbow Handmade Arch Stacker Sorting Toy (1 Yr+)",
    brand: "Sounies", cat: "edu",
    price: 499, mrp: 999, discount: 50, rating: 4.8, reviews: "31K",
    age: "1+ yr", specs: "🌈 Non-Toxic Paint · 12 Stacking Arches · Montessori Certified",
    badge: "🌿 Montessori Pick",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
  },
  {
    id: "ty09",
    name: "Paradise Fruits & Vegetables 16-Piece Cutting Toy Set with Velcro (3 Yr+)",
    brand: "Paradise Toys", cat: "kitchen",
    price: 349, mrp: 699, discount: 50, rating: 4.8, reviews: "54K",
    age: "3+ yr", specs: "🥦 16 Realistic Veggies · Velcro-Cuttable · Knife + Board Included",
    badge: "🔪 Cut & Play",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&auto=format&fit=crop"
  },
  {
    id: "ty10",
    name: "Paw Patrol Rubble Construction Truck Mighty Pups Deluxe Vehicle (3 Yr+)",
    brand: "Spin Master", cat: "cartoon",
    price: 1299, mrp: 2199, discount: 40, rating: 4.9, reviews: "77K",
    age: "3+ yr", specs: "🐶 Light-Up Power · Rubble Figure Included · Dump Truck Mode",
    badge: "🐾 Paw Patrol Hero",
    img: "https://images.unsplash.com/photo-1568001518728-e4a9b68c5bd8?w=600&auto=format&fit=crop"
  },
  {
    id: "ty11",
    name: "Skillmatics Guess in 10 Animals & Habitats Card Game Educational (6 Yr+)",
    brand: "Skillmatics", cat: "edu",
    price: 449, mrp: 799, discount: 43, rating: 4.9, reviews: "41K",
    age: "6+ yr", specs: "📚 200 Questions · 2-8 Players · Boosts Critical Thinking · Award-Winning",
    badge: "🏅 Award-Winning",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop"
  },
  {
    id: "ty12",
    name: "Imagimake Mapology India Map Educational Jigsaw Puzzle (5 Yr+)",
    brand: "Imagimake", cat: "edu",
    price: 399, mrp: 749, discount: 46, rating: 4.9, reviews: "63K",
    age: "5+ yr", specs: "🗺️ 92 States & UTs · Map + Flash Cards · Made in India · EVA Foam",
    badge: "🇮🇳 Made in India",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
  },
  {
    id: "ty13",
    name: "Funskool Giggles My First Remote Control Bus (Yellow) (12M+)",
    brand: "Funskool", cat: "cars",
    price: 649, mrp: 1199, discount: 45, rating: 4.8, reviews: "22K",
    age: "12M+", specs: "🚌 2-Channel RC · Light & Sound · Extra-Large Safe Buttons · BIS Cert",
    badge: "👶 Baby RC Fun",
    img: "https://images.unsplash.com/photo-1568001518728-e4a9b68c5bd8?w=600&auto=format&fit=crop"
  },
  {
    id: "ty14",
    name: "LEGO Classic Large Creative Brick Box 900 Pieces Building Set (4 Yr+)",
    brand: "LEGO", cat: "stem",
    price: 2999, mrp: 4999, discount: 40, rating: 4.9, reviews: "1.8L",
    age: "4+ yr", specs: "🧱 900 Classic Bricks · 20 Build Ideas · Compatible All LEGO Sets",
    badge: "🧱 Build Anything",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
  },
  {
    id: "ty15",
    name: "Hamleys Musical Piano Mat Keyboard Floor Playmat Dance (1 Yr+)",
    brand: "Hamleys", cat: "dance",
    price: 799, mrp: 1499, discount: 46, rating: 4.8, reviews: "36K",
    age: "1+ yr", specs: "🎹 20 Keys · 8 Musical Instruments · Dance Mat + Piano Mode",
    badge: "🎵 Musical Magic",
    img: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=600&auto=format&fit=crop"
  },
  {
    id: "ty16",
    name: "Maisto Die-Cast Metal Farm Tractor Blue Realistic 1:16 Scale (3 Yr+)",
    brand: "Maisto", cat: "cars",
    price: 599, mrp: 999, discount: 40, rating: 4.8, reviews: "27K",
    age: "3+ yr", specs: "🚜 1:16 Scale · Die-Cast Metal · Steerable Wheels · Detailed Cab",
    badge: "🚜 Farm Tractor",
    img: "https://images.unsplash.com/photo-1568001518728-e4a9b68c5bd8?w=600&auto=format&fit=crop"
  },
  {
    id: "ty17",
    name: "Toyshine 3-in-1 Kids Kitchen Pretend Play Set with Stove, Sink, Cabinet (3 Yr+)",
    brand: "Toyshine", cat: "kitchen",
    price: 1499, mrp: 2999, discount: 50, rating: 4.9, reviews: "48K",
    age: "3+ yr", specs: "🍽️ 68 Accessories · Realistic Water Flow · Light+Sound · Fridge Included",
    badge: "🏆 Full Kitchen",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&auto=format&fit=crop"
  },
  {
    id: "ty18",
    name: "Barbie Dreamtopia Chelsea Mermaid Doll with Accessories (3 Yr+)",
    brand: "Barbie", cat: "girls",
    price: 699, mrp: 1199, discount: 41, rating: 4.9, reviews: "91K",
    age: "3+ yr", specs: "👑 Mermaid Tail · Glitter Hair · Ocean Accessories · Doll 7-Inch",
    badge: "✨ Barbie Magic",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop"
  },
  {
    id: "ty19",
    name: "Playdoh 10-Can Multicolour Compound Value Pack (3 Yr+)",
    brand: "Play-Doh", cat: "craft",
    price: 499, mrp: 899, discount: 44, rating: 4.9, reviews: "1.4L",
    age: "3+ yr", specs: "🎨 10 Bright Colours · Non-Toxic · 140g Each Can · Creative Sculpting",
    badge: "🎨 Creative Play",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
  },
  {
    id: "ty20",
    name: "Hasbro Nerf Elite 2.0 Echo CS-10 Blaster with 24 Darts (8 Yr+)",
    brand: "Nerf", cat: "outdoor",
    price: 1299, mrp: 2199, discount: 40, rating: 4.8, reviews: "58K",
    age: "8+ yr", specs: "🏹 24 Elite Darts · 90-Feet Range · Slam-Fire Mode · Customisable",
    badge: "🏹 Battle Ready",
    img: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=600&auto=format&fit=crop"
  },
  {
    id: "ty21",
    name: "Funskool Ranger Friction-Powered Jeep Toy with Sound (3 Yr+)",
    brand: "Funskool", cat: "cars",
    price: 349, mrp: 699, discount: 50, rating: 4.7, reviews: "19K",
    age: "3+ yr", specs: "🚙 Friction-Powered · Engine Sound · Military Style · No Batteries",
    badge: "⚡ Friction Power",
    img: "https://images.unsplash.com/photo-1568001518728-e4a9b68c5bd8?w=600&auto=format&fit=crop"
  },
  {
    id: "ty22",
    name: "Zing Klixx Fidget Sensory Chain Snap Pop Toy Stress Relief (6 Yr+)",
    brand: "Zing", cat: "activity",
    price: 199, mrp: 399, discount: 50, rating: 4.8, reviews: "76K",
    age: "6+ yr", specs: "🔗 60-Link Chain · Satisfying Snap & Pop · Stress Buster · ADHD Aid",
    badge: "😌 Stress Buster",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
  },
  {
    id: "ty23",
    name: "Topps Avengers Marvel Endgame Collector Cards Mega Tin Box (6 Yr+)",
    brand: "Topps Marvel", cat: "cartoon",
    price: 499, mrp: 899, discount: 44, rating: 4.8, reviews: "33K",
    age: "6+ yr", specs: "🦸 60 Foil Cards · 5 Rare Holographic · Collector Tin Storage Box",
    badge: "🦸 Marvel Collect",
    img: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=600&auto=format&fit=crop"
  },
  {
    id: "ty24",
    name: "Svan Wooden Push & Pull Rainbow Ring Pyramid Stacker Tower (1 Yr+)",
    brand: "Svan", cat: "baby",
    price: 699, mrp: 1399, discount: 50, rating: 4.9, reviews: "24K",
    age: "1+ yr", specs: "🌈 7 Rainbow Rings · Solid Wood · Push & Pull Handle · Eco Paint",
    badge: "🌿 Eco Wood Safe",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
  },
  {
    id: "ty25",
    name: "Crayola 120 Unique Colour Pencil Box Art Set for Kids (5 Yr+)",
    brand: "Crayola", cat: "craft",
    price: 999, mrp: 1799, discount: 44, rating: 4.9, reviews: "62K",
    age: "5+ yr", specs: "🖍️ 120 Vibrant Shades · Break-Resistant Core · Artist-Quality Colour",
    badge: "🎨 Artist's Choice",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop"
  },
  {
    id: "ty26",
    name: "Ok Play Zoom Ride-On Bike Balance Push Cycle for Toddlers (1–3 Yr)",
    brand: "Ok Play", cat: "outdoor",
    price: 1499, mrp: 2799, discount: 46, rating: 4.8, reviews: "39K",
    age: "1–3 yr", specs: "🚲 No Pedal Balance Bike · Foot-to-Floor · Anti-Slip Tires · Music Horn",
    badge: "🚲 Balance Champ",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
const KidsToysSection = () => {
  const cardsRef = useRef(null);
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");

  // Auto-rotating scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (!cardsRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        cardsRef.current.scrollBy({ left: 310, behavior: "smooth" });
      }
    }, 3100);
    return () => clearInterval(timer);
  }, [selectedCat]);

  const nav = (dir) =>
    cardsRef.current?.scrollBy({ left: dir === "l" ? -330 : 330, behavior: "smooth" });

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return TOYS.filter(p => {
      const catOk = selectedCat === "all" || p.cat === selectedCat;
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [selectedCat, search]);

  return (
    <section className="ktsSection" id="kids-toys-khilona-store">

      {/* ── HERO BANNER ── */}
      <div className="ktsBanner">
        {/* Left: Info */}
        <div className="ktsBannerLeft">
          <span className="ktsLiveChip">🧸 FLIPKART OFFICIAL KIDS TOYS & KHILONA STORE</span>
          <h2 className="ktsBanTitle">🎠 Kids Toys, Khilona & Baby Gifts</h2>
          <p className="ktsBanSub">
            Fisher-Price · LEGO · Hot Wheels · Barbie · Paw Patrol · Funskool · Skillmatics · Play-Doh · Nerf · Meccano
          </p>
          <div className="ktsBanStats">
            <div className="ktsStat"><span className="ktsStatNum">500+</span><span className="ktsStatLabel">Toys</span></div>
            <div className="ktsStat"><span className="ktsStatNum">40+</span><span className="ktsStatLabel">Top Brands</span></div>
            <div className="ktsStat"><span className="ktsStatNum">Up to 50%</span><span className="ktsStatLabel">OFF Today</span></div>
            <div className="ktsStat"><span className="ktsStatNum">100%</span><span className="ktsStatLabel">BIS Safe</span></div>
          </div>
        </div>
        {/* Right: Search + Nav */}
        <div className="ktsBannerRight">
          <input
            className="ktsSearch"
            type="text"
            placeholder="🔍 Search LEGO, Hot Wheels, Barbie..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="ktsNavRow">
            <button className="ktsNavBtn" onClick={() => nav("l")}>❮</button>
            <span className="ktsCountChip">{filtered.length} Toys</span>
            <button className="ktsNavBtn" onClick={() => nav("r")}>❯</button>
          </div>
        </div>
      </div>

      {/* ── CATEGORY PILLS ── */}
      <div className="ktsPillsBar">
        {TOY_PILLS.map(p => (
          <button
            key={p.id}
            className={`ktsPill ${selectedCat === p.id ? "ktsPillActive" : ""}`}
            onClick={() => { setSelectedCat(p.id); if (cardsRef.current) cardsRef.current.scrollLeft = 0; }}
          >
            <span className="ktsPillIcon">{p.icon}</span>
            <span className="ktsPillLabel">{p.label}</span>
          </button>
        ))}
      </div>

      {/* ── 3D CAROUSEL ── */}
      <div className="ktsCarousel" ref={cardsRef}>
        {filtered.length === 0 && (
          <div className="ktsEmpty">🔍 No toys found — try another category!</div>
        )}
        {filtered.map(toy => (
          <div key={toy.id} className="ktsCard">

            {/* IMAGE BOX */}
            <div className="ktsCardImgBox">
              <img src={toy.img} alt="" aria-hidden="true" className="ktsCardImg" />
              <span className="ktsDiscChip">-{toy.discount}%</span>
              <span className="ktsBadgeChip">{toy.badge}</span>
              <span className="ktsAgeChip">👦 Age: {toy.age}</span>
              {/* Hover Overlay */}
              <div className="ktsCardOverlay">
                <button className="ktsOvView">👁 Quick View</button>
                <button className="ktsOvBuy">⚡ Buy Now</button>
              </div>
            </div>

            {/* CARD BODY */}
            <div className="ktsCardBody">
              <span className="ktsBrandLabel">{toy.brand}</span>
              <h4 className="ktsCardTitle">{toy.name}</h4>
              <div className="ktsSpecsRow">{toy.specs}</div>
              <div className="ktsRatingRow">
                <span className="ktsStars">★ {toy.rating}</span>
                <span className="ktsRevs">({toy.reviews} reviews)</span>
              </div>
              <div className="ktsPriceRow">
                <span className="ktsPrice">₹{toy.price.toLocaleString("en-IN")}</span>
                <span className="ktsMrp">₹{toy.mrp.toLocaleString("en-IN")}</span>
                <span className="ktsSaved">Save ₹{(toy.mrp - toy.price).toLocaleString("en-IN")}</span>
              </div>
              <div className="ktsFreeTag">🚚 Free Delivery · ✅ BIS Safety Certified</div>
              <div className="ktsBtnRow">
                <button className="ktsCartBtn">🛒 Add to Cart</button>
                <button className="ktsBuyBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SAFETY TRUST STRIP ── */}
      <div className="ktsTrustStrip">
        <span>✅ BIS & IS:9873 Certified Safe</span>
        <span>🎁 Free Gift Wrapping</span>
        <span>🚚 Fast 1-Day Delivery</span>
        <span>🔄 30-Day Easy Returns</span>
        <span>🧪 Non-Toxic Materials Only</span>
        <span>💳 EMI from ₹99/month</span>
      </div>

    </section>
  );
};

export default KidsToysSection;
