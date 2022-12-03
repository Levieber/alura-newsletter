import data from "../../assets/articles.json";
import Article from "./Article";

const ArticleList = () => {
  return (
    <main className="mt-5 sm:mt-0 mx-5 min-[1200px]:m-auto max-w-6xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
};

export default ArticleList;
