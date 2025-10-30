import type { BlogPost, BlogCategory, BlogTag } from "@/types/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "tech",
    name: "Technology",
    slug: "technology",
    description: "Latest tech trends and innovations",
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    description: "Business insights and strategies",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Life tips and personal development",
  },
  {
    id: "design",
    name: "Design",
    slug: "design",
    description: "Design trends and inspiration",
  },
];

export const BLOG_TAGS: BlogTag[] = [
  { id: "react", name: "React", slug: "react" },
  { id: "nextjs", name: "Next.js", slug: "nextjs" },
  { id: "typescript", name: "TypeScript", slug: "typescript" },
  { id: "webdev", name: "Web Development", slug: "web-development" },
  { id: "ui", name: "UI/UX", slug: "ui-ux" },
  { id: "productivity", name: "Productivity", slug: "productivity" },
  { id: "startup", name: "Startup", slug: "startup" },
  { id: "remote", name: "Remote Work", slug: "remote-work" },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js 15, including new features like Turbopack and improved performance.",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building modern web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and how to get started.

## What's New in Next.js 15

### Turbopack Integration
Turbopack is now the default bundler for development, offering significantly faster build times and hot reloading.

### Improved Performance
Next.js 15 includes several performance optimizations that make your applications faster and more efficient.

### Enhanced Developer Experience
The development experience has been improved with better error messages, debugging tools, and TypeScript support.

## Getting Started

To create a new Next.js 15 project, run:

npx create-next-app@latest my-app

This will create a new Next.js project with all the latest features and best practices.

## Key Features

1. **App Router**: The new App Router provides a more intuitive way to structure your application
2. **Server Components**: Build faster applications with server-side rendering
3. **TypeScript Support**: First-class TypeScript support out of the box
4. **CSS Modules**: Built-in support for CSS modules and styled components

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications easier and more efficient. With its new features and improvements, it's the perfect choice for your next project.
    `,
    author: {
      name: "Sarah Johnson",
      bio: "Senior Frontend Developer with 8+ years of experience in React and Next.js",
    },
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
    tags: ["nextjs", "react", "webdev"],
    category: "tech",
    readTime: 8,
    featured: true,
    image: {
      src: "/api/placeholder/800/400",
      alt: "Next.js 15 development setup",
    },
  },
  {
    id: "2",
    slug: "building-responsive-designs-with-tailwind",
    title: "Building Responsive Designs with Tailwind CSS",
    excerpt:
      "Master the art of creating beautiful, responsive designs using Tailwind CSS utility classes and best practices.",
    content: `
# Building Responsive Designs with Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in modern web development. In this guide, we'll explore how to create responsive designs that work perfectly across all devices.

## Understanding Tailwind's Responsive System

Tailwind uses a mobile-first approach with breakpoints:
- sm: 640px and up
- md: 768px and up
- lg: 1024px and up
- xl: 1280px and up
- 2xl: 1536px and up

## Best Practices

### 1. Mobile-First Design
Always start with mobile styles and progressively enhance for larger screens.

### 2. Consistent Spacing
Use Tailwind's spacing scale for consistent layouts across your application.

### 3. Component-Based Approach
Create reusable components that adapt to different screen sizes.

## Common Patterns

### Responsive Grid
Use grid classes to create responsive layouts:
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4

### Responsive Typography
Use responsive text classes:
- text-2xl md:text-4xl lg:text-6xl font-bold

## Conclusion

Tailwind CSS makes responsive design accessible and maintainable. By following these patterns and best practices, you can create beautiful, responsive applications that work perfectly on any device.
    `,
    author: {
      name: "Mike Chen",
      bio: "UI/UX Designer and Frontend Developer specializing in design systems",
    },
    publishedAt: new Date("2024-01-10"),
    tags: ["ui", "webdev", "typescript"],
    category: "design",
    readTime: 6,
    featured: false,
    image: {
      src: "/api/placeholder/800/400",
      alt: "Responsive design with Tailwind CSS",
    },
  },
  {
    id: "3",
    slug: "remote-work-productivity-tips",
    title: "10 Productivity Tips for Remote Workers",
    excerpt:
      "Boost your productivity while working from home with these proven strategies and tools.",
    content: `
# 10 Productivity Tips for Remote Workers

Working from home can be challenging, but with the right strategies, you can maintain high productivity and work-life balance. Here are 10 proven tips to help you succeed.

## 1. Create a Dedicated Workspace

Having a dedicated workspace helps you mentally separate work from personal life. Even if you don't have a separate room, designate a specific area for work.

## 2. Establish a Routine

Maintain consistent work hours and stick to a daily routine. This helps create structure and improves focus.

## 3. Use Time Blocking

Block specific times for different tasks. This technique helps you stay focused and ensures important tasks get done.

## 4. Minimize Distractions

Turn off notifications, close unnecessary tabs, and create a distraction-free environment.

## 5. Take Regular Breaks

Follow the Pomodoro Technique or similar methods to take regular breaks and maintain energy throughout the day.

## 6. Communicate Effectively

Over-communicate with your team. Use video calls, instant messaging, and project management tools to stay connected.

## 7. Set Boundaries

Establish clear boundaries between work and personal time. Don't let work bleed into your personal life.

## 8. Stay Organized

Use digital tools to organize your tasks, files, and communications.

## 9. Invest in Good Equipment

A comfortable chair, good lighting, and reliable internet connection can significantly impact your productivity.

## 10. Practice Self-Care

Take care of your physical and mental health. Exercise, eat well, and get enough sleep.

## Conclusion

Remote work requires discipline and the right strategies. By implementing these tips, you can maintain high productivity while enjoying the flexibility of working from home.
    `,
    author: {
      name: "Emily Rodriguez",
      bio: "Productivity Coach and Remote Work Consultant",
    },
    publishedAt: new Date("2024-01-05"),
    tags: ["productivity", "remote", "lifestyle"],
    category: "lifestyle",
    readTime: 5,
    featured: false,
    image: {
      src: "/api/placeholder/800/400",
      alt: "Remote work productivity setup",
    },
  },
  {
    id: "4",
    slug: "startup-funding-guide-2024",
    title: "The Complete Guide to Startup Funding in 2024",
    excerpt:
      "Navigate the complex world of startup funding with this comprehensive guide covering all funding stages and options.",
    content: `
# The Complete Guide to Startup Funding in 2024

Securing funding is one of the biggest challenges for startups. This guide covers all the funding options available in 2024 and how to approach each one.

## Types of Startup Funding

### 1. Bootstrapping
Self-funding your startup using personal savings, revenue, or minimal external capital.

### 2. Friends and Family
Raising money from personal connections who believe in your vision.

### 3. Angel Investors
High-net-worth individuals who invest their own money in early-stage startups.

### 4. Venture Capital
Professional investment firms that provide capital in exchange for equity.

### 5. Crowdfunding
Raising small amounts of money from a large number of people through online platforms.

## Funding Stages

### Pre-Seed
- Amount: $10K - $250K
- Purpose: Product development and market validation
- Investors: Founders, friends, family, angel investors

### Seed
- Amount: $250K - $2M
- Purpose: Product-market fit and initial growth
- Investors: Angel investors, seed VCs

### Series A
- Amount: $2M - $15M
- Purpose: Scaling the business
- Investors: Venture capital firms

### Series B and Beyond
- Amount: $15M+
- Purpose: Market expansion and growth
- Investors: Later-stage VCs, private equity

## Preparing for Funding

### 1. Business Plan
Create a comprehensive business plan that outlines your vision, market opportunity, and financial projections.

### 2. Pitch Deck
Develop a compelling pitch deck that tells your story and demonstrates the opportunity.

### 3. Financial Model
Build a detailed financial model that shows your path to profitability.

### 4. Team
Assemble a strong team with relevant experience and skills.

## Conclusion

Funding is a journey, not a destination. Focus on building a great product, finding product-market fit, and creating value for your customers. The funding will follow.
    `,
    author: {
      name: "David Kim",
      bio: "Venture Capitalist and Startup Advisor with 15+ years of experience",
    },
    publishedAt: new Date("2024-01-01"),
    tags: ["startup", "business", "productivity"],
    category: "business",
    readTime: 12,
    featured: true,
    image: {
      src: "/api/placeholder/800/400",
      alt: "Startup funding and investment",
    },
  },
  {
    id: "5",
    slug: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "Learn the latest TypeScript best practices and patterns to write more maintainable and type-safe code.",
    content: `
# TypeScript Best Practices for 2024

TypeScript continues to evolve, and with it, the best practices for writing type-safe, maintainable code. Here are the latest recommendations for 2024.

## 1. Use Strict Mode

Always enable strict mode in your TypeScript configuration:

{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}

## 2. Leverage Type Inference

Let TypeScript infer types when possible:

// Good
const users = ['Alice', 'Bob', 'Charlie'];

// Avoid
const users: string[] = ['Alice', 'Bob', 'Charlie'];

## 3. Use Union Types Effectively

Union types are powerful for modeling different states:

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

## 4. Prefer Interfaces for Object Types

Use interfaces for object shapes:

interface User {
  id: string;
  name: string;
  email: string;
}

## 5. Use Generic Constraints

Generic constraints help you write more flexible and reusable code:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

## 6. Handle Null and Undefined

Use optional chaining and nullish coalescing:

const userName = user?.profile?.name ?? 'Anonymous';

## 7. Use Discriminated Unions

For complex state management:

type ApiResponse = 
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string };

## Conclusion

These best practices will help you write more robust, maintainable TypeScript code. Remember to keep up with the latest TypeScript releases and community recommendations.
    `,
    author: {
      name: "Alex Thompson",
      bio: "Senior Software Engineer and TypeScript advocate",
    },
    publishedAt: new Date("2023-12-28"),
    tags: ["typescript", "webdev", "react"],
    category: "tech",
    readTime: 10,
    featured: false,
    image: {
      src: "/api/placeholder/800/400",
      alt: "TypeScript code and best practices",
    },
  },
];

// Helper function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return MOCK_BLOG_POSTS.find((post) => post.slug === slug);
}

// Helper function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return MOCK_BLOG_POSTS;
}

// Helper function to get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return MOCK_BLOG_POSTS.filter((post) => post.featured);
}

// Helper function to get blog posts by category
export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return MOCK_BLOG_POSTS.filter((post) => post.category === categorySlug);
}

// Helper function to get blog posts by tag
export function getBlogPostsByTag(tagSlug: string): BlogPost[] {
  return MOCK_BLOG_POSTS.filter((post) =>
    post.tags.some((tag) => tag === tagSlug),
  );
}
