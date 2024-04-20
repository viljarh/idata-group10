import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { useVehicles } from "@/api/vehicles";

const vehiclePage = () => {
  const { vehicles, isLoading } = useVehicles();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (vehicles) {
    content = <ProductList vehicles={vehicles} />;
  } else {
    content = <p>No vehicles available</p>;
  }

  return (
    <Container>
      <div className="p-5 h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <h1 className="font-bold text-2xl">All Cars</h1>
      </div>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </div>
    </Container>
  );
};

export default vehiclePage;
