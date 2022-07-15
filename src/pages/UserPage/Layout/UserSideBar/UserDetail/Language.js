import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Select } from 'antd';
import { notificationAlert } from '../../../../../utils/notifycation';

const { Option } = Select;

export const Language = () => {
  const [language, setLanguage] = useState('');

  const [languageLevel, setLanguageLevel] = useState('');

  const [listLanguage, setListLanguage] = useState([]);
  const [showEdit, setShowEdit] = useState(true);
  const handleUpdatelanguage = () => {
    const checkLanguageExist = listLanguage.findIndex(
      (item) => item.language === language
    );

    if (checkLanguageExist === -1) {
      const languageObject = { language, languageLevel };
      setListLanguage([...listLanguage, languageObject]);
      notificationAlert('success', 'Add Language Success');
    } else if (
      checkLanguageExist !== -1 &&
      listLanguage[checkLanguageExist].languageLevel !== languageLevel
    ) {
      listLanguage.splice(checkLanguageExist, 1);

      const languageObject = { language, languageLevel };
      setListLanguage([...listLanguage, languageObject]);
      notificationAlert('success', 'Add Language Success');
    } else {
      setListLanguage([...listLanguage]);
      notificationAlert(
        'warning',
        'Add Language Fail',
        'Language has been exist'
      );
    }

    setShowEdit(true);

    setLanguage('');
    setLanguageLevel('');
  };

  return (
    <div className='mb-10 pb-10 border-b border-[#dadbdd] text-lg'>
      <div>
        <Tooltip
          overlayStyle={{ maxWidth: '310px' }}
          placement='topLeft'
          title={
            <p className='text-md font-semibold'>
              You can make up to to four selection
            </p>
          }
        >
          <div className='flex justify-between items-center text-lg'>
            <span className='font-bold'>Language</span>
            {showEdit && (
              <span
                onClick={() => setShowEdit(false)}
                className='hover:underline cursor-pointer'
              >
                Add languages
              </span>
            )}
          </div>
        </Tooltip>
      </div>

      {!showEdit && (
        <div className=' mt-3 w-full flex flex-col  p-4 pb-0  bg-[#f4f4f4] border border-[#dadbdd] rounded-sm '>
          <div className='cursor-pointer mb-4'>
            <Select
              size='large'
              onChange={(value) => setLanguage(value)}
              showSearch
              style={{
                width: '100%',
              }}
              placeholder='Choose Language'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.includes(input)
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value='English'>English</Option>
              <Option value='Vietnamese'>Vietnamese</Option>
            </Select>
          </div>

          <div className='cursor-pointer border-b border-[#dadbdd] pb-4'>
            <Select
              size='large'
              onChange={(value) => setLanguageLevel(value)}
              style={{
                width: '100%',
              }}
              placeholder='Language Level'
              optionFilterProp='children'
            >
              <Option value='Basic'>Basic</Option>
              <Option value='Conversational'>Conversational</Option>
              <Option value='Fluent'>Fluent</Option>
              <Option value='Native/Bilingual'>
                Native/Bilingual
              </Option>
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
            {language && languageLevel ? (
              <button
                onClick={handleUpdatelanguage}
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
        {listLanguage?.length > 0 &&
          listLanguage.map((item, i) => {
            return (
              <div key={i} className='flex items-center gap-x-3'>
                <span>
                  <span className='font-semibold'>
                    {item.language}
                  </span>
                  -
                  <span className='text-slate-400'>
                    {item.languageLevel}
                  </span>
                </span>
                <RiDeleteBin6Line
                  onClick={() => {
                    listLanguage.splice(i, 1);
                    setListLanguage([...listLanguage]);
                    notificationAlert(
                      'warning',
                      'Delete Language Success'
                    );
                  }}
                  className='cursor-pointer'
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
