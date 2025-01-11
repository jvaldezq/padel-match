import {
  MapPin,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Info,
  Shield,
  Users,
} from 'lucide-react';

const clubData = {
  id: '1',
  name: 'Padel Club Downtown',
  location: '123 Downtown Street, City Center',
  image:
    'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  description:
    'Premier padel facility in the heart of downtown, featuring state-of-the-art courts and professional coaching services. Our club offers a perfect blend of competitive and recreational play for all skill levels.',
  amenities: [
    'Locker Rooms',
    'Pro Shop',
    'Cafe',
    'Free Parking',
    'Equipment Rental',
    'Coaching Services',
  ],
  prices: {
    peakHours: 40,
    offPeakHours: 30,
  },
  openingHours: {
    weekdays: '7:00 AM - 10:00 PM',
    weekends: '8:00 AM - 8:00 PM',
  },
  courtTypes: [
    { type: 'Indoor', count: 4 },
    { type: 'Outdoor', count: 2 },
  ],
};

export default function ClubDetail() {
  return (
    <main className="max-w-screen-lg mx-auto p-4 mb-28">
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={clubData.image}
                alt={clubData.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h1 className="text-3xl font-bold text-[#051014] mb-2">
                {clubData.name}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{clubData.location}</span>
              </div>
              <p className="text-gray-600">{clubData.description}</p>
            </div>
          </div>
        </div>

        <main className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About section */}
              <section className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-600 mb-6">{clubData.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Weekdays: {clubData.openingHours.weekdays}</p>
                      <p>Weekends: {clubData.openingHours.weekends}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      Court Information
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      {clubData.courtTypes.map((court) => (
                        <p key={court.type}>
                          {court.count} {court.type} Courts
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Amenities section */}
              <section className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {clubData.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-[#051014]" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Pricing
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Peak Hours</span>
                    <span className="font-semibold">
                      ${clubData.prices.peakHours}/hour
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Off-Peak Hours</span>
                    <span className="font-semibold">
                      ${clubData.prices.offPeakHours}/hour
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span>+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span>contact@padelclub.com</span>
                  </div>
                </div>
              </div>

              {/* Coaches card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Available Coaches
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((coach) => (
                    <div key={coach} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Coach {coach}</p>
                        <p className="text-sm text-gray-600">
                          Level {coach} Certified
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
