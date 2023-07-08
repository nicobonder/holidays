import React from 'react'

import { HOLIDAYS } from '../src/App';
console.log('HOLIDAYS', HOLIDAYS)

// Current date
const today = new Date();

const nextFive = HOLIDAYS
  .filter(holiday => holiday.date > today)
  .sort((a, b) => a.date.getTime() - b.date.getTime())
  .slice(0, 10);

  const mapFive = () => {
    return (
      <ul className='listHoliday'>
        {nextFive.map(holiday => (
          <li key={holiday.date.toISOString()}>
            <p className='infoTextList'>{String.fromCharCode(160)} {holiday.date.getUTCDate().toString().padStart(2, "0")}/{(holiday.date.getUTCMonth() + 1).toString().padStart(2, "0")}  <span className='divisor'> | </span> </p>
          </li>
        ))}
      </ul>
    );
  };
  console.log('five', nextFive);
  console.log('mapfive', mapFive);
  

export default function FiveHolidays() {
  return (
    <div className='listDiv'>
    <h2 className='subTitle'>Los próximos 10 feriados</h2>
    {mapFive()}
  </div>
  )
}
