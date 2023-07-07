import './index.css'
import Footer from '../src/footer/Footer'

//JSON CON LOS FERIADOS ARGENTINOS
const HOLIDAYS = [
  {
    "date": new Date ("2023-01-01"),
    "name": "Año nuevo"
  },
  {
    "date": new Date ("2023-02-27"),
    "name": "Carnaval"
  },
  {
    "date": new Date ("2023-03-24"),
    "name": "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    "date": new Date ("2023-04-02"),
    "name": "Día del Veterano y de los Caídos en la Guerra de Malvinas"
  },
  {
    "date": new Date ("2023-04-14"),
    "name": "Viernes Santo"
  },
  {
    "date": new Date ("2023-05-01"),
    "name": "Día del Trabajador"
  },
  {
    "date": new Date ("2023-05-25"),
    "name": "Día de la Revolución de Mayo"
  },
  {
    "date": new Date ("2023-06-17"),
    "name": "Día del Paso a la Inmortalidad del General Martín Miguel de Güemes"
  },
  {
    "date": new Date ("2023-06-20"),
    "name": "Día del Paso a la Inmortalidad del General Manuel Belgrano"
  },
  {
    "date": new Date ("2023-07-09"),
    "name": "Día de la Independencia"
  },
  {
    "date": new Date ("2023-08-17"),
    "name": "Paso a la Inmortalidad del General José de San Martín"
  },
  {
    "date": new Date ("2023-10-12"),
    "name": "Día del Respeto a la Diversidad Cultural"
  },
  {
    "date": new Date ("2023-12-08"),
    "name": "Inmaculada Concepción de María"
  },
  {
    "date": new Date ("2023-12-25"),
    "name": "Navidad"
  },
  {
    "date": new Date ("2024-01-01"),
    "name": "Año nuevo"
  },
  {
    "date": new Date ("2024-02-12"),
    "name": "Carnaval"
  },
  {
    "date": new Date ("2024-02-13"),
    "name": "Carnaval"
  },
  {
    "date": new Date ("2024-03-24"),
    "name": "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    "date": new Date ("2024-03-29"),
    "name": "Viernes Santo"
  },
  {
    "date": new Date ("2024-05-01"),
    "name": "Día del Trabajador"
  },
  {
    "date": new Date ("2024-05-25"),
    "name": "Día de la Revolución de Mayo"
  },
  {
    "date": new Date ("2024-06-17"),
    "name": "Día del Paso a la Inmortalidad del General Martín Miguel de Güemes"
  },
  {
    "date": new Date ("2024-06-20"),
    "name": "Día del Paso a la Inmortalidad del General Manuel Belgrano"
  },
  {
    "date": new Date ("2024-07-09"),
    "name": "Día de la Independencia"
  },
  {
    "date": new Date ("2024-08-17"),
    "name": "Paso a la Inmortalidad del General José de San Martín"
  },
  {
    "date": new Date ("2024-10-12"),
    "name": "Día del Respeto a la Diversidad Cultural"
  },
  {
    "date": new Date ("2024-12-08"),
    "name": "Inmaculada Concepción de María"
  },
  {
    "date": new Date ("2024-12-25"),
    "name": "Navidad"
  }
]
;

//FECHA ACTUAL
const today = new Date();
const nextHoliday = HOLIDAYS.find(holiday => holiday.date > today) || {
  ...HOLIDAYS[0], 
  date: new Date(
    HOLIDAYS[0].date.getFullYear() + 1,
    HOLIDAYS[0].date.getMonth(),
    HOLIDAYS[0].date.getDate() + 1,
  ),
};
console.log('next', nextHoliday);

const prevHoliday = HOLIDAYS
  .filter(holiday => holiday.date < today)
  .sort((a, b) => b.date - a.date)
  [0];

const futureHoliday = HOLIDAYS
  .filter(holiday => holiday.date > today)
  .sort((a, b) => a.date - b.date)
  [1];

const nextFive = HOLIDAYS
  .filter(holiday => holiday.date > today)
  .sort((a, b) => a.date - b.date)
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
  
  

const msDiff = nextHoliday.date.getTime() - today.getTime();
const daysDiff = Math.ceil(msDiff / (1000 * 3600 * 24));

//Relative Time Format function
const rtf = new Intl.RelativeTimeFormat('es-AR', {numeric: "auto"});

function App() {
  return (
      <>
    <main className='sectionHoliday'>
      <div className="nextHoliday">

        <h1 className='mainTitle'>¿Cuándo es el próximo feriado?</h1>
        <h2 className='subTitle'>El próximo feriado, {nextHoliday.name}, es {rtf.format(daysDiff, 'day')}, el <span className='dateSpan'>{nextHoliday.date.getUTCDate().toString().padStart(2, "0")}/{(nextHoliday.date.getUTCMonth() + 1).toString().padStart(2, "0")}</span>.</h2> 
      </div>

      <div className="pastFuture">

        <div className="pastHoliday">
          <h2 className='subTitle'>¿Cuándo fue el último feriado?</h2> 
          <p className='infoText'> El <span className='dateSpan'> {prevHoliday.date.getUTCDate().toString().padStart(2, "0")}/{(prevHoliday.date.getUTCMonth() + 1).toString().padStart(2, "0")} </span> tuvimos el {prevHoliday.name}.</p>
        </div>

        <div className="futureHoliday">
          <h2 className='subTitle'>¿Qué se viene después?</h2> 
          <p className='infoText'> El <span className='dateSpan'> {futureHoliday.date.getUTCDate().toString().padStart(2, "0")}/{(futureHoliday.date.getUTCMonth() + 1).toString().padStart(2, "0")}</span> tenemos el {futureHoliday.name}.</p>
        </div>
      </div>
      <div className='listDiv'>
        <h2 className='subTitle'>Los próximos 5 feriados</h2>
        {mapFive()}
      </div>

      {/* <footer className='footer'>
        <a target="_blank" href='https://www.linkedin.com/in/nicobonder/'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path
              d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 
            32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 
            96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6
             0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
            />
          </svg>
        </a>
        <a target="_blank" href='https://github.com/nicobonder/'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
            <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
          </svg>
        </a>
      </footer> */}
    </main>
      <Footer />
</>
  );
}

export default App;
