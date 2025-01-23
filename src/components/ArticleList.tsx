import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../types/APIcall';
import { Article } from '../types';
import ArticleCard from './ArticleCard';

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (err) {
        setError('Failed to fetch articles');
      }
    };
    getArticles();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;