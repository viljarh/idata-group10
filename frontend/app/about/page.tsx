import Container from "@/components/ui/Container";

const aboutPage = () => {
  return (
    <Container>
      <div className="w-full h-full py-6 px-7">
        <h1 className="font-bold text-4xl py-6">About Us</h1>
        <p>
          Rental Roulette is a car rental service that allows you to rent cars
          from a variety of categories. We offer both electric and gas cars.
        </p>
        <p>
          Our mission is to provide you with the best car rental experience. We
          offer competitive prices and a wide range of cars to choose from.
        </p>
        <p>
          <br />If you have any questions or need help, feel free to contact us at
          contact@rentalroulette.com
        </p>
      </div>
    </Container>
  );
};

export default aboutPage;
