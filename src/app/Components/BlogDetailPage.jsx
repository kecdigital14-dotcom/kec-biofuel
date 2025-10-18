'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Eye, Heart, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts, getCategoryColor, formatDate } from '../data/blogData';
import RelatedPosts from './RelatedPosts';

const BlogDetailPage = () => {
  const searchParams = useSearchParams();
  const blogId = parseInt(searchParams.get('id') || '1');
  const post = blogPosts.find(p => p.id === blogId);
  const [liked, setLiked] = useState(false);

  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 flex items-center justify-center"
      >
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-4 tracking-tight">Blog Not Found</h1>
          <Link
            href="/biogas"
            className="flex items-center justify-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 overflow-hidden">
      {/* Animated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-green-500 origin-left z-50"
        style={{ scaleX: { scrollYProgress: 1 } }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />

      {/* Back Navigation with Glow Effect */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md border-b border-green-100/50 sticky top-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/biogas"
            className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to All Blogs
          </Link>
        </div>
      </motion.div>

      {/* Hero Section with Parallax and Particle Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-[70vh] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-green-600/30" />
            {/* Particle Animation */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-green-400/50 rounded-full"
                  style={{
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 p-8 text-white">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-green-500"
              >
                {post.category}
              </motion.span>
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight tracking-tight drop-shadow-lg"
              >
                {post.title}
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mt-8"
          >
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-green-500" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-500" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-orange-500" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section with Enhanced Animation */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-12 border border-orange-200/30"
        >
          <div className="prose prose-lg max-w-none">
            {/* Main Content/Introduction */}
            {post.content && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-orange-500 first-letter:mr-2">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Subheading 1 */}
            {post.subheading1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-orange-600 mt-8 mb-4 border-l-4 border-green-500 pl-4 lg:max-w-xl">
                  {post.subheading1}
                </h2>
                {post.subheading1Content && post.subheading1Content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Subheading 2 */}
            {post.subheading2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-4xl lg:max-w-xl font-bold text-green-600 mt-8 mb-4 border-l-4 border-orange-500 pl-4">
                  {post.subheading2}
                </h2>
                {post.subheading2Content && post.subheading2Content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Subheading 3 */}
            {post.subheading3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-4xl lg:max-w-xl font-bold text-orange-600 mt-8 mb-4 border-l-4 border-green-500 pl-4">
                  {post.subheading3}
                </h2>
                {post.subheading3Content && post.subheading3Content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Subheading 4 */}
            {post.subheading4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl lg:max-w-xl font-bold text-green-600 mt-8 mb-4 border-l-4 border-orange-500 pl-4">
                  {post.subheading4}
                </h2>
                {post.subheading4Content && post.subheading4Content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Subheading 5 (optional) */}
            {post.subheading5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-5xl font-bold text-orange-600 mt-8 mb-4 border-l-4 border-green-500 pl-4">
                  {post.subheading5}
                </h2>
                {post.subheading5Content && post.subheading5Content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}
          </div>

          {/* Social Actions with Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between pt-8 mt-8 border-t border-green-100/50"
          >
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 165, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                  liked ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600 hover:bg-orange-50'
                }`}
              >
                <Heart className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} />
                <span className="font-medium">{post.likes + (liked ? 1 : 0)}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-green-50 transition-colors duration-300"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </motion.button>
            </div>
            <div className="text-sm text-gray-500">
              Category: <span className="font-medium text-green-600">{post.category}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Posts Component */}
        <RelatedPosts 
          currentPostId={blogId} 
          blogPosts={blogPosts}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;