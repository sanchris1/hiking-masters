import { getCurrentBookingExpeditionsDetails } from "@/server-actions/getCurrentBookingExpeditionDetails";

const CheckoutPage = async ({
  params,
}: {
  params: Promise<{ expeditionId: string }>;
}) => {
  const { expeditionId } = await params;

  console.log(expeditionId);

  const bookedExpedition =
    await getCurrentBookingExpeditionsDetails(expeditionId);

  console.log(bookedExpedition);

  return <div className="max-w-7xl mx-auto my-8">CheckoutPage</div>;
};

export default CheckoutPage;
