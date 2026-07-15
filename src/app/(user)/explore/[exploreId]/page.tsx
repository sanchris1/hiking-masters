import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";
import ExploreDetailsHero from "./components/ExploreDetailsHero";
import ExploreDetailsBody from "./components/ExploreDetailsBody";

const ExploreDetailsPage = async ({
  params,
}: {
  params: Promise<{ exploreId: string }>;
}) => {
  const { exploreId } = await params;

  const data = await getExpeditionDetails(exploreId);

  if (!data || !data.expedition || !data.guide)
    return <p className="">No details found</p>;

  return (
    <>
      <ExploreDetailsHero expedition={data.expedition} />
      <ExploreDetailsBody />
    </>
  );
};

export default ExploreDetailsPage;
