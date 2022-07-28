import React from 'react';

export default function TabSubTypeWork({
  typeJob,
  setIndexTypeWork,
}) {
  return (
    <div className='w-full px-6 py-6 pt-0 text-left text-lg'>
      <ul>
        {typeJob?.map((item, i) => (
          <li
            onClick={() => setIndexTypeWork(i)}
            key={item.id}
            className='text-gray-500 hover:'
          >
            <span className='font-semibold cursor-pointer'>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
