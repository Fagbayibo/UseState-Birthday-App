import React from 'react';

const BirthdayList = ({people}) => {

  return (
    <>
      {people.map((person) => {
        const {id, name, age , image} = person;
        return (
          <div id={id}>
            <div className='px-5 flex gap-5'>
            <img src={image} alt={name} className='w-[80px] h-[80px] rounded-full my-[20px] shadow-xl'/>
            <div>
                <h1 className='font-semibold text-xl mt-5'>{name}</h1>
                <h2>{age}</h2>
                </div>
            </div>
            </div>
        )
      })}
    </>
  );
}

export default BirthdayList;
