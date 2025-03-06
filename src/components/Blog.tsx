"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Boost Your Team's Productivity",
    excerpt: "Discover proven strategies to enhance your team's efficiency and output without burning them out.",
    image: "/placeholder.svg?height=600&width=800",
    date: "Mar 15, 2023",
    author: "Alex Johnson",
    category: "Productivity",
  },
  {
    id: 2,
    title: "The Future of Remote Work Tools",
    excerpt: "Explore the emerging technologies that are shaping how distributed teams collaborate and communicate.",
    image: "/placeholder.svg?height=600&width=800",
    date: "Apr 22, 2023",
    author: "Samantha Lee",
    category: "Technology",
  },
  {
    id: 3,
    title: "Streamlining Your Business Processes",
    excerpt:
      "Learn how to identify and eliminate bottlenecks in your workflows to achieve better results with less effort.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 10, 2023",
    author: "Michael Chen",
    category: "Business",
  },
]

export default function Blog() {
  return (
    <div className="py-24 bg-background relative overflow-hidden" id="blog">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-primary-light rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary-light rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Blog
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Latest Insights & Updates
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Stay informed with the latest trends, tips, and best practices in productivity and workflow management.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-background border border-border rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            View all posts
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

