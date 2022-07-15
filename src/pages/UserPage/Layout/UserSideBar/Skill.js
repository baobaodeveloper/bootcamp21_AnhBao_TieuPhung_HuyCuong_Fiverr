import { Input, Select, Tooltip } from 'antd';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { notificationAlert } from '../../../../utils/notifycation';
const { Option } = Select;

export const Skill = () => {
  const [skill, setSkill] = useState('');

  const [skillLevel, setSkillLevel] = useState('');

  const [listSkill, setListSkill] = useState([]);
  const [showEdit, setShowEdit] = useState(true);

  const handleUpdateSkill = () => {
    const checkIndexSkillExist = listSkill.findIndex(
      (item) => item.skill === skill
    );

    if (checkIndexSkillExist === -1) {
      const skillObject = { skill, skillLevel };
      setListSkill([...listSkill, skillObject]);
      notificationAlert('success', 'Add Skill Success');
    } else if (
      checkIndexSkillExist !== -1 &&
      listSkill[checkIndexSkillExist].skillLevel !== skillLevel
    ) {
      listSkill.splice(checkIndexSkillExist, 1);
      const skillObject = { skill, skillLevel };
      setListSkill([...listSkill, skillObject]);
      notificationAlert('success', 'Add Skill Success');
    } else {
      setListSkill([...listSkill]);
      notificationAlert(
        'warning',
        'Add Skill Fail',
        'Skill has been exist'
      );
    }
    setShowEdit(true);

    setSkill('');
    setSkillLevel('');
  };
  return (
    <div className='mb-10 pb-10 border-b border-[#dadbdd] text-lg'>
      <div>
        <Tooltip
          overlayStyle={{ maxWidth: '310px' }}
          placement='topLeft'
          title={
            <p className='text-md font-semibold'>
              Let your buyers know about your skill
            </p>
          }
        >
          <div className='flex justify-between items-center text-lg'>
            <span className='font-bold'>Skill</span>
            {showEdit && (
              <span
                onClick={() => setShowEdit(false)}
                className='hover:underline cursor-pointer'
              >
                Add New
              </span>
            )}
          </div>
        </Tooltip>
      </div>

      {!showEdit && (
        <div className=' mt-3 w-full flex flex-col  p-4 pb-0  bg-[#f4f4f4] border border-[#dadbdd] rounded-sm '>
          <div className='cursor-pointer mb-4'>
            <Input
              onChange={(e) => setSkill(e.target.value)}
              placeholder='Add skill (e.g Voice Talent)'
              size='large'
            />
          </div>

          <div className='cursor-pointer border-b border-[#dadbdd] pb-4'>
            <Select
              size='large'
              onChange={(value) => setSkillLevel(value)}
              style={{
                width: '100%',
              }}
              placeholder='Experience Level'
              optionFilterProp='children'
            >
              <Option value='Beginner'>Beginner</Option>
              <Option value='Intermediate'>Intermediate</Option>
              <Option value='Expect'>Expect</Option>
            </Select>
          </div>

          <div className='flex-1 flex items-center justify-between text-lg font-semibold py-4'>
            <button
              onClick={() => {
                setShowEdit(true);
              }}
              className='py-2  hover:border-[#c9cbce] hover:text-green-500 transition-all border-[#dadbdd] px-8 border bg-white  rounded-sm'
            >
              Cancel
            </button>
            {skill && skillLevel ? (
              <button
                onClick={handleUpdateSkill}
                className='py-2 hover:bg-green-400 transition-all border-[#dadbdd] px-8 border bg-green-500 text-white rounded-sm'
              >
                Update
              </button>
            ) : (
              <button className='py-2  transition-all border-[#dadbdd] px-8 border bg-slate-300 text-white rounded-sm'>
                Update
              </button>
            )}
          </div>
        </div>
      )}

      <div className='flex flex-col gap-y-2 mt-4'>
        {console.log(listSkill)}
        {listSkill.length > 0 &&
          listSkill.map((item, i) => {
            return (
              <div
                key={i}
                className='flex items-center gap-x-3  justify-start'
              >
                <span className='border group px-4 py-2 rounded-[30px] overflow-hidden relative hover:bg-slate-300 cursor-pointer transition-all duration-300'>
                  <span className='font-semibold'>{item.skill}</span>-
                  <span className='text-slate-400'>
                    {item.skillLevel}
                  </span>
                  <div className='absolute left-0 px-2 group-hover:translate-x-0 top-0 bottom-0 bg-white w-[60%] h-full rounded-[30px] flex items-center justify-end   -translate-x-full transition-all duration-300'>
                    <RiDeleteBin6Line
                      onClick={() => {
                        listSkill.splice(i, 1);
                        setListSkill([...listSkill]);
                        notificationAlert(
                          'warning',
                          'Delete Skill Success'
                        );
                      }}
                      className='cursor-pointer'
                    />
                  </div>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
