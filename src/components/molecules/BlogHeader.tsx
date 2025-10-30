import styles from "./BlogHeader.module.css";
import type { BlogPost } from "@/types/blog";

interface BlogHeaderProps {
  post: BlogPost;
  className?: string;
}

export function BlogHeader({ post, className = "" }: BlogHeaderProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <header className={`${styles.header} ${className}`.trim()}>
      {post.image && (
        <div className={styles.imageContainer}>
          <img
            src={post.image.src}
            alt={post.image.alt}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.readTime}>{post.readTime} min read</span>
          {post.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.authorInfo}>
          <div className={styles.author}>
            <div className={styles.authorDetails}>
              <span className={styles.authorName}>{post.author.name}</span>
              {post.author.bio && (
                <span className={styles.authorBio}>{post.author.bio}</span>
              )}
            </div>
          </div>

          <div className={styles.publishInfo}>
            <span className={styles.publishDate}>
              Published on {formatDate(post.publishedAt)}
            </span>
            {post.updatedAt && post.updatedAt > post.publishedAt && (
              <span className={styles.updateDate}>
                Updated on {formatDate(post.updatedAt)}
              </span>
            )}
          </div>
        </div>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default BlogHeader;
