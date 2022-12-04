import data from "../../assets/articles.json";

type ArticleProps = typeof data[0];

const Article = ({ text, title, tags, alt, image }: ArticleProps) => {
  return (
    <article className="article-card">
      <h3 className="text-xl font-bold dark:text-gray-200">{title}</h3>
      <ul className="w-full flex-row justify-center gap-2 pr-5 hidden sm:flex">
        {tags.map((tag) => (
          <li key={tag} className="article-tags">
            {tag}
          </li>
        ))}
      </ul>
      <div className="grid gap-3">
        {text.map((paragraph, index) => (
          <p key={index} className="dark:text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
      {image && (
        <div>
          <img className="rounded-md sm:p-4" src={image} />
          {alt && <span className="sr-only">{alt}</span>}
        </div>
      )}
    </article>
  );
};

export default Article;
