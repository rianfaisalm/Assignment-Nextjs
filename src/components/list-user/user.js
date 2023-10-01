import Link from 'next/link';
import React from 'react';

const User = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <li key={index} className="text-base font-medium ">
          <Link href={`/users/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
};

export default User;
