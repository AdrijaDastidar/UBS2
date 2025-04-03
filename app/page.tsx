"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  MessageSquare,
  ArrowUpCircle,
  ArrowDownCircle,
  BookOpen,
  TrendingUp,
  Clock,
  Star,
  Award,
  Sparkles,
  PlusCircle,
  Send,
  Filter,
  ChevronDown,
  GraduationCap,
  Lightbulb,
  Bookmark,
  Share2,
  Bell,
  Menu,
  X,
} from "lucide-react"

// Custom components
const Globe = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const Brain = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
)

const Palette = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
)

const Smartphone = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
)

const initialPosts = [
  {
    id: 1,
    title: "How to use Next.js 13 App Router",
    content: "I'm trying to understand the new App Router in Next.js 13. Can anyone help?",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Student",
    },
    upvotes: 10,
    comments: 3,
    time: "2 hours ago",
    category: "Next.js",
    isUpvoted: false,
    isDownvoted: false,
    commentsList: [
      {
        id: 101,
        author: {
          name: "Jane Smith",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "Mentor",
        },
        content: "Check out the official Next.js documentation. It's very helpful!",
        time: "1 hour ago",
        upvotes: 5,
        isUpvoted: false,
      },
      {
        id: 102,
        author: {
          name: "Peter Jones",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "Student",
        },
        content: "I agree! The documentation is a great place to start.",
        time: "30 minutes ago",
        upvotes: 2,
        isUpvoted: false,
      },
    ],
  },
  {
    id: 2,
    title: "Best practices for TypeScript",
    content: "What are some best practices for using TypeScript in a large project?",
    author: {
      name: "Alice Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Mentor",
    },
    upvotes: 5,
    comments: 1,
    time: "1 day ago",
    category: "TypeScript",
    isUpvoted: false,
    isDownvoted: false,
    commentsList: [
      {
        id: 201,
        author: {
          name: "Bob Williams",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "Student",
        },
        content: "Use interfaces and types effectively to define your data structures.",
        time: "12 hours ago",
        upvotes: 3,
        isUpvoted: false,
      },
    ],
  },
]

const categories = [
  { name: "Next.js", icon: <Globe className="h-4 w-4" />, count: 25 },
  { name: "React", icon: <Sparkles className="h-4 w-4" />, count: 18 },
  { name: "TypeScript", icon: <Brain className="h-4 w-4" />, count: 12 },
  { name: "UI Design", icon: <Palette className="h-4 w-4" />, count: 8 },
  { name: "Mobile Dev", icon: <Smartphone className="h-4 w-4" />, count: 5 },
]

const topMentors = [
  { name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32", role: "Frontend Mentor", rating: 4.8 },
  { name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32", role: "Backend Mentor", rating: 4.5 },
  { name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32", role: "UI/UX Mentor", rating: 4.7 },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [activePost, setActivePost] = useState(null)
  const [newComment, setNewComment] = useState("")
  const [isCreatingPost, setIsCreatingPost] = useState(false)
  const [newPost, setNewPost] = useState({ title: "", content: "", category: "" })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleVote = (postId, direction) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          if (direction === "up" && !post.isUpvoted) {
            return {
              ...post,
              upvotes: post.isDownvoted ? post.upvotes + 2 : post.upvotes + 1,
              isUpvoted: true,
              isDownvoted: false,
            }
          } else if (direction === "down" && !post.isDownvoted) {
            return {
              ...post,
              upvotes: post.isUpvoted ? post.upvotes - 2 : post.upvotes - 1,
              isDownvoted: true,
              isUpvoted: false,
            }
          }
        }
        return post
      }),
    )
  }

  const handleCommentVote = (postId, commentId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const updatedComments = post.commentsList.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                upvotes: comment.isUpvoted ? comment.upvotes - 1 : comment.upvotes + 1,
                isUpvoted: !comment.isUpvoted,
              }
            }
            return comment
          })
          return { ...post, commentsList: updatedComments }
        }
        return post
      }),
    )
  }

  const handleSubmitComment = (postId) => {
    if (!newComment.trim()) return

    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const newCommentObj = {
          id: Date.now(),
          author: {
            name: "current_user",
            avatar: "/placeholder.svg?height=40&width=40",
            role: "Student",
          },
          content: newComment,
          time: "Just now",
          upvotes: 0,
          isUpvoted: false,
        }

        return {
          ...post,
          comments: post.comments + 1,
          commentsList: [...post.commentsList, newCommentObj],
        }
      }
      return post
    })

    setPosts(updatedPosts)
    setNewComment("")
  }

  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim() || !newPost.category) return

    const createdPost = {
      id: Date.now(),
      ...newPost,
      author: {
        name: "current_user",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Student",
      },
      upvotes: 0,
      comments: 0,
      time: "Just now",
      isUpvoted: false,
      isDownvoted: false,
      commentsList: [],
    }

    setPosts([createdPost, ...posts])
    setNewPost({ title: "", content: "", category: "" })
    setIsCreatingPost(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-purple-400" />
                <span className="font-bold text-xl hidden sm:inline-block">EduConnect</span>
              </Link>

              <div className="relative hidden md:block w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search discussions..."
                  className="pl-8 bg-gray-800 border-gray-700 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsCreatingPost(true)}
                className="bg-purple-600 hover:bg-purple-700 hidden sm:flex"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> New Post
              </Button>
              <Button
                onClick={() => setIsCreatingPost(true)}
                size="icon"
                className="bg-purple-600 hover:bg-purple-700 sm:hidden"
              >
                <PlusCircle className="h-4 w-4" />
              </Button>

              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
              </Button>

              <Avatar className="h-8 w-8 border border-gray-700">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <Button
                size="icon"
                variant="ghost"
                className="md:hidden text-gray-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search - Only visible on small screens */}
      <div className="md:hidden bg-gray-900 px-4 py-2 border-b border-gray-800">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search discussions..."
            className="pl-8 bg-gray-800 border-gray-700 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800"
          >
            <div className="px-4 py-3">
              <div className="space-y-4">
                <div className="font-medium">Categories</div>
                {categories.slice(0, 4).map((category, index) => (
                  <Link key={index} href="#" className="flex items-center justify-between py-2 hover:text-purple-400">
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-400">{category.icon}</span>
                      {category.name}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </Link>
                ))}
                <Link href="#" className="text-purple-400 flex items-center py-2">
                  <ChevronDown className="mr-1 h-4 w-4" /> Show More
                </Link>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="font-medium">Top Mentors</div>
                {topMentors.map((mentor, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{mentor.name}</div>
                        <div className="text-xs text-gray-400">{mentor.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-400 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 mr-1" />
                      {mentor.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block w-64 space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <h3 className="font-medium">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center justify-between py-2 hover:text-purple-400 group"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-400 group-hover:text-purple-400">{category.icon}</span>
                      {category.name}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <h3 className="font-medium flex items-center">
                  <Award className="mr-2 h-4 w-4 text-yellow-400" />
                  Top Mentors
                </h3>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                {topMentors.map((mentor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{mentor.name}</div>
                        <div className="text-xs text-gray-400">{mentor.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-400 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 mr-1" />
                      {mentor.rating}
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full text-purple-400 hover:text-purple-300">
                  View All Mentors
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-6">
              <Tabs defaultValue="trending">
                <div className="flex items-center justify-between mb-4">
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="trending" className="data-[state=active]:bg-gray-700">
                      <TrendingUp className="mr-2 h-4 w-4" /> Trending
                    </TabsTrigger>
                    <TabsTrigger value="latest" className="data-[state=active]:bg-gray-700">
                      <Clock className="mr-2 h-4 w-4" /> Latest
                    </TabsTrigger>
                    <TabsTrigger value="top" className="data-[state=active]:bg-gray-700">
                      <Star className="mr-2 h-4 w-4" /> Top
                    </TabsTrigger>
                  </TabsList>

                  <Button variant="outline" size="sm" className="hidden sm:flex">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>

                <TabsContent value="trending" className="mt-0">
                  <motion.div
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="space-y-4"
                  >
                    {/* Create Post Card */}
                    <motion.div variants={fadeIn}>
                      <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="pt-6">
                          <div
                            className="flex items-center space-x-4 cursor-pointer"
                            onClick={() => setIsCreatingPost(true)}
                          >
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className="bg-gray-800 rounded-full py-2 px-4 flex-1 text-gray-400 hover:bg-gray-700">
                              Ask a question or share something...
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Posts */}
                    {posts.map((post) => (
                      <motion.div key={post.id} variants={fadeIn}>
                        <Card className="bg-gray-900 border-gray-800">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={post.author.avatar} />
                                  <AvatarFallback>{post.author.name[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center">
                                    <span className="font-medium text-sm">{post.author.name}</span>
                                    {post.author.role === "Mentor" && (
                                      <Badge className="ml-2 bg-purple-600 text-white text-xs">
                                        <GraduationCap className="mr-1 h-3 w-3" /> Mentor
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-xs text-gray-400">{post.time}</div>
                                </div>
                              </div>
                              <Badge variant="outline" className="bg-gray-800 text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-3">
                            <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                            <p className="text-gray-300">{post.content}</p>
                          </CardContent>
                          <CardFooter className="pt-0 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className={`h-8 w-8 ${post.isUpvoted ? "text-green-500" : "text-gray-400"}`}
                                  onClick={() => handleVote(post.id, "up")}
                                >
                                  <ArrowUpCircle className="h-5 w-5" />
                                </Button>
                                <span className="text-sm font-medium">{post.upvotes}</span>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className={`h-8 w-8 ${post.isDownvoted ? "text-red-500" : "text-gray-400"}`}
                                  onClick={() => handleVote(post.id, "down")}
                                >
                                  <ArrowDownCircle className="h-5 w-5" />
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                                onClick={() => setActivePost(activePost === post.id ? null : post.id)}
                              >
                                <MessageSquare className="mr-1 h-4 w-4" />
                                {post.comments} Comments
                              </Button>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardFooter>

                          {/* Comments Section */}
                          <AnimatePresence>
                            {activePost === post.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t border-gray-800"
                              >
                                <div className="px-6 py-4 space-y-4">
                                  {post.commentsList.map((comment) => (
                                    <div key={comment.id} className="flex space-x-3">
                                      <Avatar className="h-8 w-8 mt-1">
                                        <AvatarImage src={comment.author.avatar} />
                                        <AvatarFallback>{comment.author.name[0].toUpperCase()}</AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1">
                                        <div className="flex items-center">
                                          <span className="font-medium text-sm">{comment.author.name}</span>
                                          {comment.author.role === "Mentor" && (
                                            <Badge className="ml-2 bg-purple-600 text-white text-xs">
                                              <GraduationCap className="mr-1 h-3 w-3" /> Mentor
                                            </Badge>
                                          )}
                                          <span className="text-xs text-gray-400 ml-2">{comment.time}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm mt-1">{comment.content}</p>
                                        <div className="flex items-center mt-2">
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            className={`h-6 px-2 ${comment.isUpvoted ? "text-green-500" : "text-gray-400"}`}
                                            onClick={() => handleCommentVote(post.id, comment.id)}
                                          >
                                            <ArrowUpCircle className="h-4 w-4 mr-1" />
                                            <span className="text-xs">{comment.upvotes}</span>
                                          </Button>
                                          <Button size="sm" variant="ghost" className="h-6 px-2 text-gray-400">
                                            <MessageSquare className="h-3 w-3 mr-1" />
                                            <span className="text-xs">Reply</span>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {/* Add Comment */}
                                  <div className="flex space-x-3 mt-4">
                                    <Avatar className="h-8 w-8 mt-1">
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                      <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                      <Textarea
                                        placeholder="Write a comment..."
                                        className="bg-gray-800 border-gray-700 min-h-[80px]"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                      />
                                      <div className="flex justify-end">
                                        <Button
                                          size="sm"
                                          className="bg-purple-600 hover:bg-purple-700"
                                          onClick={() => handleSubmitComment(post.id)}
                                        >
                                          <Send className="mr-2 h-4 w-4" /> Post Comment
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="latest" className="mt-0">
                  <div className="p-8 text-center text-gray-400">
                    <Clock className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Latest Discussions</h3>
                    <p>Switch to this tab to see the most recent discussions.</p>
                  </div>
                </TabsContent>

                <TabsContent value="top" className="mt-0">
                  <div className="p-8 text-center text-gray-400">
                    <Star className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Top Discussions</h3>
                    <p>Switch to this tab to see the highest rated discussions.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden lg:block w-72 space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <h3 className="font-medium flex items-center">
                  <Lightbulb className="mr-2 h-4 w-4 text-yellow-400" />
                  Quick Tips
                </h3>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Asking Good Questions</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Be specific about what you're trying to achieve
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Include relevant code snippets or error messages
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Mention what you've already tried
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Community Guidelines</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Be respectful and constructive in discussions
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Upvote helpful answers and questions
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-1">•</span>
                      Flag inappropriate content for moderation
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <h3 className="font-medium">Trending Topics</h3>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {[
                  "Next.js 13 App Router",
                  "React Server Components",
                  "TypeScript Best Practices",
                  "AI in Education",
                  "Data Visualization Techniques",
                ].map((topic, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block py-1.5 px-3 rounded-md text-sm hover:bg-gray-800 hover:text-purple-400"
                  >
                    #{topic.toLowerCase().replace(/\s+/g, "_")}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <AnimatePresence>
        {isCreatingPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsCreatingPost(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-900 rounded-lg w-full max-w-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium">Create a New Post</h3>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-gray-400"
                    onClick={() => setIsCreatingPost(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="post-title" className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <Input
                      id="post-title"
                      placeholder="What's your question or topic?"
                      className="bg-gray-800 border-gray-700"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="post-category" className="block text-sm font-medium mb-1">
                      Category
                    </label>
                    <select
                      id="post-category"
                      className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 py-2 px-3"
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="post-content" className="block text-sm font-medium mb-1">
                      Content
                    </label>
                    <Textarea
                      id="post-content"
                      placeholder="Describe your question or share your thoughts..."
                      className="bg-gray-800 border-gray-700 min-h-[150px]"
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6 space-x-3">
                  <Button variant="outline" onClick={() => setIsCreatingPost(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleCreatePost}>
                    <Sparkles className="mr-2 h-4 w-4" /> Publish Post
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

