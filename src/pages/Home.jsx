import React from "react";
import "./Home.css";

const features = [
  { icon: "🚚", title: "Free Shipping", text: "On orders above ₹999" },
  { icon: "🔒", title: "Secure Checkout", text: "Protected payments" },
  { icon: "↩️", title: "Easy Returns", text: "7-day hassle-free policy" },
  { icon: "⭐", title: "Premium Quality", text: "Only trusted brands" },
];

const categories = [
  {
    name: "Fashion",
    text: "Modern looks for every day",
    bg: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    number: "01",
  },
  {
    name: "Electronics",
    text: "Smart tech, built for life",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    number: "02",
  },
  {
    name: "Accessories",
    text: "Finishing touches that stand out",
    bg: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    number: "03",
  },
];

const products = [
  {
    name: "Urban Leather Bag",
    price: "₹2,499",
    oldPrice: "₹3,299",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    tag: "Hot Pick",
  },
  {
    name: "Wireless Headphones",
    price: "₹4,799",
    oldPrice: "₹6,199",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80",
    tag: "New",
  },
  {
    name: "Classic Sneaker",
    price: "₹2,199",
    oldPrice: "₹3,099",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=700&q=80",
    tag: "Trending",
  },
  {
    name: "Smart Watch",
    price: "₹5,499",
    oldPrice: "₹7,299",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    tag: "Top Rated",
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">ShopKart • Fresh arrivals</span>
          <h1>
            Discover <span>styles</span>
            <br />
            that feel premium.
          </h1>
          <p className="hero-text">
            From everyday essentials to statement pieces, ShopKart brings you
            the best deals on fashion, tech, and lifestyle products.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-btn">
              Shop now
            </button>
            <button type="button" className="secondary-btn">
              Explore collection
            </button>
          </div>

          <div className="mini-stats">
            <div>
              <strong>20k+</strong>
              <span>Happy shoppers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Customer rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>Fast dispatch</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">
            <span>Save up to</span>
            <strong>50% OFF</strong>
          </div>
          <div className="floating-card card-two">
            <span>Best seller</span>
            <strong>New drop</strong>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
            alt="Woman shopping"
          />
        </div>
      </section>

      <section className="feature-strip" aria-label="Store features">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section-block categories-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow small">Shop by category</span>
            <h2>Curated collections for every lifestyle</h2>
          </div>
          <button type="button" className="text-btn">
            View all
          </button>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article
              key={category.name}
              className="category-card"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.75)), url(${category.bg})`,
              }}
            >
              <div className="category-content">
                <span>{category.number}</span>
                <h3>{category.name}</h3>
                <p>{category.text}</p>
                <button type="button">Shop now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block product-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow small">Featured picks</span>
            <h2>Trending products</h2>
          </div>
          <button type="button" className="text-btn">
            See more
          </button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-image-wrap">
                <span className="product-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-row">
                  <strong>{product.price}</strong>
                  <span>{product.oldPrice}</span>
                </div>
                <button type="button">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="deal-banner">
        <div className="deal-copy">
          <span className="eyebrow light">Limited time offer</span>
          <h2>
            Up to <span>50%</span> off selected items
          </h2>
          <p>
            Refresh your wardrobe and workspace with premium picks at special
            prices.
          </p>
          <button type="button" className="primary-btn dark">
            Shop deals
          </button>
        </div>
        <div className="deal-badge" aria-label="50 percent off">
          50%
          <small>OFF</small>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-image">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
            alt="Store interior"
          />
        </div>

        <div className="benefits-copy">
          <span className="eyebrow small">Why choose us</span>
          <h2>Everything you need, all in one smart store.</h2>
          <p>
            We combine premium product quality, stylish design, and dependable
            service so your shopping experience feels effortless from start to
            finish.
          </p>

          <ul className="benefit-list">
            <li>Quality products from trusted brands</li>
            <li>Fast delivery and secure payment checkout</li>
            <li>Friendly support for every purchase</li>
            <li>Exclusive offers and new arrivals every week</li>
          </ul>

          <button type="button" className="primary-btn">
            Learn more
          </button>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading center">
          <div>
            <span className="eyebrow small">Testimonials</span>
            <h2>Loved by shoppers everywhere</h2>
          </div>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              “The shopping experience was smooth, the products looked even
              better in person, and delivery was faster than expected.”
            </p>
            <div className="customer">
              <strong>Rhea S.</strong>
              <span>Fashion shopper</span>
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              “I found premium tech at great prices. Every detail feels
              polished, from checkout to customer service.”
            </p>
            <div className="customer">
              <strong>Arjun P.</strong>
              <span>Electronics buyer</span>
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              “ShopKart has become my go-to destination for gifts and personal
              upgrades. Clean, modern, and dependable.”
            </p>
            <div className="customer">
              <strong>Maya K.</strong>
              <span>Lifestyle lover</span>
            </div>
          </article>
        </div>
      </section>

      <section className="newsletter-section">
        <span className="eyebrow small">Stay in the loop</span>
        <h2>Get the latest deals and new arrivals.</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Subscribe</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
