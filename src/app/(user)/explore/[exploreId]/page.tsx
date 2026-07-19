import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";
import ExploreDetailsHero from "./components/ExploreDetailsHero";
import ExploreDetailsBody from "./components/ExploreDetailsBody";
import ExploreBookingCard from "./components/ExploreBookingCard";

const ExploreDetailsPage = async ({
  params,
}: {
  params: Promise<{ exploreId: string }>;
}) => {
  const { exploreId } = await params;

  const data = await getExpeditionDetails(exploreId);

  console.log(data);

  if (!data) return <p className="">No details found</p>;

  return (
    <>
      <ExploreDetailsHero expedition={data.expedition} />
      <div className="flex flex-col lg:flex-row gap-3 mx-12 my-6">
        <ExploreDetailsBody
          expedition={data.expedition}
          guide={data.guide}
          schedule={data.schedule}
        />
        <ExploreBookingCard expedition={data.expedition} />
      </div>
    </>
  );
};

export default ExploreDetailsPage;
