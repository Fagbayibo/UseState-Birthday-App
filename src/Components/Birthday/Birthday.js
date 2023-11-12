import React, { useState } from 'react';
import data from '../../data';
import BirthdayList from './BirthdayList';

const Birthday = () => {
    const [people, setPeople] = useState(data)
  return (
    <>
    <div className='flex items-center justify-center my-[50px]'>
    <div className='bg-white rounded-xl shadow-xl '>
    <div className='flex items-center justify-center'>
      <h1 className='px-[30px] py-[30px] font-bold text-3xl'>{people.length} Birthday participant</h1>
      </div>
      <BirthdayList people={people}/>
      <div className='flex items-center justify-center'>
      <button onClick={() => setPeople([ ])} className='bg-[#C97D4C] px-[10px] py-[10px] font-bold text-[1.1rem] rounded-xl mb-[30px]'>Clear All</button>
      </div>
</div>
</div>
    </>
  );
}

export default Birthday;
