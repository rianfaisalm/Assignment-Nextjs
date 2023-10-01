import axios from 'axios';
import React from 'react';

import Detailts from '@/components/server/details';

const FetchServer = ({ data }) => {
  console.log('data Server', data);
  return (
    <div>
      {' '}
      <div className="max-w-screen-xl mx-auto h-screen bg-gray-400">
        <ul className="flex flex-col gap-4">
          {data?.map((item, index) => (
            <p key={index} className="text-bold text-base">
              {item?.name}
            </p>
          ))}
        </ul>
      </div>
      <Detailts />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await res.data;
  return {
    props: { data },
  };
};

export default FetchServer;
