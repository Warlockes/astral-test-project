import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.category}>JavaScript</p>
        <h1 className={styles.title}>
          Beginner Resources for JavaScript and jQuery
        </h1>
        <div className={styles.meta}>
          <span>⏱ 5 minutes</span>
          <span>•</span>
          <span>Updated: May 26, 2025</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/public/func.jpg"
          alt="Programming"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <p>
          This month, I published two articles on Envato about resources for
          JavaScript and jQuery. For those who get involved in a form of
          development – be it back-end, front-end, or some other type of
          developer – we end up forgetting what it was like not to know how to
          do so something. It’s kind of like riding a bike or swimming, right?
          We may remember when we learned, but how much do we remember about
          losing our balance or not knowing how to keep our head above water?
          And that’s what I think it’s like to be on the outside of a
          programming language, how it interacts with third-party components
          (like the browser or the filesystem), and how the language is
          structured. Because of that, I think it’s important to publish
          resources periodically on topics like this for those who are looking
          to get started.
        </p>

        <p>
          The article covers the following points:
          <ul className={styles.list}>
            <li>Atwood’s Law</li>
            <li>A definition of JavaScript</li>
            <li>Attributes of the language</li>
            <li>How the language is used</li>
            <li>What libraries and frameworks are available for it</li>
            <li>Other resources for learning it</li>
          </ul>
        </p>

        <div className={styles.blockquote}>
          <p>
            If you’re interested in chatting more about the articles, please
            leave comments on the respective article. Other than that, I hope
            they’re useful for those looking to get started in JavaScript
            programming.
          </p>
        </div>

        <p>
          This month, I published two articles on Envato about resources for
          JavaScript and jQuery. For those who get involved in a form of
          development – be it back-end, front-end, or some other type of
          developer – we end up forgetting what it was like not to know how to
          do so something. It’s kind of like riding a bike or swimming, right?
          We may remember when we learned, but how much do we remember about
          losing our balance or not knowing how to keep our head above water?
          And that’s what I think it’s like to be on the outside of a
          programming language, how it interacts with third-party components
          (like the browser or the filesystem), and how the language is
          structured. Because of that, I think it’s important to publish
          resources periodically on topics like this for those who are looking
          to get started.
        </p>
      </div>
    </div>
  );
};
