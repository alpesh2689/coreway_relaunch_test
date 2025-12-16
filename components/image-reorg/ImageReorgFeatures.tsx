"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  FolderTree,
  Image as ImageIcon,
  Copy,
  Tag,
  Filter,
  Zap,
  Shield,
  Database,
  Clock,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Recognition",
    description: "Advanced computer vision detects objects, scenes, faces, and context automatically",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <FolderTree className="w-6 h-6" />,
    title: "Smart Categorization",
    description: "Automatically creates logical folder structures based on content, date, or custom rules",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Copy className="w-6 h-6" />,
    title: "Duplicate Detection",
    description: "Identifies exact and near-duplicate images using perceptual hashing algorithms",
    color: "from-purple-600 to-violet-500",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Auto-Tagging",
    description: "Generates relevant tags and keywords from image content and metadata",
    color: "from-violet-600 to-purple-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Color Analysis",
    description: "Organizes images by dominant colors, palettes, and visual themes",
    color: "from-purple-500 to-violet-700",
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Quality Filtering",
    description: "Automatically filters out blurry, corrupted, or low-quality images",
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Batch Processing",
    description: "Process 100,000+ images simultaneously with parallel processing",
    color: "from-purple-600 to-violet-600",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Metadata Extraction",
    description: "Extracts and preserves EXIF data, geolocation, and camera settings",
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time-Based Sorting",
    description: "Organize by capture date, modification time, or custom date ranges",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Processing",
    description: "End-to-end encryption ensures your images remain private and secure",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "Format Support",
    description: "Handles JPG, PNG, GIF, WebP, TIFF, BMP, SVG, and RAW formats",
    color: "from-purple-600 to-violet-700",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Custom Rules",
    description: "Define your own organization logic with drag-and-drop rule builder",
    color: "from-violet-600 to-purple-700",
  },
];

export default function ImageReorgFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F1E] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Manage Images
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade features designed to handle any image organization challenge at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold">And many more features...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
