// type MonitorMatrix = "IPS" | "TN" | "VA";
// type DiskType = "SSD" | "HDD";
// type DiskStorage = {
//   type: DiskType;
//   size: number;
//   name?: string;
//   manufacturer?: string;
//   writeCycles?: number;
// };
// type MonitorResolution = {
//   width: number;
//   height: number;
// };

// interface LaptopSpecification extends Specification {
//   manufacturer: string;
//   monitorRefreshRate: number;
//   monitorMatrixType: MonitorMatrix;
//   monitorResolution: MonitorResolution;
//   ram: string;
//   processor: string;
//   diagonal: number;
//   storage: DiskStorage;
//   gpu: string | string[];
//   images?: string | string[];
// }

interface Specification {
  title: string;
  isDefault?: boolean;
  price: number;
  salePrice?: number;
  extraSpecs: object;
  images: string[];
}

interface Product {
  title: string;
  added: Date;
  manufacturer: string;
  category: string;
  specs: Specification[];
}
