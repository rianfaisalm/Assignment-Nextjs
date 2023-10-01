import axios from 'axios';
import React from 'react';

const Detailts = ({ data }) => {
  console.log('data dari components', data);
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {data ? (
          data?.map((item, index) => (
            <p key={index} className="text-bold text-base">
              {item?.name}
            </p>
          ))
        ) : (
          <div> Data Error / Kosong </div>
        )}
      </ul>
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

export default Detailts;
