import React from 'react';
import { Article } from '../types';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card rounded-2">
      <img src={article.image_url} alt={article.title} />
      <h2 className="my-3 fst-italic">{article.title}</h2>
      <p>{new Date(article.published_at).toLocaleDateString()}</p>
      <Link to={`/articles/${article.id}`}>More Details</Link>
    </div>
  );
};

export default ArticleCard;