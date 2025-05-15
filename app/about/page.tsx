import React from 'react';
import Image from 'next/image';
import genProd from '@/public/assets/genProduct.avif'; 
import team1 from '@/public/assets/team1.jpeg';
import { FaLeaf, FaShippingFast, FaHandsHelping } from 'react-icons/fa';
import NavBar from '../components/navBar';

const AboutPage = () => {
  return (
    <div className="bg-white">
       <NavBar />
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={genProd}
          alt="Our Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Crafting exceptional experiences since 2025
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Exist</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Wena Affiliates, we believe in bringing high-quality products to your doorstep while creating
            opportunities for our global community of affiliates. Our mission is to bridge the gap between
            exceptional products and customers who value quality and style.
          </p>
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 h-1 w-24 mx-auto"></div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-4xl text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and sustainable products that don't compromise on quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaShippingFast className="text-4xl text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Fast, reliable worldwide shipping to bring the best products to your doorstep, wherever you are.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaHandsHelping className="text-4xl text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Our affiliate program empowers entrepreneurs worldwide to build their own businesses with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet The Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <div className="relative aspect-square w-full mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={team1} 
                  alt={`Team Membe`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Team Member {member}</h3>
              <p className="text-gray-600">Position/Role</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether as a customer or affiliate, we'd love to have you be part of the Wena family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-cyan-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Become an Affiliate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;