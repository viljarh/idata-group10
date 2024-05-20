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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { VehicleProps, VehicleTableProps } from "@/types";
import axiosInstance from "@/axios/axiosInstance";
import SidebarNavigation from "../_components/SideBarNavigation";

export default function AdminVehiclePage() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axiosInstance.get("/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  const handleDelete = async (vehicleId: number) => {
    console.log("Deleting vehicle with ID:", vehicleId);

    if (!confirm("Are you sure you want to delete this vehicle?")) return;
    try {
      const response = await axiosInstance.delete(`/vehicles/${vehicleId}`);
      if (response.status === 200) {
        console.log("Vehicle deleted successfully");
        setVehicles(
          vehicles.filter((vehicle) => vehicle.vehicleId !== vehicleId)
        );
      } else {
        console.error("Failed to delete vehicle:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SidebarNavigation />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="./">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Vehicles</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </div>

      <div className="flex flex-col flex-1 ml-14 sm:ml-">
        <div className="flex justify-center items-center gap-4 p-4">
          <Button asChild className=" m-5 w-1/4">
            <Link href="/admin/vehicles/new">Add Vehicle</Link>
          </Button>
        </div>
        <div className="px-4 py-2">
          <VehiclesTable vehicles={vehicles} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

function VehiclesTable({ vehicles, onDelete }: VehicleTableProps) {
  if (vehicles.length === 0)
    return (
      <p className="p-4 from-neutral-800 font-mono">No vehicles found...</p>
    );
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
          <TableRow key={vehicle.vehicleId}>
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
                        onDelete(vehicle.vehicleId);
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
