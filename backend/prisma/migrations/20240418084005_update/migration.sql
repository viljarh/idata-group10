-- AlterTable
CREATE SEQUENCE vehicle_vehicleid_seq;
ALTER TABLE "Vehicle" ALTER COLUMN "vehicleId" SET DEFAULT nextval('vehicle_vehicleid_seq'),
ALTER COLUMN "extraFeatures" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
ALTER SEQUENCE vehicle_vehicleid_seq OWNED BY "Vehicle"."vehicleId";
