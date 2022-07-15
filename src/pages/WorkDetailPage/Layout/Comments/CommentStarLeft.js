import { Progress } from 'antd';
import React from 'react';

export const CommentStarLeft = () => {
  return (
    <div className='text-lg flex-1 mb-5'>
      <div className='flex items-center gap-x-3'>
        <button className='text-blue-500 font-semibold hover:bg-slate-100 py-2 px-2 text-xl rounded-lg leading-none transition-all'>
          5 Stars
        </button>
        <div className='w-[200px]'>
          <Progress
            showInfo={false}
            percent={(47969 / 53054) * 100}
            strokeColor={'#ffb33e'}
            trailColor={'#e4e5e7'}
          />
        </div>
        <span className='text-blue-500 cursor-pointer'>(47,969)</span>
      </div>
      <div className='flex items-center gap-x-3'>
        <button className='text-blue-500 font-semibold hover:bg-slate-100 py-2 px-2 text-xl rounded-lg leading-none transition-all'>
          4 Stars
        </button>
        <div className='w-[200px]'>
          <Progress
            showInfo={false}
            percent={(3577 / 53054) * 100}
            strokeColor={'#ffb33e'}
            trailColor={'#e4e5e7'}
          />
        </div>
        <span className='text-blue-500 cursor-pointer'>(3,577)</span>
      </div>
      <div className='flex items-center gap-x-3'>
        <button className='text-blue-500 font-semibold hover:bg-slate-100 py-2 px-2 text-xl rounded-lg leading-none transition-all'>
          3 Stars
        </button>
        <div className='w-[200px]'>
          <Progress
            showInfo={false}
            percent={(814 / 53054) * 100}
            strokeColor={'#ffb33e'}
            trailColor={'#e4e5e7'}
          />
        </div>
        <span className='text-blue-500 cursor-pointer'>(814)</span>
      </div>
      <div className='flex items-center gap-x-3'>
        <button className='text-blue-500 font-semibold hover:bg-slate-100 py-2 px-2 text-xl rounded-lg leading-none transition-all'>
          2 Stars
        </button>
        <div className='w-[200px]'>
          <Progress
            showInfo={false}
            percent={(366 / 53054) * 100}
            strokeColor={'#ffb33e'}
            trailColor={'#e4e5e7'}
          />
        </div>
        <span className='text-blue-500 cursor-pointer'>(366)</span>
      </div>
      <div className='flex items-center gap-x-3'>
        <button className='text-blue-500 font-semibold hover:bg-slate-100 py-2 px-2 text-xl rounded-lg leading-none transition-all'>
          1 Stars
        </button>
        <div className='w-[200px]'>
          <Progress
            showInfo={false}
            percent={(328 / 53054) * 100}
            strokeColor={'#ffb33e'}
            trailColor={'#e4e5e7'}
          />
        </div>
        <span className='text-blue-500 cursor-pointer'>(328)</span>
      </div>
    </div>
  );
};
