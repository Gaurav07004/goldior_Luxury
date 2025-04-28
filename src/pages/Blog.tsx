import React, { useEffect } from "react";
import services1 from "../assets/services-img-1.jpg";
import services2 from "../assets/services-img-2.jpg";
import services3 from "../assets/services-img-3.jpg";
import services4 from "../assets/services-img-4.png";
import services5 from "../assets/services-img-5.jpg";
import Navbar from "../ui/general/Navbar";
import Footer from "../ui/general/Footer";
import { NavLink } from "react-router-dom";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonLink: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
  buttonLink,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="flex flex-col justify-between items-center 
    text-justify gap-0 bg-[#FFFF] rounded-2xl p-4 transform transition-transform duration-300 border-2"
    >
      <div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-72 object-cover rounded-t-2xl mb-4"
        />
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-700">{title}</h3>
          <p className="text-sm mb-6 text-slate-600">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <NavLink to={buttonLink}>
          <button
            className="bg-[var(--theme-brown)] text-sm text-white shadow-md 
          font-medium px-6 py-3 rounded-lg w-fit mt-1 hover:bg-[var(--buttonHover)] duration-500"
          >
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const BlogCollection: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-transparent text-[#303237] py-2 px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-6xl mx-auto">
          <p
            className="mt-1 text-[2.5rem] mb-14 font-medium text-center 
          font-serif text-slate-700 leading-[4.25rem]"
          >
            Our Blog Collection
          </p>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/2 text-justify">
              <h3 className="text-xl text-slate-700 font-bold mb-4">
                Discover the Art of Perfumery
              </h3>

              <p className="text-lg font-normal mb-4 text-slate-600">
                Welcome to Local Face's Perfumery Blog Collection! Here, we
                invite you to immerse yourself in the captivating world of
                fragrances, where each blog post is a sensory journey that
                unveils the magic and allure of perfumes.
              </p>
              <p className="text-lg font-normal mb-4 text-slate-600">
                At Local Face, we believe that perfumery is an extraordinary
                fusion of art, science, and emotion. Our passion for exquisite
                fragrances has inspired us to curate a treasure trove of blog
                posts, each designed to ignite your senses and deepen your
                appreciation for these olfactory wonders.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src={services4}
                alt="Perfume 1"
                className="w-full h-[16rem] object-cover rounded-2xl"
              />
              <img
                src={services1}
                alt="Perfume 2"
                className="w-full h-[12rem] object-cover rounded-2xl"
              />
              <img
                src={services2}
                alt="Perfume 3"
                className="w-full h-[10rem] object-cover rounded-2xl"
              />
              <img
                src={services3}
                alt="Perfume 4"
                className="w-full h-[14rem] object-cover rounded-2xl -mt-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section with Cards */}
      <div className="blog-sec py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BlogCard
            imageSrc={services1}
            title="Make Your Scent Last All Day: Top Tips for Long-Lasting Perfume"
            description="Embark on a journey of self-discovery as we dive into the concept of perfume personalities. 
            From bold and adventurous to elegant and timeless, find the scent that complements your essence."
            buttonLink="/blog/make-your-scent-last-all-day"
          />
          <BlogCard
            imageSrc={services2}
            title="Choosing the Perfect Fragrance for Every Season: A Guide by Goldior Luxury"
            description="A luxury perfume collection is not just an assortment of fragrances; 
            it is a reflection of one’s taste, personality, and experiences."
            buttonLink="/blog/choosing-the-perfect-fragrance-for-every-season"
          />
          <BlogCard
            imageSrc={services3}
            title="Find Your Signature Scent: How to Choose the Perfect Perfume"
            description="Ever wondered how perfumers compose their masterpieces? 
            Unravel the mystery behind fragrance notes and learn how they combine to create olfactory experiences."
            buttonLink="/blog/find-your-signature-scent"
          />
          <BlogCard
            imageSrc={services5}
            title="Discover the Different Types of Perfumes: A Guide to Finding Your Signature Scent"
            description="Ever wondered how perfumers compose their masterpieces? Unravel the mystery 
            behind fragrance notes and learn how they combine to create olfactory experiences."
            buttonLink="/blog/discover-the-different-types-of-perfumes"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogCollection;
