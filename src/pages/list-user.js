import axios from 'axios';
import React from 'react';

import User from '@/components/list-user/user';

const ListUser = ({ dataUser }) => {
  console.log('data dari server side props', dataUser);
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center bg-gray-300">
      <ul className="flex flex-col gap-4">
        <User data={dataUser} />
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await res.data;
  return {
    props: { dataUser: data },
  };
};

export default ListUser;
