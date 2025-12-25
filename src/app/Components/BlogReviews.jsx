'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, ThumbsUp, Trash2 } from 'lucide-react';

export default function BlogReviews({ blogSlug }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load reviews on component mount
  useEffect(() => {
    loadReviews();
  }, [blogSlug]);

  const loadReviews = () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (typeof window !== 'undefined') {
        const storedReviews = localStorage.getItem(`reviews:${blogSlug}`);
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
        } else {
          setReviews([]);
        }
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      setError('Please fill in all fields');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const review = {
      id: Date.now(),
      name: newReview.name.trim(),
      comment: newReview.comment.trim(),
      date: new Date().toISOString(),
      likes: 0
    };

    const updatedReviews = [review, ...reviews];

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`reviews:${blogSlug}`, JSON.stringify(updatedReviews));
        setReviews(updatedReviews);
        setNewReview({ name: '', comment: '' });
      }
    } catch (error) {
      console.error('Error saving review:', error);
      setError('Failed to post review. Please try again.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = (reviewId) => {
    const updatedReviews = reviews.map(review =>
      review.id === reviewId
        ? { ...review, likes: review.likes + 1 }
        : review
    );

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`reviews:${blogSlug}`, JSON.stringify(updatedReviews));
        setReviews(updatedReviews);
      }
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  const handleDelete = (reviewId) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    const updatedReviews = reviews.filter(review => review.id !== reviewId);

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`reviews:${blogSlug}`, JSON.stringify(updatedReviews));
        setReviews(updatedReviews);
      }
    } catch (error) {
      console.error('Error deleting review:', error);
      setError('Failed to delete review. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center">
          <MessageCircle size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Reviews & Comments
          </h2>
          <p className="text-gray-600 text-sm">
            {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* Review Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Leave a Review</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Comment
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Share your thoughts about this article..."
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
              disabled={isSubmitting}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Posting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Post Review</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
            <MessageCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg font-medium">No reviews yet</p>
            <p className="text-gray-500 text-sm mt-2">Be the first to share your thoughts!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {formatDate(review.date)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete review"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.comment}
                  </p>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(review.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 rounded-lg transition-colors font-medium text-sm"
                  >
                    <ThumbsUp size={16} />
                    <span>{review.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}