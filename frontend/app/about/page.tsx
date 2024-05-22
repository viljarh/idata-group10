/**
 *  Information "about us" is copied from blackboard project description. Project Theme #4: Car Rentals
 *
 */
import Container from "@/components/ui/Container";

export default function AboutPage() {
     return (
          <Container>
               <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="text-lg text-center">
                         Welcome to Rental Roulette, where your journey begins
                         with a spin of the wheel and ends with the perfect ride
                         tailored just for you. At Rental Roulette, we&apos;ve
                         revolutionized the car rental experience by aggregating
                         prices from a myriad of trusted third-party car rental
                         companies. No more hopping from site to site in search
                         of the best deal – our platform puts the power back in
                         your hands. Whether you&apos;re embarking on a spontaneous
                         road trip, planning a family vacation, or simply need a
                         reliable set of wheels for your daily commute, Rental
                         Roulette ensures that you&apos;re always in the driver&apos;s
                         seat when it comes to choice and affordability.
                    </p>

                    <p className="text-lg text-center">
                         Our commitment extends beyond just providing
                         competitive prices; we prioritize transparency,
                         convenience, and a touch of excitement. With our
                         user-friendly interface, you can effortlessly compare
                         options, finding the ideal vehicle to suit your
                         preferences and budget. Say goodbye to hidden fees and
                         hello to a seamless rental experience. At Rental
                         Roulette, we believe that every journey should begin
                         with a sense of adventure, and our platform is designed
                         to add an element of thrill to the otherwise mundane
                         task of renting a car. Join us in the pursuit of
                         hassle-free, cost-effective, and enjoyable travels –
                         where every rental is a winning spin!
                    </p>

                    <p className="text-lg text-center">
                         Nestled in the picturesque landscapes of Ålesund,
                         Rental Roulette takes pride in catering specifically to
                         the vibrant community of this stunning coastal town.
                         Our focus is on providing tailored car rental solutions
                         by aggregating prices exclusively from rental companies
                         in the Ålesund area. Whether you&apos;re exploring the
                         fjords, embarking on a scenic coastal drive, or simply
                         navigating the charming streets of Ålesund itself,
                         Rental Roulette ensures that your local car rental
                         experience is not only convenient but also intimately
                         connected to the unique beauty of this Norwegian gem.
                         Embrace the essence of Ålesund with us, where every
                         rental is a seamless blend of convenience and local
                         charm.
                    </p>
               </div>
          </Container>
     );
}
