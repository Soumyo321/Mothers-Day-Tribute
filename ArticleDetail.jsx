import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import RelatedArticleCard from './RelatedArticleCard';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex justify-between">
        <div className="w-1/4">
          <h3 className="font-semibold">Overview</h3>
          <p>{article.overview}</p>
        </div>
        <div className="w-3/4">
          <p>{article.content}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((relatedArticle) => (
            <RelatedArticleCard key={relatedArticle.id} article={relatedArticle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
