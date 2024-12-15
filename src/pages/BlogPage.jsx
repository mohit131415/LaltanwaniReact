import React from 'react';
import BlogList from '../components/BlogList';
import BlogCategories from '../components/BlogCategories';
import SectionHeading from '../components/SectionHeading';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading title="Dr. Lal Tanwani's Blog" />
      {/* Make categories appear on top for mobile screens */}
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="order-1 md:order-none">
          <BlogCategories />
        </aside>
        <div className="md:col-span-3 order-2 md:order-none">
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
