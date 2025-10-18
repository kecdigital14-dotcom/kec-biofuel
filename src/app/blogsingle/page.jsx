'use client';

import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BlogDetailPage from '../Components/BlogDetailPage';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading blog...</p>
    </div>
  </div>
);

const BlogSingleScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <BlogDetailPage />
      </Suspense>
      <Footer />
    </div>
  );
};

export default BlogSingleScreen;