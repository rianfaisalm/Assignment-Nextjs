import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-2xl font-bold text-green-900">{router.query.slug}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      blanditiis quaerat iste accusamus error adipisci molestias debitis maxime
      ratione et, eaque cupiditate, laudantium aliquam fugit! Eaque, impedit.
      Velit, et autem.
    </div>
  );
};

export default BlogDetails;
