import React from 'react';
import ArticleList from '../components/ArticleList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="my-5 text-center fst-italic fw-bolder">Epic News</h1>
      <ArticleList />
    </div>
  );
};

export default HomePage;