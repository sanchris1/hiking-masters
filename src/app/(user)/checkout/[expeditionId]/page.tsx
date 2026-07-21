import { getCurrentBookingExpeditionsDetails } from "@/server-actions/getCurrentBookingExpeditionDetails";
import Image from "next/image";
import { FaLock } from "react-icons/fa6";
import { MdGroups3, MdTimeline } from "react-icons/md";
import MpesaCheckoutSide from "../components/MpesaCheckoutSide";

const CheckoutPage = async ({
  params,
}: {
  params: Promise<{ expeditionId: string }>;
}) => {
  const { expeditionId } = await params;

  console.log(expeditionId);

  const bookedExpedition =
    await getCurrentBookingExpeditionsDetails(expeditionId);

  if (!bookedExpedition?.booking) return null;

  return (
    <div className=" bg-surface-100 w-screen">
      <div className="max-w-7xl mx-auto  my-8">
        <span className="flex items-center gap-3 font-semibold text-secondary uppercase ">
          <FaLock /> Safe and encrypted
        </span>
        <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
          Secure Checkout
        </h3>
        <p className="text-secondary text-sm">
          Complete your booking in just a few simple steps{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
          <div className="lg:col-span-8 col-span-2 space-y-12">
            <div className="w-full overflow-hidden  rounded-2xl shadow-lg bg-white flex flex-col md:flex-row items-center ">
              {/* image div */}
              <div className="relative w-full lg:w-1/2 h-80 overflow-hidden">
                <Image
                  fill
                  className="object-cover overflow-hidden"
                  alt={bookedExpedition.expedition.title}
                  src={bookedExpedition.expedition.image}
                />
              </div>
              <div className="p-8 flex items-start   flex-col">
                <div className="flex items-center gap-12">
                  <h3 className="text-xl font-semibold text-primary tracking-wider text-wrap uppercase">
                    {bookedExpedition.expedition.title}
                  </h3>
                  <span className="bg-green-100 px-3 py-0.5 rounded-full  text-sm font-semibold text-secondary">
                    {bookedExpedition.expedition.difficulty}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-400 my-2" />
                <div className="flex items-center gap-5 text-secondary">
                  <MdTimeline />
                  <div className="">
                    <span className="text-xs tracking-tight">Dates</span>
                    <p className="text-primary text-lg font-medium">
                      {new Date(
                        bookedExpedition.expedition.departureDate,
                      ).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-400 my-2" />
                <div className="flex items-center gap-5 text-secondary">
                  <MdGroups3 />
                  <div className="">
                    <span className="text-xs tracking-tight">Participants</span>
                    <p className="text-primary text-lg font-medium">
                      {bookedExpedition.booking.participants}{" "}
                      {bookedExpedition.booking.participants === 1
                        ? "Person"
                        : "People"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white space-y-3 rounded-2xl p-5 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
                Pricing breakdown
              </h3>
              <div className="w-full h-px bg-gray-400 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-primary text-lg font-medium">
                  Expedition Fee
                </span>
                <p className="text-primary text-lg font-medium">
                  KSH: {bookedExpedition.expedition.price}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary text-lg font-medium">
                  Participants
                </span>
                <p className="text-primary text-lg font-medium">
                  {bookedExpedition.booking.participants}{" "}
                  {bookedExpedition.booking.participants === 1
                    ? "Person"
                    : "People"}
                </p>
              </div>
              <div className="w-full h-px bg-gray-400 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-primary text-xl font-medium">
                  Total Cost
                </span>
                <p className="text-accent text-2xl font-semibold">
                  KSH:{" "}
                  {(
                    bookedExpedition.expedition.price *
                    bookedExpedition.booking.participants
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <MpesaCheckoutSide bookedExpedition={bookedExpedition} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
