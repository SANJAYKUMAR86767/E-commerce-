/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails } from "../../actions/orderAction";
import MetaData from "../layout/MetaData";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RefreshIcon from "@material-ui/icons/Refresh";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./LiveDeliveryTracker.css";

const STAGES = [
  {
    id: 1,
    title: "Order Placed & Confirmed",
    desc: "Order payment verified and sent to Flipkart Bangalore Hub.",
    time: "Today, 09:15 AM",
    location: "Flipkart Fulfillment Center, Bengaluru",
    riderPercent: 12,
    distanceKm: 850,
    timeMins: 360,
    statusText: "Packed & Verified"
  },
  {
    id: 2,
    title: "Shipped via Express Air Cargo",
    desc: "Package scanned at Central Hub and boarded BlueDart flight.",
    time: "Today, 11:30 AM",
    location: "Indira Gandhi Int. Airport Sort Center, Delhi",
    riderPercent: 40,
    distanceKm: 28,
    timeMins: 120,
    statusText: "In Transit"
  },
  {
    id: 3,
    title: "Arrived at Local Delivery Hub",
    desc: "Sorted and assigned to express courier dispatch van.",
    time: "Today, 01:45 PM",
    location: "Okhla Phase 3 Local Delivery Center, Delhi",
    riderPercent: 68,
    distanceKm: 6.4,
    timeMins: 45,
    statusText: "Ready for Dispatch"
  },
  {
    id: 4,
    title: "Out for Delivery (Rider on Way 🛵)",
    desc: "Delivery Hero Rajesh Kumar is en route to your doorstep.",
    time: "Today, 03:10 PM",
    location: "Connaught Place / Barakhamba Road, New Delhi",
    riderPercent: 88,
    distanceKm: 1.8,
    timeMins: 18,
    statusText: "Live Out for Delivery"
  },
  {
    id: 5,
    title: "Delivered to Doorstep 🎉",
    desc: "Package handed over safely with verified security OTP.",
    time: "Today, 03:32 PM",
    location: "Your Registered Home Address",
    riderPercent: 100,
    distanceKm: 0,
    timeMins: 0,
    statusText: "Delivered Successfully"
  }
];

const LiveDeliveryTracker = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const activeOrderId = (match && match.params && match.params.id) || "OD489201948291";
  const [trackingIdInput, setTrackingIdInput] = useState(activeOrderId);
  const [currentStageIdx, setCurrentStageIdx] = useState(3); // Default Stage: Out for Delivery (Live)
  const [riderCoord, setRiderCoord] = useState({ x: 74, y: 55 }); // Percentage coords on radar map
  const [liveDistance, setLiveDistance] = useState(1.8);
  const [liveMins, setLiveMins] = useState(18);
  const [riderSpeed, setRiderSpeed] = useState(36);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { order } = useSelector((state) => state.orderDetails || {});
  const { orders } = useSelector((state) => state.myOrders || {});

  useEffect(() => {
    if (match && match.params && match.params.id) {
      dispatch(getOrderDetails(match.params.id));
    }
  }, [dispatch, match]);

  // Coordinate mapping for SVG radar path
  const stageCoords = [
    { x: 18, y: 80 },  // Stage 1: Origin
    { x: 38, y: 50 },  // Stage 2: Air cargo
    { x: 58, y: 65 },  // Stage 3: Local Hub
    { x: 78, y: 40 },  // Stage 4: Out for delivery
    { x: 92, y: 24 }   // Stage 5: Doorstep
  ];

  useEffect(() => {
    const coord = stageCoords[currentStageIdx];
    if (coord) {
      setRiderCoord(coord);
      setLiveDistance(STAGES[currentStageIdx].distanceKm);
      setLiveMins(STAGES[currentStageIdx].timeMins);
    }
  }, [currentStageIdx]);

  // Periodic simulated live GPS ping (makes rider fluctuate slightly as if driving in traffic)
  useEffect(() => {
    if (currentStageIdx === 3) {
      const interval = setInterval(() => {
        setRiderSpeed(prev => Math.floor(32 + Math.random() * 12));
        setLiveDistance(prev => {
          if (prev > 0.4) return parseFloat((prev - 0.05).toFixed(2));
          return 0.3;
        });
        setLiveMins(prev => {
          if (prev > 3) return prev - 1;
          return 3;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentStageIdx]);

  const handleAdvanceSimulation = () => {
    setCurrentStageIdx((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0));
  };

  const handleRefreshLocation = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (trackingIdInput.trim()) {
      history.push(`/order/track/${encodeURIComponent(trackingIdInput.trim())}`);
    }
  };

  const activeStage = STAGES[currentStageIdx];
  const orderDetailsToShow = order && order._id ? order : null;
  const shippingAddress = orderDetailsToShow && orderDetailsToShow.shippingInfo
    ? `${orderDetailsToShow.shippingInfo.address}, ${orderDetailsToShow.shippingInfo.city} - ${orderDetailsToShow.shippingInfo.pinCode}`
    : "Flat 402, Royal Residency, Connaught Place, New Delhi - 110001";

  return (
    <div className="liveTrackerContainer">
      <MetaData title={`Live Delivery Radar -- ${activeOrderId}`} />

      {/* TOP BAR / BREADCRUMB */}
      <div className="trackerTopNav">
        <Link to="/orders" className="trackerBackBtn">
          <ArrowBackIcon style={{ fontSize: 18 }} />
          <span>My Orders</span>
        </Link>

        {/* TRACKING ID SEARCH */}
        <form onSubmit={handleSearchSubmit} className="trackerSearchForm">
          <input
            type="text"
            className="trackerSearchInput"
            placeholder="Enter Order / Tracking ID"
            value={trackingIdInput}
            onChange={(e) => setTrackingIdInput(e.target.value)}
          />
          <button type="submit" className="trackerSearchSubmit">
            Track
          </button>
        </form>
      </div>

      {/* HERO STATUS BANNER */}
      <div className="trackerHeroCard">
        <div className="trackerHeroTopRow">
          <div className="trackerOrderMeta">
            <h2>Live Package Delivery Radar</h2>
            <div>
              <span style={{ color: "#94a3b8", fontSize: "0.85rem", marginRight: "8px" }}>Tracking ID:</span>
              <span className="trackerOrderIdBadge">{activeOrderId}</span>
            </div>
          </div>

          <div className="trackerLivePulsePill">
            <span className="liveGpsDot"></span>
            <span>LIVE GPS RADAR ACTIVE</span>
          </div>
        </div>

        <div className="trackerHeroGrid">
          <div className="trackerStatItem">
            <small>Delivery Status</small>
            <span className="highlightText">{activeStage.statusText}</span>
          </div>
          <div className="trackerStatItem">
            <small>Estimated Arrival</small>
            <span>{currentStageIdx === 4 ? "Delivered Just Now" : `Today by 4:15 PM (~${liveMins} mins)`}</span>
          </div>
          <div className="trackerStatItem">
            <small>Remaining Distance</small>
            <span>{currentStageIdx === 4 ? "Arrived" : `${liveDistance} km away`}</span>
          </div>
          <div className="trackerStatItem">
            <small>Delivery Destination</small>
            <span style={{ fontSize: "0.95rem" }}>{shippingAddress.split(",")[0]}</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="trackerMainLayout">
        
        {/* LEFT COLUMN: INTERACTIVE RADAR MAP & TELEMETRY */}
        <div>
          <div className="radarMapContainer">
            <div className="radarMapHeader">
              <div className="radarMapTitle">
                <NavigationIcon style={{ color: "#2874f0", transform: "rotate(45deg)" }} />
                <span>Real-Time Route Telemetry</span>
              </div>
              <button className="radarRefreshBtn" onClick={handleRefreshLocation}>
                <RefreshIcon style={{ fontSize: 16, animation: isRefreshing ? "spin 0.8s linear infinite" : "none" }} />
                <span>{isRefreshing ? "Pinging..." : "Refresh GPS"}</span>
              </button>
            </div>

            {/* RADAR CANVAS */}
            <div className="radarCanvasVisual">
              <div className="radarGridBg"></div>
              <div className="radarSweepBeam"></div>

              {/* ROUTE SVG */}
              <svg className="radarRouteSvg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M 18 80 Q 28 65, 38 50 T 58 65 T 78 40 T 92 24"
                  className="routePathBase"
                />
                <path
                  d="M 18 80 Q 28 65, 38 50 T 58 65 T 78 40 T 92 24"
                  className="routePathActive"
                />
              </svg>

              {/* WAYPOINT 1: ORIGIN WAREHOUSE */}
              <div className="mapPin originPin" style={{ left: "18%", top: "80%" }}>
                <span className="mapPinBadge">Bengaluru Hub</span>
                <div className="mapPinIcon">🏭</div>
              </div>

              {/* WAYPOINT 2: SORT HUB */}
              <div className="mapPin hubPin" style={{ left: "58%", top: "65%" }}>
                <span className="mapPinBadge">Okhla Local Hub</span>
                <div className="mapPinIcon">🏢</div>
              </div>

              {/* WAYPOINT 3: CUSTOMER DOORSTEP */}
              <div className="mapPin destinationPin" style={{ left: "92%", top: "24%" }}>
                <span className="mapPinBadge">Your Doorstep 🏠</span>
                <div className="mapPinIcon">📍</div>
              </div>

              {/* ANIMATED MOVING RIDER MARKER */}
              <div
                className="riderMarker"
                style={{
                  left: `${riderCoord.x}%`,
                  top: `${riderCoord.y}%`,
                }}
              >
                <div className="riderLabelTag">Rider: Rajesh 🛵</div>
                <div className="riderMarkerBox">
                  🛵
                </div>
              </div>
            </div>

            {/* TELEMETRY HUD BAR */}
            <div className="mapTelemetryBar">
              <div className="telemetryTile">
                <small>Vehicle Speed</small>
                <strong>{currentStageIdx === 4 ? "0 km/h" : `${riderSpeed} km/h`}</strong>
              </div>
              <div className="telemetryTile">
                <small>Distance Left</small>
                <strong style={{ color: "#2874f0" }}>{currentStageIdx === 4 ? "0.0 km" : `${liveDistance} km`}</strong>
              </div>
              <div className="telemetryTile">
                <small>Est. Duration</small>
                <strong>{currentStageIdx === 4 ? "Reached" : `${liveMins} mins`}</strong>
              </div>
              <div className="telemetryTile">
                <small>EV Battery</small>
                <strong style={{ color: "#16a34a" }}>86% ⚡</strong>
              </div>
            </div>

            {/* INTERACTIVE SIMULATION BUTTON (Allow user to simulate live real-time movement!) */}
            <div className="simulationActionRow">
              <button className="simAdvanceBtn" onClick={handleAdvanceSimulation}>
                <span>⏩ Simulate Next Delivery Stage (Now: Step {currentStageIdx + 1}/5)</span>
              </button>
            </div>
          </div>

          {/* REAL-TIME EVENT LOG */}
          <div className="eventLogCard">
            <h3>📋 Real-Time Journey Activity Log</h3>
            <table className="eventLogTable">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Location Checkpoint</th>
                  <th>Status Event</th>
                </tr>
              </thead>
              <tbody>
                {STAGES.slice(0, currentStageIdx + 1).reverse().map((st, i) => (
                  <tr key={st.id} style={{ background: i === 0 ? "#f0fdf4" : "transparent" }}>
                    <td style={{ fontWeight: 700, color: i === 0 ? "#16a34a" : "#64748b" }}>
                      {st.time}
                    </td>
                    <td><b>{st.location}</b></td>
                    <td>
                      <span style={{ color: i === 0 ? "#16a34a" : "#1e293b", fontWeight: i === 0 ? 800 : 500 }}>
                        {i === 0 ? `🟢 ${st.title}` : `✓ ${st.title}`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN: DELIVERY HERO CARD & STAGES TIMELINE */}
        <div className="trackerSidePanel">
          
          {/* DELIVERY PARTNER CONTACT CARD */}
          <div className="deliveryPartnerCard">
            <div className="partnerCardHeader">
              <div className="partnerAvatar">🛵</div>
              <div className="partnerInfo">
                <h4>Rajesh Kumar</h4>
                <p>
                  Flipkart Express Champion
                  <span className="partnerRatingBadge">4.9 ★ (1,850+)</span>
                </p>
              </div>
            </div>

            <div className="otpRow">
              <div>
                <span className="otpLabel">Delivery Security OTP</span>
                <p style={{ fontSize: "0.72rem", color: "#64748b", margin: 0 }}>Share with driver upon arrival</p>
              </div>
              <span className="otpValue">4921</span>
            </div>

            <a href="tel:+919876543210" className="partnerCallBtn">
              <PhoneInTalkIcon style={{ fontSize: 18 }} />
              <span>Call Delivery Associate</span>
            </a>
          </div>

          {/* 5-STAGE PROGRESS TIMELINE */}
          <div className="deliveryTimelineCard">
            <h3>
              <LocalShippingIcon style={{ color: "#2874f0" }} />
              <span>Live Journey Timeline</span>
            </h3>

            <div className="timelineStepList">
              {STAGES.map((stage, idx) => {
                const isCompleted = idx < currentStageIdx;
                const isActive = idx === currentStageIdx;

                return (
                  <div
                    key={stage.id}
                    className={`timelineStageItem ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`}
                  >
                    <div className="stageDot">
                      {isCompleted ? "✓" : isActive ? "●" : idx + 1}
                    </div>
                    <div className="stageTitleRow">
                      <span className="stageTitle" style={{ color: isActive ? "#2874f0" : isCompleted ? "#16a34a" : "#64748b" }}>
                        {stage.title}
                      </span>
                      <span className="stageTime">{stage.time}</span>
                    </div>
                    <p className="stageDesc">{stage.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LiveDeliveryTracker;
