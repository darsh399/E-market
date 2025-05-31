import './About.css';

const content = {
  title: "About E-Market",
  intro: `Welcome to E-Market – your trusted online destination for premium electronics. 
          We aim to revolutionize the way people shop for gadgets by providing not just products, 
          but a seamless, reliable, and delightful shopping experience.`,

  offeringsTitle: "Why Choose E-Market?",
  offerings: [
    "Extensive product range: Mobiles, Laptops, TVs, Smartwatches, Refrigerators, and more",
    "Competitive prices, seasonal offers, and exclusive online deals",
    "Lightning-fast delivery with real-time tracking",
    "Hassle-free returns and 24/7 customer support",
    "Easy payment options including UPI, COD, and EMI"
  ],

  missionTitle: "Our Mission",
  mission: `To empower customers with technology at their fingertips. 
            We are committed to delivering innovation, affordability, and trust 
            in every purchase journey.`,

  visionTitle: "Our Vision",
  vision: `To become India's most loved and reliable electronics e-commerce platform, 
           delivering not just products but real value to our customers.`,

  contactTitle: "Get in Touch",
  contact: `Have questions, suggestions, or need assistance? 
            Our support team is here to help. Visit our Contact Us page or connect with us 
            via email or phone – we're always ready to listen.`
};

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>{content.title}</h1>
        <p>{content.intro}</p>

        <h2>{content.offeringsTitle}</h2>
        <ul>
          {content.offerings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{content.missionTitle}</h2>
        <p>{content.mission}</p>

        <h2>{content.visionTitle}</h2>
        <p>{content.vision}</p>

        <h2>{content.contactTitle}</h2>
        <p>{content.contact}</p>
      </div>
    </div>
  );
};

export default AboutUs;
