import { useEffect, useState } from "react";
import Article from "./Article";

export interface IArticle {
  id: number;
  title: string;
  text: string[];
  image?: string;
  alt?: string;
  tags: string[];
}

const ArticleList = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetch("/assets/articles.json")
      .then((response) => response.json())
      .then((data: IArticle[]) => setArticles(data));
  }, []);

  return (
    <main className="mt-5 sm:mt-0 mx-5 min-[1200px]:m-auto max-w-6xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
};

export default ArticleList;
