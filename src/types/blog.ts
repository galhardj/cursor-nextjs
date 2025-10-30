export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
  readTime: number; // in minutes
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}
