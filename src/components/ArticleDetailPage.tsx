import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../types/APIcall.ts';
import { Article } from '../types';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      if (id) {
        const article = await fetchArticleById(id);
        setArticle(article);
      }
    };
    getArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center mb-5">
      <h1 className="mt-5 mx-5 text-center">{article.title}</h1>
      <img className="my-5 w-30" src={article.image_url} alt={article.title} />
      <p className="fw-bold mt-0">{new Date(article.published_at).toLocaleDateString()}</p>
      <p className="mx-5">{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetailPage;