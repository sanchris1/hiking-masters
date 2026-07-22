import ChangeParticipantsComponent from "../components/ChangeParticipantsComponent";
import BookingInputs from "../components/BookingInputs";
import NoHikeIdPage from "../components/NoHikeIdPage";
import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";
import SpecialRequest from "../components/SpecialRequest";
import BackButton from "../components/BackButton";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server-actions/getCurrentUser";
import ProceedToPaymentComponent from "../components/ProceedToPaymentComponent";
import { getCurrentUserBookings } from "@/server-actions/getCurrentUserBookings";
import { getCurrentSession } from "@/server-actions/getCurrentSession";

const BookingPage = async ({
  params,
}: {
  params: Promise<{ hikeId: string }>;
}) => {
  const { hikeId } = await params;

  if (!hikeId || hikeId === "no-hike") {
    return <NoHikeIdPage />;
  }

  const session = await getCurrentSession();

  if (!session) {
    const callbackUrl = encodeURIComponent(`/booking/${hikeId}`);

    redirect(`/login?callbackUrl=${callbackUrl}`);
  }

  const user = await getCurrentUser();

  const expedition = await getExpeditionDetails(hikeId);
  const userBookings = await getCurrentUserBookings();

  if (!userBookings) return;

  const isBooked = userBookings.some(
    (booking) => booking.booking.expeditionId === hikeId,
  );

  if (!expedition) return null;

  return (
    <section className="bg-white w-full ">
      <div className="p-5  max-w-6xl mx-auto bg-surface-50/5 flex flex-col lg:flex-row gap-8 ">
        <div className="w-full lg:w-5/8 ">
          <BackButton />
          {isBooked ? (
            <span className="text-lg font-semibold text-red-600  ml-2">
              You have Booked This Expedition
            </span>
          ) : (
            <h2 className="text-3xl font-semibold text-primary leading-relaxed tracking-wide">
              Complete your booking
            </h2>
          )}
          {!isBooked && (
            <p className="text-sm  text-secondary">
              You&apos;re just one step away from your next adventure
            </p>
          )}
          <div className="my-12 space-y-5">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-4 flex items-center justify-center  rounded-full bg-primary text-[10px] font-medium p-0.5 text-surface-50 ">
                01
              </span>
              <span className="font-medium text-sm text-primary">
                Personal information
              </span>
            </div>
            <BookingInputs exp={expedition.expedition} user={user} />
            <SpecialRequest exp={expedition.expedition} />
          </div>
          <div className="my-12 space-y-8">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-4 flex items-center justify-center  rounded-full bg-primary text-[10px] font-medium p-0.5 text-surface-50 ">
                02
              </span>
              <span className="font-medium text-sm text-primary">
                Trip Information
              </span>
            </div>
            <div className="bg-surface-100 p-5 rounded-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Departure
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {new Date(
                      expedition.expedition.departureDate,
                    ).toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Return Date
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.expedition.returnDate}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Difficulty
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.expedition.difficulty}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Guide Contact
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.guide?.contact}
                  </p>
                </div>
              </div>
              <div className="my-3 w-full h-0.5 bg-accent rounded-full " />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-secondary tracking-tight">
                      Meeting point
                    </span>
                    <p className="font-semibold text-[15px] text-primary">
                      {expedition.schedule?.meetingPoint}
                    </p>
                  </div>
                  <ChangeParticipantsComponent exp={expedition} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProceedToPaymentComponent
          isBooked={isBooked}
          expedition={expedition}
        />
      </div>
    </section>
  );
};

export default BookingPage;
