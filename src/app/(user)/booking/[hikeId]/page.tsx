import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiFinnTheHumanBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import ChangeParticipantsComponent from "../components/ChangeParticipantsComponent";
import BookingInputs from "../components/BookingInputs";
import NoHikeIdPage from "../components/NoHikeIdPage";
import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";
import SpecialRequest from "../components/SpecialRequest";
import BackButton from "../components/BackButton";
import { auth } from "../../../../../utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server-actions/getCurrentUser";
import ProceedToPaymentButton from "../components/ProceedToPaymentButton";

const BookingPage = async ({
  params,
}: {
  params: Promise<{ hikeId: string }>;
}) => {
  const { hikeId } = await params;

  if (!hikeId || hikeId === "no-hike") {
    return <NoHikeIdPage />;
  }

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    const callbackUrl = encodeURIComponent(`/booking/${hikeId}`);

    redirect(`/login?callbackUrl=${callbackUrl}`);
  }

  const user = await getCurrentUser();

  const expedition = await getExpeditionDetails(hikeId);

  if (!expedition) return null;

  return (
    <section className="bg-white w-full ">
      <div className="p-5  max-w-6xl mx-auto bg-surface-50/5 flex flex-col lg:flex-row gap-8 ">
        <div className="w-full lg:w-5/8 ">
          <BackButton />
          <h2 className="text-3xl font-semibold text-primary leading-relaxed tracking-wide">
            Complete your booking
          </h2>
          <p className="text-sm  text-secondary">
            You&apos;re just one step away from your next adventure
          </p>
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
                  <ChangeParticipantsComponent exp={expedition.expedition} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.2)]  overflow-hidden space-y-6">
          {/* image */}
          <div className="w-full lg:h-80 md:h-100 h-120 relative overflow-hidden">
            <Image
              alt={expedition.expedition.title}
              src={expedition.expedition.image}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-4 space-y-4">
            <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
              {expedition.expedition.title}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <CiLocationOn /> {expedition.expedition.location}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <SlCalender />{" "}
                {new Date(expedition.expedition.departureDate).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  },
                )}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <PiFinnTheHumanBold /> {expedition.expedition.difficulty}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <GoPeople />{" "}
                {expedition.expedition.capacity -
                  expedition.expedition.slotsLeft}{" "}
                slots taken | {expedition.expedition.slotsLeft} left
              </span>

              <div className="w-full h-0.5 rounded-full bg-primary " />

              <div className="flex items-center justify-between w-full text-secondary font-normal text-sm">
                Total Amount
                <span className="text-accent font-semibold text-xl ">
                  KSH: {expedition.expedition.price.toLocaleString()}
                </span>
              </div>

              <div className="w-full h-0.5 rounded-full bg-primary my-1" />
              <ProceedToPaymentButton expeditionId={expedition.expedition.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
