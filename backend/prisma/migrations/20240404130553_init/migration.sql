-- CreateTable
CREATE TABLE "Customer" (
    "customerId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "driverLicenseId" INTEGER NOT NULL,
    "telephoneNumber" INTEGER NOT NULL,
    "customerAddressId" INTEGER NOT NULL,
    "customerType" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "CustomerAddress" (
    "customerAddressId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" INTEGER NOT NULL,

    CONSTRAINT "CustomerAddress_pkey" PRIMARY KEY ("customerAddressId")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "vehicleId" INTEGER NOT NULL,
    "manufacture" TEXT NOT NULL,
    "modelType" TEXT NOT NULL,
    "modelYear" TEXT NOT NULL,
    "vehicleCategory" TEXT NOT NULL,
    "transmissionType" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "passengerCapacity" INTEGER NOT NULL,
    "luggageCapacity" INTEGER NOT NULL,
    "extraFeatures" TEXT NOT NULL,
    "mileage" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "dailyPrice" DOUBLE PRECISION NOT NULL,
    "weeklyPrice" DOUBLE PRECISION NOT NULL,
    "monthlyPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vehicleId")
);

-- CreateTable
CREATE TABLE "Location" (
    "locationId" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postcode" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("locationId")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rentalId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "rentalLocationId" INTEGER NOT NULL,
    "rentalDateFrom" TIMESTAMP(3) NOT NULL,
    "rentalDateTo" TIMESTAMP(3) NOT NULL,
    "distanceDriven" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "rentalStatusId" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rentalId")
);

-- CreateTable
CREATE TABLE "VehicleAvailability" (
    "availabilityId" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "rentalDateFrom" TIMESTAMP(3) NOT NULL,
    "rentalDateTo" TIMESTAMP(3) NOT NULL,
    "rentalStatusId" INTEGER NOT NULL,

    CONSTRAINT "VehicleAvailability_pkey" PRIMARY KEY ("availabilityId")
);

-- CreateTable
CREATE TABLE "RentalStatus" (
    "statusId" INTEGER NOT NULL,
    "statusName" TEXT NOT NULL,

    CONSTRAINT "RentalStatus_pkey" PRIMARY KEY ("statusId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerId_key" ON "Customer"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vehicleId_key" ON "Vehicle"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_rentalId_key" ON "Rental"("rentalId");

-- CreateIndex
CREATE UNIQUE INDEX "RentalStatus_statusName_key" ON "RentalStatus"("statusName");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_customerAddressId_fkey" FOREIGN KEY ("customerAddressId") REFERENCES "CustomerAddress"("customerAddressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("vehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_rentalLocationId_fkey" FOREIGN KEY ("rentalLocationId") REFERENCES "Location"("locationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_rentalStatusId_fkey" FOREIGN KEY ("rentalStatusId") REFERENCES "RentalStatus"("statusId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleAvailability" ADD CONSTRAINT "VehicleAvailability_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("vehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleAvailability" ADD CONSTRAINT "VehicleAvailability_rentalStatusId_fkey" FOREIGN KEY ("rentalStatusId") REFERENCES "RentalStatus"("statusId") ON DELETE RESTRICT ON UPDATE CASCADE;
