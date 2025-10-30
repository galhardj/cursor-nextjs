import Link from "next/link";
import Card from "@/components/atoms/Card";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import styles from "./BlogCard.module.css";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <Card className={`${styles.card} ${className}`.trim()}>
      {post.image && (
        <div className={styles.imageContainer}>
          <img
            src={post.image.src}
            alt={post.image.alt}
            className={styles.image}
          />
          {post.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.readTime}>{post.readTime} min read</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <div className={styles.author}>
            <span className={styles.authorName}>{post.author.name}</span>
            <span className={styles.publishDate}>
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <ButtonLink
            href={`/blog/${post.slug}`}
            variant="outline"
            className={styles.readMore}
          >
            Read More
          </ButtonLink>
        </div>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

export default BlogCard;
