/* eslint-disable */
// Flipkart E-Commerce Home Page Component
import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import CategoryNav from "./CategoryNav.js";
import FashionOccasionNav from "./FashionOccasionNav.js";
import FashionHubView from "./FashionHubView.js";
import ForYouHubView from "./ForYouHubView.js";
import MobilesHubView from "./MobilesHubView.js";
import BeautyHubView from "./BeautyHubView.js";
import ElectronicsHubView from "./ElectronicsHubView.js";
import GenericHubView from "./GenericHubView.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Carousel from "react-material-ui-carousel";

const bannerImages = [
  {
    title: "BIG BILLION DAYS SALE",
    subtitle: "Up to 80% OFF on Top Laptops, Smart TV, Audio & Gadgets",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    badge: "⚡ LIVE NOW",
    bankBadge: "💳 Extra 10% Instant Discount on SBI & ICICI Cards",
    image1: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop"
  },
  {
    title: "PREMIUM SMARTPHONES HUB 2026",
    subtitle: "Extra ₹3,000 Off on Exchange + No Cost EMI up to 24 Months",
    gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    badge: "🔥 BEST PRICES GUARANTEED",
    bankBadge: "💳 HDFC Bank ₹5,000 Instant Cashback*",
    image1: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop"
  },
  {
    title: "PARIS & BOLLYWOOD FASHION 2026",
    subtitle: "Minimum 50% OFF on Zara, Manyavar, Nike & Top Designer Apparel",
    gradient: "linear-gradient(135deg, #0575e6 0%, #00f260 100%)",
    badge: "🌟 TRENDING FASHION WEEK",
    bankBadge: "🚚 Free Express Delivery + 30-Day Easy Return",
    image1: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop"
  }
];

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [topCategory, setTopCategory] = useState("for-you");
  const [topCategoryName, setTopCategoryName] = useState("For You");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Flipkart -- Big Savings Store" />

          {/* Top Flipkart Official Category Bar */}
          <CategoryNav
            activeCategory={topCategory}
            onSelectCategory={(catId, catName) => {
              setTopCategory(catId);
              setTopCategoryName(catName);
            }}
          />

          {topCategory === "fashion" ? (
            <FashionHubView />
          ) : topCategory === "for-you" ? (
            <ForYouHubView />
          ) : topCategory === "mobiles" ? (
            <MobilesHubView />
          ) : topCategory === "beauty" ? (
            <BeautyHubView />
          ) : topCategory === "electronics" ? (
            <ElectronicsHubView />
          ) : (
            <GenericHubView categoryId={topCategory} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
