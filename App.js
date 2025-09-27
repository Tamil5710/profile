import React from "react";
import "./App.css"; // import the external CSS

// ✅ Data
const servicesData = [
  {
    
    image: "https://images.pexels.com/photos/4440652/pexels-photo-4440652.jpeg",
    title: "Laundry",
    description:
      "Enjoy fresh | clean | folded laundry — more time for what matters most.",
  },
  {
    image:
      "https://media.istockphoto.com/id/994288748/photo/different-colored-sweaters-and-shirts-on-hangers.jpg?s=612x612&w=0&k=20&c=EDRww_j5mPqJw-lEmY7aqduP7jnMIWEvnkaJpX89Wcw=",
    title: "Dry Cleaning",
    description:
      "Refresh your garments with our expert dry cleaning — book now it's wow!",
  },
  {
    image:
      "https://media.gettyimages.com/id/1472967724/photo/iron-on-a-ironing-board-at-home.jpg?s=612x612&w=0&k=20&c=PCdndmwEU9dHxxcoKIcMWn-CsN5jn9jM7m_vdTaFFFc=",
    title: "Ironing",
    description:
      "Get wrinkle-free perfection — expert ironing that keeps you looking sharp!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=900&auto=format&fit=crop&q=60",
    title: "Customize Services",
    description:
      "Relevant, engaging visuals | Customer-focused copy | Clear CTAs | SEO best practices.",
  },
];

// ✅ Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <img src={image} alt={title} className="service-image" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

// ✅ Services Component
const Services = () => (
  <section className="services-section">
    <h1 className="heroVillian">Our Services</h1>
    <div className="services-container">
      <a href="#" className="never">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
      </a>
    </div>

    <center>
      <br></br>
      <h4>
        Trusted by Nearly 90,000 Happy Customers – Choose LaundryHouse for
        Exceptional Care.
      </h4>
      <br></br>
      <button
        className="butt"
        onClick={() => window.open("#", "_blank")}
      >
        Book Now !!
      </button>
    </center>
    <hr className="hr" />
  </section>
);

// ✅ LaundryHouse Section
const LaundryHouseSection = () => (
  <section className="laundry-section">
    <div className="intro-text">
      <h2>Softouch – Your Clothes, Our Care.</h2>
      <p>
        At LaundryHouse, we go beyond just cleaning clothes. We offer a seamless
        experience tailored to your unique needs. From eco-friendly processes to
        professional care, every step is focused on delivering excellence.
      </p>
      <p className="highlight-text">
        Trusted by 90,000+ happy customers, we’re ready to serve you too!
      </p>
      <p>Schedule Your Laundry Pickup Today!</p>
      <button className="btn-schedule">Schedule Pickup</button>
    </div>

    <div className="features-container">
      <div className="feature-item">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-16-2025-12_49_16-PM.png"
          alt="Eco-Friendly Cleaning Machines"
        />
        <h4>Eco-Friendly Cleaning Machines</h4>
        <p>Gentle on clothes, kind to the planet.</p>
      </div>

      <div className="feature-item">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-16-2025-01_12_50-PM-1.png"
          alt="Certified Wool Care Technology"
        />
        <h4>Certified Wool Care Technology</h4>
        <p>Special care for delicate fabrics.</p>
      </div>

      <div className="feature-item">
        <img
          src="https://up.yimg.com/ib/th/id/OIP.NqvjjNK1TwJ5ZWu45gIPpAHaHa"
          alt="Expert Fabric Specialists"
        />
        <h4>Expert Fabric Specialists</h4>
        <p>Experience you can trust.</p>
      </div>

      <div className="feature-item">
        <img
          src="https://cdn.vectorstock.com/i/750p/50/04/nature-logo-template-concept-vector-30545004.avif"
          alt="Sustainable Cleaning Solutions"
        />
        <h4>Sustainable Cleaning Solutions</h4>
        <p>Clean clothes, cleaner future.</p>
      </div>
    </div>
    <hr className="hr" />
  </section>
);

// ✅ LaundryService Section
const LaundryService = () => (
  <section className="laundry-sections">
    <h2 className="laundry-title">
      We Collect, Clean, and Deliver – LaundryHouse Makes Life Easier!
    </h2>
    <p className="laundry-description">
      At laundryHouse, we offer reliable laundry and{" "}
      <a href="#" className="link">
        dry cleaning services
      </a>{" "}
      designed to make your life easier. From careful garment handling to
      on-time delivery at your doorstep, we ensure your clothes are treated with
      the utmost care and professionalism. Experience the convenience of premium
      cleaning services with Laundrywala, where every detail is crafted around
      you.
    </p>

    <div className="cards-container">
      <div className="card">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-15-2025-04_22_21-PM.png"
          alt="Effortless Scheduling"
          className="card-icon"
        />
        <h3>Effortless Scheduling</h3>
        <p>Book Your Laundry Pickup in Just a Few Clicks.</p>
      </div>

      <div className="card">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-15-2025-04_35_50-PM.png"
          alt="Doorstep Pickup"
          className="card-icon"
        />
        <h3>Doorstep Pickup</h3>
        <p>Seamless Pickup at Your Convenience.</p>
      </div>

      <div className="card">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-15-2025-04_44_24-PM.png"
          alt="Professional Cleaning"
          className="card-icon"
        />
        <h3>Professional Cleaning</h3>
        <p>Eco-Friendly Cleaning for Every Fabric.</p>
      </div>

      <div className="card">
        <img
          src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-15-2025-04_48_47-PM.png"
          alt="On-Time Delivery"
          className="card-icon"
        />
        <h3>On-Time Delivery</h3>
        <p>Fresh, Clean Clothes Delivered Right to Your Doorstep.</p>
      </div>
    </div>
    <center>
      <button className="btn-schedule">Schedule Pickup</button>
    </center>
    <hr className="hr" />
  </section>
);

// ✅ LaundryDelivery Section
const LaundryDelivery = () => (
  <div className="laundry-service-container">
    <div className="header-text">
      <h2>
        Professional Laundry Services Near You: Free Pickup and Doorstep
        Delivery
      </h2>
      <p>
        At LaundryHouse, we make laundry hassle-free with complimentary home
        pickup and doorstep delivery on orders above ₹349 in our serviceable
        locations. With our easy-to-use website or app, scheduling your laundry
        has never been simpler. Select a time that suits your routine, and we’ll
        take care of the rest. Trust us to handle your clothes with expert care
        and enjoy the comfort of clean, fresh{" "}
        <a
          href="https://laundrywala.in/laundry-near-you"
          target="_blank"
          rel="noopener noreferrer"
        >
          laundry near you
        </a>
        .
      </p>
    </div>

    <div className="delivery-options-row">
      <div className="delivery-option-card">
        <div className="delivery-icon-container">
          <img
            src="https://www.laundrywala.in/wp-content/uploads/2025/01/d1.d1640c5-1.png"
            alt="Standard Delivery Icon"
          />
        </div>
        <h3>Standard Delivery</h3>
        <p>
          Hassle-Free Regular Delivery (48–72 Hours). Perfect for your everyday
          laundry needs with no extra charges.
        </p>
      </div>

      <div className="delivery-option-card">
        <div className="delivery-icon-container">
          <img
            src="https://www.laundrywala.in/wp-content/uploads/2025/01/d2.b66a2c0-1.png"
            alt="Express Delivery Icon"
          />
        </div>
        <h3>Express Delivery</h3>
        <p>
          Need your laundry fast? Get it delivered within 24 hours at a minimal
          extra charge and enjoy the convenience of on-demand service.
        </p>
      </div>

      <div className="scooter-image-container">
        <img
          src="https://media.istockphoto.com/id/1198224533/vector/moving-house-service-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=DOTvNbmK43lwSG8fJ_URz-amG8zwkP4YuuJz3cTDuX4="
          alt="Delivery person on scooter"
        />
      </div>
    </div>

    <div className="schedule-pickup-button-container">
      <button className="btn-schedule">Schedule Pickup</button>
    </div>
    <br></br>
    <br></br>
    <br></br>
  </div>
  
);

// ✅ Footer Section
const LaundryPage = () => (
  <footer className="footer">
    <div className="footer-main">
      {/* Logo + Socials */}
      <div className="footer-logo-socials">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.SzVS07ZinQT6gYhmnis8ggAAAA?pid=Api&P=0&h=220"
          alt="Laundrywala Logo"
          className="logo"
        />
        <div className="social-icons">
          <a href="#">
            <img
              src="https://img.icons8.com/?size=60&id=118466&format=png"
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              src="https://images.seeklogo.com/logo-png/38/2/linkedin-black-icon-logo-png_seeklogo-387472.png"
              alt="LinkedIn"
            />
          </a>
          <a href="#">
            <img
              src="https://images.seeklogo.com/logo-png/30/2/instagram-new-2016-logo-png_seeklogo-302599.png"
              alt="Instagram"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png"
              alt="Twitter"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=60&id=62852&format=png"
              alt="YouTube"
            />
          </a>
        </div>
        <p className="footer-desc">
          Your expert laundry and dry cleaning service. Affordable, high-quality
          care with convenience and efficiency. Trust us for all your laundry
          needs.
        </p>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div>
          <h4>Support</h4>
          <ul>
            <li>Laundry Service</li>
            <li>Dry Cleaning</li>
            <li>Shoe Cleaning</li>
            <li>Home Cleaning</li>
            <li>Ironing</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Franchise</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <ul>
            <li>✉ info@laundryHome.in</li>
            <li>📞 9150188611</li>
            <li>
              🏢 Registered Office: DobiQueen, C84, Sector - 2, Noida, UP
            </li>
            <li>🏢 Corporate Office: C84, B5, Sector - 2, Noida, UP</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Serving Section */}
    <div className="footer-serving">
      <div>
        <h3>Now Serving in</h3>
        <p>
          Gorakhpur | Dehradun | Bathinda | Gwalior | Pune | Thane | Hisar |
          Deoria ...
        </p>
      </div>
      <div>
        <h3>Stores Coming Soon</h3>
        <p>Mumbai | Hyderabad | Chennai | Nashik | Amritsar | Kolkata | Jammu ...</p>
      </div>
    </div>

    {/* Bottom */}
    <div className="footer-bottom">
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>© 2025 DobiQueen Solutions Pvt. Ltd. All Rights Reserved.</p>
    </div>
  </footer>
);

// ✅ HomePage Component
const HomePage = () => (
  <div className="container">
    {/* Navbar */}
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.SzVS07ZinQT6gYhmnis8ggAAAA?pid=Api&P=0&h=220"
          alt="Laundrywala Logo"
          style={{ height: 40 }}
        />
        <h1>LaundryHouse</h1>
      </div>
      <ul className="navLinks">
        <li className="navItem">Home</li>
        <li className="navItem">About Us</li>
        <li className="navItem">Services</li>
        <li className="navItem">Franchise</li>
        <li className="navItem">Blog</li>
        <li className="navItem">Contact Us</li>
        <li>
          
        </li>
      </ul>
    </nav>

    {/* Hero Section */}
    <section className="heroSection">
      <div className="heroText">
        <h1 className="heroTitle">
          LaundryHouse – Premium Laundry & Dry Cleaning Services{" "}
          <span className="highlight">Near You</span>
        </h1>
        <p className="heroSubtitle">
          Trusted care for every garment — pickup, clean & deliver.
        </p>
        <div className="heroButtons">
          <button className="button primaryBtn">Schedule Your Pickup →</button>
          <button className="button secondaryBtn">See Our Pricing</button>
        </div>

        {/* Feature Icons */}
        <div className="featureContainer">
          <div className="featureItem">
            <img
              src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-10-2025-03_39_17-PM.png"
              alt="Customer Support"
              className="featureIcon"
            />
            <p>Customer Support</p>
          </div>
          <div className="featureItem">
            <img
              src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-10-2025-03_59_32-PM.png"
              alt="Delivery"
              className="featureIcon"
            />
            <p>Super Fast Delivery</p>
          </div>
          <div className="featureItem">
            <img
              src="https://www.laundrywala.in/wp-content/uploads/2025/09/ChatGPT-Image-Sep-10-2025-04_10_45-PM.png"
              alt="Eco"
              className="featureIcon"
            />
            <p>Fresh & Eco-Friendly</p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="heroImage"
          src="https://media.istockphoto.com/id/1262283553/photo/smiling-indian-woman-shopper-customer-opening-post-package-box-sitting-on-couch-at-home-happy.jpg?s=612x612&w=0&k=20&c=VqBW-Rmo5QjvKzt-fXWlygsJ11KsInxITykfgxH-mtg="
          alt="Laundrywala Delivery Person"
        />
      </div>
    </section>

    <hr className="hr" />

    {/* ✅ Sections */}
    <Services />
    <LaundryHouseSection />
    <LaundryService />
    <LaundryDelivery />
    <LaundryPage />
  </div>
);

export default HomePage;
