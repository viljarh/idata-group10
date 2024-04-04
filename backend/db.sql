CREATE TABLE `customer`(
    `customerId`integer UNIQUE PRIMARY KEY,
    `username` varchar(255),
    `emailAddress` varchar(255),
    `password` varchar(255),
    `firstName` varchar(255),
    `lastName` varchar(255),
    `driverLicenseId` integer,
    `telephoneNumber` integer,
    `customerAddressId` integer,
    `customerType` varchar(255)
);

CREATE TABLE `customerAddress` (
  `customerAddressId` integer PRIMARY KEY,
  `address` varchar(255),
  `city` varchar(255),
  `country` varchar(255),
  `postcode` integer
);

CREATE TABLE `vehicles` (
  `vehicleId` integer UNIQUE PRIMARY KEY,
  `manufacture` varchar(255),
  `modelType` varchar(255),
  `modelYear` varchar(255),
  `vehicleCategory` varchar(255),
  `transmissionType` varchar(255),
  `fuelType` varchar(255),
  `passengerCapacity` integer,
  `luggageCapacity` integer,
  `extraFeatures` varchar(255),
  `milage` double,
  `image` image,
  `dailyPrice` float,
  `weeklyPrice` float,
  `monthlyPrice` float
);

CREATE TABLE `locations` (
  `locationId` integer PRIMARY KEY,
  `city` varchar(255),
  `country` varchar(255),
  `address` varchar(255),
  `postcode` integer
);

CREATE TABLE `rentals` (
  `rentalId` integer UNIQUE PRIMARY KEY,
  `customerId` integer,
  `vehicleId` integer,
  `rentalLocationId` integer,
  `rentalDateFrom` date,
  `rentalDateTo` date,
  `distanceDriven` double,
  `totalPrice` double,
  `rentalStatusId` integer
);

CREATE TABLE `vehicleAvailability` (
  `availabilityId` integer PRIMARY KEY,
  `vehicleId` integer,
  `rentalDateFrom` date,
  `rentalDateTo` date,
  `rentalStatusId` integer
);

CREATE TABLE `rentalStatuses` (
  `statusId` integer PRIMARY KEY,
  `statusName` varchar(255) UNIQUE
);

CREATE TABLE `users` (
  `userId` integer PRIMARY KEY,
  `username` varchar(255) UNIQUE,
  `password` varchar(255),
  `email` varchar(255) UNIQUE,
  `userRole` varchar(255),
  `firstName` varchar(255),
  `lastName` varchar(255),
  `phoneNumber` integer,
  `registrationDate` date
);

ALTER TABLE `customer` ADD FOREIGN KEY (`customerAddressId`) REFERENCES `customerAddress` (`customerAddressId`);

ALTER TABLE `rentals` ADD FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`);

ALTER TABLE `rentals` ADD FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`vehicleId`);

ALTER TABLE `rentals` ADD FOREIGN KEY (`rentalLocationId`) REFERENCES `locations` (`locationId`);

ALTER TABLE `rentals` ADD FOREIGN KEY (`rentalStatusId`) REFERENCES `rentalStatuses` (`statusId`);

ALTER TABLE `vehicleAvailability` ADD FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`vehicleId`);

ALTER TABLE `vehicleAvailability` ADD FOREIGN KEY (`rentalStatusId`) REFERENCES `rentalStatuses` (`statusId`);
