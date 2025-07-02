import BlogList from '@/components/blogs/BlogList'
import FeatureBlog from '@/components/blogs/FeatureBlog'
import HeroBlog from '@/components/blogs/HeroBlog'
import FAQ from '@/components/FAQAbout'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroBlog/>
      <FeatureBlog/>
      <BlogList/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}

export default page
