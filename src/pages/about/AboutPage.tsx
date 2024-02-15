// AboutUsPage.tsx

import Navbar from "@/components/Navbar";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center flex items-center py-24 bg-opacity-10" style={{ backgroundImage: 'url("https://putrasionmandiri.co.id/wp-content/uploads/2023/08/trip-3_13-Photo.jpg")', filter: "blur(0.34px)" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-white z-10 relative">Tentang Kami - KosanKita</h1>
          <p className="text-white mb-4 pr-20">
            Selamat datang di KosanKita! Kami adalah tempat penyewaan kos-kosan yang nyaman dan terjangkau. Dengan komitmen memberikan pelayanan terbaik kepada pelanggan, kami berusaha untuk menjadi pilihan utama bagi mereka yang mencari
            hunian sementara.
          </p>
          <p className="text-white pr-20">
            Website ini baru saja dibangun dengan tujuan memudahkan calon penyewa untuk menemukan informasi tentang kos-kosan yang kami tawarkan. Kami berkomitmen untuk terus meningkatkan kualitas pelayanan dan fasilitas agar pengalaman
            tinggal di KosanKita selalu menyenangkan.
          </p>
        </div>
        N
      </div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>"Pelayanan dari KosanKita sangat memuaskan. Saya merasa betah tinggal di kosan mereka."</p>
              <p className="text-sm mt-2">- John Doe</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>"Saya sangat senang dengan fasilitas yang disediakan oleh KosanKita. Sangat recommended!"</p>
              <p className="text-sm mt-2">- Jane Smith</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>"KosanKita memberikan harga yang sangat terjangkau tanpa mengorbankan kenyamanan."</p>
              <p className="text-sm mt-2">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-lime-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Hak Cipta © {new Date().getFullYear()} KosanKita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
