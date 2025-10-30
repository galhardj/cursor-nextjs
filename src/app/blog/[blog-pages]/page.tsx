import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/molecules/BlogHeader";
import { BlogContent } from "@/components/molecules/BlogContent";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { getBlogPostBySlug, getAllBlogPosts } from "@/constants/blog";
import styles from "./page.module.css";

interface BlogPageProps {
  params: {
    "blog-pages": string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    "blog-pages": post.slug,
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params["blog-pages"]);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <ButtonLink href="/blog" variant="outline">
          ← Back to Blog
        </ButtonLink>
      </div>

      <BlogHeader post={post} />

      <div className={styles.contentWrapper}>
        <BlogContent content={post.content} />
      </div>

      <div className={styles.footer}>
        <div className={styles.authorCard}>
          <div className={styles.authorInfo}>
            <h3 className={styles.authorName}>{post.author.name}</h3>
            {post.author.bio && (
              <p className={styles.authorBio}>{post.author.bio}</p>
            )}
          </div>
        </div>

        <div className={styles.navigation}>
          <ButtonLink href="/blog" variant="primary">
            Read More Articles
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
