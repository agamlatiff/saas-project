// File: components/BlogList.tsx

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Correctly using Link
import { FiArrowUpRight } from 'react-icons/fi';

// Define the structure for a blog post
interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

// Sample data for the blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'UI/UX Design',
    title: 'The Anatomy of an Intuitive User Interface',
    excerpt: 'We break down the core principles of creating interfaces that are not only beautiful but also functional, accessible, and a joy to use.',
    imageUrl: '/assets/bloglist-1.jpg',
  },
  {
    id: 2,
    category: 'Digital Marketing',
    title: 'Building a Brand That Resonates in the Digital Age',
    excerpt: 'Discover the secrets to forging deep connections with your audience and building brand loyalty that lasts in a crowded digital marketplace.',
    imageUrl: '/assets/bloglist-2.jpg',
  },
  {
    id: 3,
    category: 'Mobile Development',
    title: 'Crafting Emotionally Engaging Mobile Experiences',
    excerpt: 'Go beyond functionality. Learn how to use design and user feedback to create mobile apps that users love and can\'t put down.',
    imageUrl: '/assets/bloglist-3.jpg',

  },
  {
    id: 4,
    category: 'Business & Data',
    title: 'The Power of Minimalism in Data Visualization',
    excerpt: 'Learn to simplify complex data through minimalist design, creating dashboards that communicate key insights clearly and drive meaningful action.',
    imageUrl: '/assets/bloglist-4.jpg',

  },
];

// The main component that renders the list of blog posts
const BlogList: FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                From the Higher Blog
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Insights on design, technology, and business to help you stay ahead of the curve.
            </p>
        </div>

        <div className="space-y-20">
          {blogPosts.map((post) => (
            <div key={post.id} className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
              {/* Image Column: Link now directly wraps Image */}
              <Link
                href={`/blog`}
                className="block group overflow-hidden rounded-xl"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={560}
                  height={420}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Text Content Column */}
              <div>
                <p className="font-semibold text-indigo-600 mb-2">{post.category}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {/* Title Link: Now a single Link component */}
                  <Link
                    href={`/blog`}
                    className="hover:text-indigo-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                {/* Read More Link: Also a single Link component */}
                <Link
                  href={`/blog`}
                  className="inline-flex items-center font-semibold text-indigo-600 group"
                >
                  <span>Read Full Story</span>
                  <FiArrowUpRight className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;