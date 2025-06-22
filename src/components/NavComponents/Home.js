
import ItemList from "../../Data/ItemList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      <section className="hero">
        <h1>Biggest Sale of the Season!</h1>
        <p>Get up to 50% off on all products — only for a limited time.</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>

     
      <section className="features">
        <div className="feature-card">
          <h3>🚚 Free Shipping</h3>
          <p>On all orders above ₹499</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Checkout</h3>
          <p>100% secure payment & data</p>
        </div>
        <div className="feature-card">
          <h3>📞 24/7 Support</h3>
          <p>We’re here to help anytime</p>
        </div>
      </section>

    
      <section className="items-section">
        <ItemList />
      </section>

  
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-card">
          <p>"Absolutely love the quality and delivery speed!"</p>
          <strong>- Abhijeet, Mumbai</strong>
        </div>
        <div className="testimonial-card">
          <p>"Best deals on electronics I've found!"</p>
          <strong>- Shubham, Delhi</strong>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay in the loop!</h2>
        <p>Sign up to get exclusive offers & updates</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

     
    </div>
  );
};

export default Home;
