'use client';

import React, { useState } from 'react';

const timeSlots = [
  '09:00',
  '10:30',
  '12:00',
  '13:30',
  '15:00',
  '16:30',
  '18:00',
  '19:30',
  '21:00',
];

export const Book = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0],
  );
  return (
    <section className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Book a Court</h2>

      <div className="mb-6">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Date
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#051014] focus:ring-[#051014]"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            className="p-3 text-center rounded-lg border border-gray-200 hover:border-[#051014] hover:bg-[#051014] hover:text-white transition-colors duration-200"
          >
            {time}
          </button>
        ))}
      </div>
    </section>
  );
};
