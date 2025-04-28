import DarkOverlay from "../ui/general/DarkOverlay";
import servicesBG from "../assets/services-bg.jpg";
import ServicesCard from "../ui/Services/ServicesCard";
import image1 from "../assets/services-img-1.jpg";
import image2 from "../assets/services-img-2.jpg";
import image3 from "../assets/services-img-3.jpg";
import image4 from "../assets/services-img-4.png";
import image5 from "../assets/services-img-5.jpg";
import image6 from "../assets/services-img-6.jpg";
import Navbar from "../ui/general/Navbar";
import Footer from "../ui/general/Footer";
import { motion } from "framer-motion";

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <Navbar />
      <DarkOverlay image={servicesBG} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="01"
          serviceTitle="Personal Fragrance Consultations"
          serviceDescription="Choosing the right fragrance can be a deeply personal experience. 
          Our team of knowledgeable fragrance experts is here to guide you through this process. 
          Whether you're looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, 
          our consultants will take the time to understand your preferences and suggest the perfect matches."
          imageUrl={image1}
          imageRight={true}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="02"
          serviceTitle="Custom Fragrance Creation"
          serviceDescription="Experience the art of bespoke perfumery with our custom fragrance creation service. 
          Work closely with our skilled perfumers to craft a scent that is uniquely yours. 
          From selecting individual notes to blending them into a harmonious symphony, 
          we'll help you bring your fragrance vision to life. Whether it's a special occasion, a gift for someone dear, 
          or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience."
          imageUrl={image2}
          imageRight={false}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="03"
          serviceTitle="Scented Gift Selection"
          serviceDescription="Looking for a meaningful gift that leaves a lasting impression? Our scented gift selection service is designed to help you find the perfect fragrance gift for any occasion. Whether it's a birthday, anniversary, or a gesture of appreciation, our experts will assist you in choosing a fragrance that perfectly conveys your sentiments and makes the recipient feel cherished."
          imageUrl={image3}
          imageRight={true}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="04"
          serviceTitle="Fragrance Events and Workshops"
          serviceDescription="Join us for fragrance-centric events and workshops that celebrate the art of perfumery. 
          Immerse yourself in the captivating world of scents, learn from experts, and discover the nuances of different fragrance families. 
          These events are perfect for fragrance enthusiasts and novices alike, providing a unique opportunity to expand your olfactory knowledge."
          imageUrl={image4}
          imageRight={false}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="05"
          serviceTitle="Eco-friendly Initiatives"
          serviceDescription="At Local Face, we are committed to sustainability and eco-conscious practices. 
          As part of our services, we offer guidance on selecting environmentally friendly and cruelty-free fragrances. 
          We partner with brands that share our values and are dedicated to making a positive impact on the planet."
          imageUrl={image5}
          imageRight={true}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ServicesCard
          serviceNumber="06"
          serviceTitle="Online Shopping Convenience"
          serviceDescription="Explore our carefully curated collection of perfumes from the comfort of your home. 
          Our user-friendly website offers a seamless online shopping experience, complete with detailed product descriptions and customer reviews. 
          You can also reach out to our customer support team for any assistance during your shopping journey."
          imageUrl={image6}
          imageRight={false}
        />
      </motion.div>

      <Footer />
    </div>
  );
}

export default Services;
