import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

const TopBrandsSection = ({ brands, activeTab, handleTabClick }) => {
  return (
    <div className="relative my-16 py-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100">
      {/* Subtle animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 blur-3xl animate-pulse" />

      <div className="relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <Sparkles className="text-cyan-400 animate-pulse" size={26} />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Select Top Brands
          </h2>
          <Crown className="text-yellow-400 animate-bounce" size={26} />
        </motion.div>

        {/* Brands grid */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 px-4 md:px-8">
          {/* "All" Tab */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabClick("all")}
            className={`relative cursor-pointer flex flex-col items-center gap-3 h-[120px] w-[110px] rounded-2xl border-2 transition-all duration-500 
              ${
                activeTab === "all"
                  ? "border-cyan-400 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 shadow-[0_0_25px_rgba(0,255,255,0.4)]"
                  : "border-gray-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] bg-white/70 backdrop-blur"
              }`}
          >
            {/* Light sweep */}
            {activeTab === "all" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2s_linear_infinite] rounded-2xl" />
            )}

            <div className="flex items-center justify-center w-full h-[60px]">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/12/19/05/notebook-154358_1280.png"
                alt="All"
                className="w-10 h-10 object-contain"
              />
            </div>
            <p
              className={`text-sm font-semibold ${
                activeTab === "all"
                  ? "text-cyan-100 bg-cyan-700 px-3 py-0.5 rounded-xl shadow"
                  : "text-gray-800"
              }`}
            >
              All
            </p>
          </motion.div>

          {/* Brand Cards */}
          {brands.map((val, ind) => (
            <motion.div
              key={ind}
              whileHover={{ scale: 1.08, rotateY: 3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleTabClick(val.name)}
              className={`relative cursor-pointer flex flex-col items-center gap-3 h-[120px] w-[110px] rounded-2xl border-2 transition-all duration-500
                ${
                  activeTab === val.name
                    ? "border-purple-500 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    : "border-gray-200 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] bg-white/70 backdrop-blur"
                }`}
            >
              {/* Animated light sweep on active */}
              {activeTab === val.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2.5s_linear_infinite] rounded-2xl" />
              )}

              <div className="flex items-center justify-center w-full h-[60px]">
                <img
                  src={val.logo}
                  alt={val.name}
                  className="max-w-[70px] max-h-[50px] object-contain drop-shadow-md"
                />
              </div>
              <p
                className={`text-sm font-semibold ${
                  activeTab === val.name
                    ? "text-white bg-purple-600 px-3 py-0.5 rounded-xl shadow"
                    : "text-gray-800"
                }`}
              >
                {val.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shine keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TopBrandsSection;
