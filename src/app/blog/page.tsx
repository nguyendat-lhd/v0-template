"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample blog post data (you can move this to a separate file later)
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
  {
    id: 4,
    title: "The Importance of Work-Life Balance in the Digital Age",
    excerpt:
      "Discover strategies to maintain a healthy work-life balance while navigating the challenges of the modern workplace.",
    image: "/placeholder.svg?height=600&width=800",
    date: "Jun 5, 2023",
    author: "Emily Wong",
    category: "Wellness",
  },
  {
    id: 5,
    title: "Emerging Trends in Project Management",
    excerpt: "Stay ahead of the curve with these cutting-edge project management methodologies and tools.",
    image: "/placeholder.svg?height=600&width=800",
    date: "Jul 18, 2023",
    author: "David Smith",
    category: "Management",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Remote Teams",
    excerpt:
      "Protect your organization's data and assets with these essential cybersecurity measures for distributed workforces.",
    image: "/placeholder.svg?height=600&width=800",
    date: "Aug 30, 2023",
    author: "Sarah Thompson",
    category: "Security",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">StreamLine Blog</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tips, and trends to boost your productivity and streamline your workflow
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-lg mx-auto">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-background border border-border rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {filteredPosts.length === 0 && (
          <div className="text-center text-muted-foreground mt-12">No blog posts found matching your search.</div>
        )}
      </div>
    </div>
  )
}

