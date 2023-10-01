import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Details = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data);
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
  if (!user)
    return (
      <div className="max-w-screen-xl mx-auto h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="font-bold text-2xl">No data</h1>
      </div>
    );
  console.log('data user', user);
  return (
    <div>
      {user?.map((item, index) => (
        <p key={index} className="text-bold text-base">
          {item?.email}
        </p>
      ))}
    </div>
  );
};

export default Details;
