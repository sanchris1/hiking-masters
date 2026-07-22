import { getCurrentUserBookings } from "@/server-actions/getCurrentUserBookings";

const UserBookingsPage = async () => {
  const userBookings = await getCurrentUserBookings();

  const today = new Date().toISOString().split("T")[0];

  if (!userBookings) return [];

  const bookingsWithExpeditions = userBookings.filter(
    (
      booking,
    ): booking is typeof booking & {
      expedition: NonNullable<typeof booking.expedition>;
    } => booking.expedition !== null,
  );

  const upcomingExpeditions = bookingsWithExpeditions.filter(
    (booking) => booking.expedition.departureDate > today,
  );

  const completedHikes = bookingsWithExpeditions.filter(
    (booking) => booking.expedition.departureDate < today,
  );

  const totalAmountSpent = bookingsWithExpeditions.reduce(
    (total, booking) => total + booking.expedition.price,
    0,
  );

  const expeditionsData = [
    {
      label: "upcoming expeditions",
      value: upcomingExpeditions.length,
      tag: "expeditions scheduled",
    },
    {
      label: "completed hikes",
      value: completedHikes.length,
      tag: "Landmarks conquered",
    },
    {
      label: "total bookings",
      value: bookingsWithExpeditions.length,
      tag: "Total lifetime",
    },
    {
      label: "Total Amount Spent",
      value: totalAmountSpent.toLocaleString(),
      tag: "Investments in joy",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5 bg-surface-50 p-4">
      {/* header */}
      <div className="">
        <h5 className="text-xl font-medium text-primary tracking-wide ">
          My Bookings
        </h5>
        <p className="text-secondary">
          Track your upcoming adventures, manage bookings and view your hiking
          history
        </p>
      </div>
      {/* the expeditions cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {expeditionsData.map((data) => (
          <div className="bg-white p-3 space-y-2 rounded-xl" key={data.label}>
            <label className="text-secondary/80 text-[15px] text-wrap uppercase">
              {data.label}
            </label>
            <div className="flex items-end gap-3">
              <p className="text-primary font-semibold text-2xl">
                {data.value}
              </p>
              <span className="text-primary text-xs font-light text-wrap">
                {data.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBookingsPage;
