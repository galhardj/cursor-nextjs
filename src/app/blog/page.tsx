import { BlogCard } from "@/components/molecules/BlogCard";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/constants/blog";
import styles from "./page.module.css";

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const regularPosts = allPosts.filter((post) => !post.featured);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Insights, tutorials, and stories from our team
        </p>
      </div>

      {featuredPosts.length > 0 && (
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                className={styles.featuredCard}
              />
            ))}
          </div>
        </section>
      )}

      <section className={styles.articlesSection}>
        <h2 className={styles.sectionTitle}>All Articles</h2>
        <div className={styles.articlesGrid}>
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
