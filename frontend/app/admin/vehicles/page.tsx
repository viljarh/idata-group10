"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function AdminVehiclePage() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:8080/vehicles");
        if (response.ok) {
          const data = await response.json();
          setVehicles(data);
        } else {
          console.error("Failed to fetch vehicles:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <Button asChild className=" m-5">
          <Link href="/admin/vehicles/new">Add Vehicle</Link>
        </Button>
      </div>
      <VehiclesTable vehicles={vehicles} />
    </>
  );
}

function VehiclesTable({ vehicles }: Readonly<{ vehicles: any[] }>) {
  if (vehicles.length === 0) return <p>No vehicles found</p>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Availability</span>
          </TableHead>
          <TableHead>Manufacturer</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vehicles.map((vehicle) => (
          <TableRow key={vehicle.id}>
            <TableCell>
              <>
                <span className="sr-only">Available</span>
                <CheckCircle2 className="stroke-green-400" />
              </>
            </TableCell>
            <TableCell>{vehicle.manufacturer}</TableCell>
            <TableCell>{vehicle.model}</TableCell>
            <TableCell>{vehicle.year}</TableCell>
            <TableCell>{vehicle.dailyPrice}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/vehicles/${vehicle.vehicleId}/edit`}>
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Button
                      onClick={() => {
                        handleDelete(vehicle.vehicleId);
                      }}
                      className="w-full"
                    >
                      Delete
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
async function handleDelete(vehicleId: number) {
  console.log("Deleting vehicle with ID:", vehicleId);

  if (!confirm("Are you sure you want to delete this vehicle?")) return;
  try {
    const response = await fetch(
      `http://localhost:8080/vehicles/${vehicleId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Vehicle deleted successfully");
    } else {
      console.error("Failed to delete vehicle:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting vehicle:", error);
  }
}
