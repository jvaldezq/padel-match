import {
  MapPin,
  Calendar,
  Trophy,
  Users,
  Clock,
  Shield,
  Info,
  Medal,
} from 'lucide-react';
import React from 'react';

const tournamentData = {
  id: '1',
  title: 'Spring Championship 2024',
  image:
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2370&auto=format&fit=crop',
  date: '2024-04-15',
  registrationDeadline: '2024-04-01',
  level: 'Advanced',
  slots: {
    total: 32,
    filled: 24,
    available: 8,
  },
  price: 75,
  club: 'Padel Elite Center',
  location: 'Downtown Area',
  description:
    'Join us for the most anticipated padel tournament of the spring season. This advanced-level competition brings together the best players for an unforgettable experience of skill, strategy, and sportsmanship.',
  schedule: [
    { time: '9:00 AM', round: 'Group Stage Matches' },
    { time: '1:00 PM', round: 'Quarter Finals' },
    { time: '3:00 PM', round: 'Semi Finals' },
    { time: '5:00 PM', round: 'Finals' },
  ],
  prizes: [
    { position: '1st Place', reward: '$1000 + Trophy' },
    { position: '2nd Place', reward: '$500' },
    { position: '3rd Place', reward: '$250' },
  ],
  rules: [
    'Players must be 18+ years old',
    'Advanced level certification required',
    'Matches are best of 3 sets',
    'Tournament rules follow official padel regulations',
    'Players must arrive 30 minutes before scheduled match time',
  ],
};

export default function TournamentDetail() {
  return (
    <main className="max-w-screen-lg mx-auto p-4 mb-28">
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={tournamentData.image}
                alt={tournamentData.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#A599B5] bg-opacity-20 text-[#051014] rounded-full text-sm font-medium">
                  {tournamentData.level}
                </span>
                <span className="px-3 py-1 bg-[#A599B5] bg-opacity-20 text-[#051014] rounded-full text-sm font-medium">
                  {tournamentData.slots.available} slots left
                </span>
              </div>
              <h1 className="text-3xl font-bold text-[#051014] mb-2">
                {tournamentData.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>
                  {tournamentData.club}, {tournamentData.location}
                </span>
              </div>
              <p className="text-gray-600">{tournamentData.description}</p>
            </div>
          </div>
        </div>

        <main className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Schedule section */}
              <section className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Tournament Schedule
                </h2>
                <div className="space-y-4">
                  {tournamentData.schedule.map((item) => (
                    <div
                      key={item.time}
                      className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-[#051014]">
                          {item.round}
                        </p>
                        <p className="text-sm text-gray-600">{item.time}</p>
                      </div>
                      <Trophy className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Prizes section */}
              <section className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Medal className="h-6 w-6" />
                  Prizes
                </h2>
                <div className="grid gap-4">
                  {tournamentData.prizes.map((prize, index) => (
                    <div
                      key={prize.position}
                      className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-[#051014]">
                          {prize.position}
                        </p>
                        <p className="text-sm text-gray-600">{prize.reward}</p>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === 0
                            ? 'bg-yellow-100 text-yellow-600'
                            : index === 1
                              ? 'bg-gray-100 text-gray-600'
                              : 'bg-orange-100 text-orange-600'
                        }`}
                      >
                        <Trophy className="h-5 w-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rules section */}
              <section className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Tournament Rules
                </h2>
                <div className="space-y-3">
                  {tournamentData.rules.map((rule) => (
                    <div key={rule} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-gray-600">{rule}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Registration Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Entry Fee</span>
                    <span className="text-xl font-semibold text-[#051014]">
                      ${tournamentData.price}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Slots</span>
                      <span>{tournamentData.slots.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Registered Players</span>
                      <span>{tournamentData.slots.filled}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-600">Available Slots</span>
                      <span className="text-green-600">
                        {tournamentData.slots.available}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Registration Deadline:</span>
                    </div>
                    <p className="font-medium">
                      {new Date(
                        tournamentData.registrationDeadline,
                      ).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <button className="w-full bg-[#051014] text-white py-3 rounded-lg hover:bg-[#2E2F2F] transition-colors duration-200 font-medium">
                    Register Now
                  </button>
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Venue Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#051014]">
                      {tournamentData.club}
                    </p>
                    <p className="text-sm text-gray-600">
                      {tournamentData.location}
                    </p>
                  </div>
                  <button className="w-full bg-white border border-[#051014] text-[#051014] py-2 rounded-lg hover:bg-[#051014] hover:text-white transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
