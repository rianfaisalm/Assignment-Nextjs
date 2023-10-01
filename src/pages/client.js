import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Details from '@/components/client/details';

const Client = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading)
    return (
      <div className="max-w-screen-xl mx-auto h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="font-bold text-2xl">Loading</h1>
      </div>
    );
  if (!data)
    return (
      <div className="max-w-screen-xl mx-auto h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="font-bold text-2xl">No data</h1>
      </div>
    );
  console.log('data', data);
  return (
    <div className="max-w-screen-xl mx-auto h-screen bg-gray-400">
      <ul className="flex flex-col gap-4">
        {data?.map((item, index) => (
          <p key={index} className="text-bold text-base">
            {item?.name}
          </p>
        ))}
      </ul>
      {/*  halaman fetch dari components */}
      <Details />
    </div>
  );
};

export default Client;
