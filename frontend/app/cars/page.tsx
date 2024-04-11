import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { cars } from "@/constants";

const carPage = () => {
  return (
    <Container>
      <div className="p-5 h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <h1 className="font-bold text-2xl">All Cars</h1>
      </div>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList items={cars} />
        </div>
      </div>
    </Container>
  );
};

export default carPage;
