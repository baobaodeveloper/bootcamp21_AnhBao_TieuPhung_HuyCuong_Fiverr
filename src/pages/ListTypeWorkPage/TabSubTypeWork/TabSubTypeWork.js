import React from 'react';

export default function TabSubTypeWork(props) {
  const { typeJob, subTypeJob } = props;

  return (
    <div className='w-full px-6 py-6 pt-0 text-left text-lg'>
      <ul>
        <li className='font-bold'>
          <a href=''>{typeJob.name}</a>
        </li>
        {subTypeJob.map((item) => (
          <li key={item._id} className='text-gray-500 hover:'>
            <a href={`/list_work/${typeJob.id}/${item._id}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
