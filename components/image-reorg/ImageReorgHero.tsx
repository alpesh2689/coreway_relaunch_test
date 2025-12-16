"use client";

import { motion } from "framer-motion";
import { Images, Sparkles, Zap, Tag, Palette } from "lucide-react";

export default function ImageReorgHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">AI-Powered Image Analysis</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Extract Complete Details from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                Every Image
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Upload any product image and instantly get detailed information. From jewelry materials to clothing colors, our AI identifies every attribute, color, material, and feature automatically.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Attributes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">&lt;2s</div>
                <div className="text-sm text-gray-400">Processing</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                Upload & Analyze Image
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                See Live Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20"></div>

              <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

                <Images className="w-48 h-48 text-purple-400/30" />
                <div className="absolute text-purple-300/50 text-lg font-semibold">Diamond Ring Image</div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-6 left-6 right-6"
                >
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">AI Analysis</span>
                      <span className="text-xs text-green-400 font-semibold">✓ Complete</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Tag className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400">Material</div>
                          <div className="text-sm text-white font-semibold truncate">18K Gold, Diamond</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Palette className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400">Colors</div>
                          <div className="text-sm text-white font-semibold truncate">
                            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                            Gold #FFD700
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400">Details</div>
                          <div className="text-sm text-white font-semibold truncate">Round Cut, 1.5ct, VS1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 left-6 right-6 flex gap-2"
                >
                  <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Confidence</div>
                    <div className="text-lg font-bold text-purple-400">99.8%</div>
                  </div>
                  <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Attributes</div>
                    <div className="text-lg font-bold text-violet-400">15+</div>
                  </div>
                  <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Time</div>
                    <div className="text-lg font-bold text-purple-400">1.8s</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
