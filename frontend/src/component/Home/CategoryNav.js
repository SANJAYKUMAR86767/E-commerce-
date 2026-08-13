import React from "react";
import "./CategoryNav.css";

/* ═════════════════════════════════════════════════════════════
   FLIPKART OFFICIAL TOP NAVIGATION CATEGORIES (Matching Screenshots)
═════════════════════════════════════════════════════════════ */
const flipkartCategories = [
  { 
    id: "for-you", name: "For You", icon: "🛍️", target: "home-top", 
    columns: [
      { title: "Trending Deals", items: ["Top Offers", "Festive Specials", "End of Season Sale", "Clearance", "Combo Offers"] },
      { title: "Personalized", items: ["Recommended for You", "Recently Viewed", "Wishlist Highlights", "SuperCoin Rewards"] }
    ] 
  },
  { 
    id: "fashion", name: "Fashion", icon: "👕", target: "tab", 
    columns: [
      { title: "Men's Wear", items: ["T-Shirts & Polos", "Casual & Formal Shirts", "Jeans & Trousers", "Ethnic Wear", "Winter Wear"] },
      { title: "Women's Wear", items: ["Sarees & Kurtas", "Western Dresses", "Tops & Tunics", "Lingerie & Sleepwear", "Jewellery"] },
      { title: "Kids & Baby", items: ["Boys' Clothing", "Girls' Clothing", "Baby Care", "School Supplies", "Kids' Watches"] },
      { title: "Footwear", items: ["Men's Sports Shoes", "Women's Heels", "Sneakers & Loafers", "Slippers & Flip Flops"] }
    ] 
  },
  { 
    id: "mobiles", name: "Mobiles", icon: "📱", target: "mobiles-store", 
    columns: [
      { title: "Top Brands", items: ["Apple iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "Vivo & Oppo"] },
      { title: "By Price", items: ["Under ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹50,000", "Premium Flagships"] },
      { title: "Accessories", items: ["Mobile Cases", "Screen Guards", "Fast Chargers", "Power Banks", "Cables"] }
    ] 
  },
  { 
    id: "electronics", name: "Electronics", icon: "💻", target: "electronics-store", 
    columns: [
      { title: "Computers", items: ["Gaming Laptops", "MacBooks", "Desktop PCs", "Monitors", "Printers"] },
      { title: "Cameras & Audio", items: ["DSLR & Mirrorless", "Action Cameras", "Headphones & TWS", "Home Theatre", "Soundbars"] },
      { title: "Smart Gadgets", items: ["Smartwatches", "Fitness Bands", "Tablets", "Smart Speakers", "Drones"] }
    ] 
  },
  { 
    id: "beauty", name: "Beauty", icon: "💄", target: "beauty-fragrance-store", 
    columns: [
      { title: "Makeup", items: ["Lipsticks", "Foundations", "Eye Shadow", "Nail Polish", "Makeup Brushes"] },
      { title: "Skincare", items: ["Face Wash", "Moisturizers", "Sunscreens", "Serums", "Face Masks"] },
      { title: "Haircare & Fragrance", items: ["Shampoos & Conditioners", "Hair Oils", "Perfumes & Deos", "Luxury Fragrances"] },
      { title: "Men's Grooming", items: ["Beard Oils", "Trimmers", "Shaving Kits", "Men's Face Wash"] }
    ] 
  },
  { 
    id: "home", name: "Home", icon: "🛋️", target: "home-appliances-store", 
    columns: [
      { title: "Home Furnishing", items: ["Bedsheets", "Blankets & Quilts", "Curtains", "Cushions", "Carpets & Rugs"] },
      { title: "Home Decor", items: ["Paintings", "Clocks", "Showpieces", "Wall Shelves", "Indoor Plants"] },
      { title: "Kitchen & Dining", items: ["Cookware Sets", "Dinner Sets", "Bottles & Flasks", "Cutlery", "Gas Stoves"] }
    ] 
  },
  { 
    id: "appliances", name: "Appliances", icon: "📺", target: "home-appliances-store", 
    columns: [
      { title: "Large Appliances", items: ["Televisions", "Washing Machines", "Air Conditioners", "Refrigerators", "Dishwashers"] },
      { title: "Small Appliances", items: ["Microwaves", "Mixer Grinders", "Water Purifiers", "Irons", "Vacuum Cleaners"] },
      { title: "Seasonal", items: ["Air Coolers", "Room Heaters", "Water Geysers", "Fans"] }
    ] 
  },
  { 
    id: "toys-baby", name: "Toys, baby", icon: "🧸", target: "kids-toys-khilona-store", 
    columns: [
      { title: "Toys & Games", items: ["Action Figures", "Soft Toys", "Board Games", "Puzzles", "Remote Control Cars"] },
      { title: "Baby Care", items: ["Diapers & Wipes", "Baby Food", "Baby Skincare", "Strollers & Prams", "Baby Bedding"] },
      { title: "Educational", items: ["Learning Toys", "STEM Kits", "Musical Toys", "Building Blocks"] }
    ] 
  },
  { 
    id: "food", name: "Food & ...", icon: "🧃", target: "snacks-beverages-store", 
    columns: [
      { title: "Snacks", items: ["Namkeen & Bhujia", "Chips & Wafers", "Biscuits & Cookies", "Popcorn", "Chocolates"] },
      { title: "Beverages", items: ["Cold Drinks", "Fruit Juices", "Tea & Coffee", "Energy Drinks", "Health Drinks"] },
      { title: "Staples & Dry Fruits", items: ["Almonds & Cashews", "Dates & Raisins", "Rice & Dal", "Cooking Oil", "Spices"] }
    ] 
  },
  { 
    id: "auto-acc", name: "Auto Acc...", icon: "🪖", target: "auto-sports-books-store", 
    columns: [
      { title: "Car Accessories", items: ["Car Perfumes", "Seat Covers", "Car Polish & Wax", "Dash Cams", "Floor Mats"] },
      { title: "Bike Accessories", items: ["Helmets", "Riding Gloves", "Bike Covers", "Engine Oils", "Chain Lubes"] }
    ] 
  },
  { 
    id: "sports", name: "Sports &...", icon: "🏏", target: "auto-sports-books-store", 
    columns: [
      { title: "Cricket & Football", items: ["Cricket Bats", "Cricket Kits", "Footballs", "Shoes", "Jerseys"] },
      { title: "Racquet Sports", items: ["Badminton Racquets", "Tennis Racquets", "Shuttlecocks", "Squash"] },
      { title: "Fitness & Gym", items: ["Dumbbells", "Yoga Mats", "Resistance Bands", "Treadmills", "Protein Supplements"] }
    ] 
  },
  { 
    id: "furniture", name: "Furniture", icon: "🪑", target: "home-appliances-store", 
    columns: [
      { title: "Living Room", items: ["Sofas & Recliners", "TV Units", "Coffee Tables", "Shoe Racks"] },
      { title: "Bedroom", items: ["Beds", "Wardrobes", "Mattresses", "Dressing Tables"] },
      { title: "Office & Study", items: ["Office Chairs", "Study Tables", "Bookshelves", "Computer Desks"] }
    ] 
  },
  { 
    id: "books", name: "Books & ...", icon: "📚", target: "auto-sports-books-store", 
    columns: [
      { title: "Popular Genres", items: ["Fiction & Literature", "Non-Fiction", "Self-Help & Motivation", "Biographies"] },
      { title: "Academics", items: ["School Books", "College Texts", "Exam Preparation", "Dictionaries"] },
      { title: "Kids & Teens", items: ["Children's Storybooks", "Comics & Mangas", "Young Adult"] }
    ] 
  },
  { 
    id: "2-wheeler", name: "2 Wheel...", icon: "🛵", target: "auto-sports-books-store", 
    columns: [
      { title: "Vehicles", items: ["Motorcycles", "Scooters", "Electric Scooters (EV)", "E-Bikes"] },
      { title: "Riding Gear", items: ["Riding Jackets", "Helmets", "Knee Guards", "Riding Boots"] }
    ] 
  },
];

const CategoryNav = ({ activeCategory, onSelectCategory }) => {
  const handleCategoryClick = (catId, catName, targetSection) => {
    if (onSelectCategory) {
      onSelectCategory(catId, catName);
    }
    
    // If it's a tab switch, we don't scroll
    if (targetSection === "tab") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetSection);
    if (element) {
      // Add offset for fixed navbar if any, otherwise standard scroll
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fkCatNavContainer" id="home-top">
      <div className="fkCatNavScroll">
        {flipkartCategories.map((cat) => {
          const isActive = (activeCategory || "for-you") === cat.id;

          return (
            <div
              key={cat.id}
              className={`fkCatItem ${isActive ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat.id, cat.name, cat.target)}
            >
              <div className="fkCatIconBox">
                <span className="fkEmojiIcon">{cat.icon}</span>
              </div>
              <span className="fkCatLabel">{cat.name} <span className="fkCaret">▼</span></span>
              {isActive && <div className="fkActiveIndicator" />}
              
              {/* FLIPKART MULTI-COLUMN MEGA MENU */}
              <div className="fkMegaMenu">
                {cat.columns.map((col, idx) => (
                  <div key={idx} className="fkMegaMenuCol">
                    <h5 className="fkMegaMenuColTitle">{col.title}</h5>
                    {col.items.map((item, i) => (
                      <div key={i} className="fkMegaMenuItem">{item}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;
