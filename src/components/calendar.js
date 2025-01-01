// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { format, parse, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import classNames from 'classnames';

const Calendar = ({ month, from, to, road, headerColor }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dates, setDates] = useState([]);
  const colorClasses = {
    yellow: 'text-yellow-500 border-yellow-500',
    red: 'text-red-500 border-red-500',
    blue: 'text-blue-500 border-blue-500',
    green: 'text-green-500 border-green-500',
    purple: 'text-purple-500 border-purple-500',
    indigo: 'text-indigo-500 border-indigo-500',
    pink: 'text-pink-500 border-pink-500',
    gray: 'text-gray-500 border-gray-500',
    orange: 'text-orange-500 border-orange-500',
    teal: 'text-teal-500 border-teal-500',
  };
  const selectedColorClass = colorClasses[road] || 'text-white';
  const headerColorClass = colorClasses[headerColor] || 'text-white';

  useEffect(() => {
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    const monthStart = parse(capitalizedMonth, 'MMMM', new Date(), { locale: ptBR });
    const startDate = startOfMonth(monthStart);
    const endDate = endOfMonth(monthStart);

    const daysArray = [];
    let day = startOfWeek(startDate, { locale: ptBR });

    while (day <= endOfWeek(endDate, { locale: ptBR })) {
      daysArray.push(new Date(day));
      day = addDays(day, 1);
    }

    setCurrentMonth(monthStart);
    setDates(daysArray);
  }, [month]);

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className={`flex justify-center items-center p-4 rounded-t-lg ${headerColorClass}`}>
        <div className="text-lg font-bold capitalize">{format(currentMonth, dateFormat, { locale: ptBR })}</div>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const days = daysOfWeek.map((day, index) => (
      <div className={`flex justify-center font-bold ${headerColorClass}`} key={index}>
        {day}
      </div>
    ));
    return <div className="grid grid-cols-7 gap-2 p-2">{days}</div>;
  };

  const renderCells = () => {
    const dateFormat = 'd';
    const rows = [];
    let days = [];
    const today = new Date();

    dates.forEach((day, i) => {
      const formattedDate = format(day, dateFormat, { locale: ptBR });
      const isDaySelected = isSameDay(day, today);
      const startDate = parse(`${capitalizeFirstLetter(month)} ${from}`, 'MMMM dd', new Date(), { locale: ptBR });
      const endDate = parse(`${capitalizeFirstLetter(month)} ${to}`, 'MMMM dd', new Date(), { locale: ptBR });
      const isInRange = day >= startDate && day <= endDate;

      days.push(
        <div
          className={classNames(
            'flex justify-center items-center h-12',
            {
              'text-gray-400': !isSameMonth(day, currentMonth),
              [selectedColorClass]: isSameMonth(day, currentMonth) && isInRange,
              'border-2 border-white rounded-full': isDaySelected,
              'text-white': isSameMonth(day, currentMonth) && !isInRange && !isDaySelected,
            }
          )}
          key={i}
        >
          {formattedDate}
        </div>
      );
      if ((i + 1) % 7 === 0) {
        rows.push(
          <div className="grid grid-cols-7 gap-2" key={i}>
            {days}
          </div>
        );
        days = [];
      }
    });
    return <div className="p-2">{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto rounded-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default Calendar;
