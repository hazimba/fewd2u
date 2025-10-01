import { Timestamp } from "firebase/firestore";

export interface Employee {
  id: string;
  email: string;
  name: string;
  department: string;
  role: string;
  status: string;
  position?: string;
  phone?: string;
  dateOfJoining?: string;
  address?: string;
  profileImage?: string;
  managerId?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  price: string;
  mainImageUrl: string;
  available: boolean;
  tags: string[];
  // createdAt: Timestamp;
  // updatedAt: Timestamp;
}
