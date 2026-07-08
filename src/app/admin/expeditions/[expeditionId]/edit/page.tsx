import { dummyUpcomingExpeditions } from "@/items/experditions";
import ExpeditionEditor from "../../compontents/ExpeditionEditor";
import { ExpeditionFormValues } from "../../new/page";

const EditExpeditionPage = async ({
  params,
}: {
  params: Promise<{ expeditionId: string }>;
}) => {
  const { expeditionId } = await params;
  console.log(expeditionId);

  const expedition = dummyUpcomingExpeditions.find(
    (exp) => exp.id === expeditionId,
  );

  if (!expedition) {
    return <div>Expedition not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <ExpeditionEditor initialValues={expedition} mode="editing" />
    </div>
  );
};

export default EditExpeditionPage;
