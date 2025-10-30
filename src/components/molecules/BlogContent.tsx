import styles from "./BlogContent.module.css";

interface BlogContentProps {
  content: string;
  className?: string;
}

export function BlogContent({ content, className = "" }: BlogContentProps) {
  // Simple markdown-like content rendering
  const formatContent = (text: string) => {
    return text.split("\n").map((line, index) => {
      // Handle headers
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className={styles.h1}>
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className={styles.h2}>
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className={styles.h3}>
            {line.slice(4)}
          </h3>
        );
      }

      // Handle code blocks
      if (line.startsWith("```")) {
        return <div key={index} className={styles.codeBlock}></div>;
      }

      // Handle list items
      if (line.startsWith("- ")) {
        return (
          <li key={index} className={styles.listItem}>
            {line.slice(2)}
          </li>
        );
      }

      // Handle numbered lists
      if (/^\d+\. /.test(line)) {
        return (
          <li key={index} className={styles.listItem}>
            {line.replace(/^\d+\. /, "")}
          </li>
        );
      }

      // Handle empty lines
      if (line.trim() === "") {
        return <br key={index} />;
      }

      // Regular paragraphs
      return (
        <p key={index} className={styles.paragraph}>
          {line}
        </p>
      );
    });
  };

  return (
    <article className={`${styles.content} ${className}`.trim()}>
      {formatContent(content)}
    </article>
  );
}

export default BlogContent;
