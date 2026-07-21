import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { getCurrentUserBookings } from "@/server-actions/getCurrentUserBookings";

const UserBookingsPage = async () => {
  const userBookings = await getCurrentUserBookings();
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  console.log(userBookings);

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

  console.log(totalAmountSpent);

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
    </div>
  );
};

export default UserBookingsPage;
