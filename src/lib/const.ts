export const NAVIGATION_LINKS = [
  { name: "Welcome", href: "/" },
  // { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  //   { name: "Contact", href: "/contact" },
];

export enum TAB {
  EMPLOYEES = "employees",
  PRODUCT = "product",
  PERMISSION = "permission",
  OTHER = "other",
}

export const ADMIN_NAVIGATION_LINKS = [
  { name: "Employees", value: "employees" },
  { name: "Products", value: "product" },
  { name: "Permission", value: "permission" },
  { name: "Others", value: "other" },
];

export const COURSE = [
  "Breakfast",
  "Lunch or dinner",
  "Main course, hearty meal",
  "Snack",
  "Dessert",
  "Beverage",
];

export const ORIGIN = [
  "Malaysia",
  "Singapore",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Other",
];

export const USER_STATUS = ["Permanent", "Contract", "Internship"];

export const USER_ROLES = ["Admin", "Manager", "Staff"];

export const DEPARTMENTS = [
  "HR",
  "IT",
  "Finance",
  "Marketing",
  "Sales",
  "Operations",
  "Customer Service",
  "R&D",
  "Legal",
  "Admin",
];

// dummy product data
export const PRODUCTS = [
  {
    id: 1,
    name: "Nasi Lemak",
    image: "/products/nasi-lemak.jpg",
    description:
      "Dish originating in Malay cuisine that consists of rice cooked in coconut milk and pandan leaf.",
    course: "Breakfast",
    origin: "Malaysia",
    price: "RM 5.00",
  },
  {
    id: 2,
    name: "Laksa",
    image: "/products/laksa.jpg",
    description:
      "A spicy noodle soup popular in the Peranakan cuisine of Southeast Asia.",
    course: "Lunch or dinner",
    origin: "Malaysia, Singapore",
    price: "RM 8.50",
  },
  {
    id: 3,
    name: "Mee Kari",
    image: "/products/mee-kari.jpg",
    description:
      "A Malaysian noodle dish served in a spicy curry soup with coconut milk.",
    course: "Main course, hearty meal",
    origin: "Malaysia",
    price: "RM 7.00",
  },
  {
    id: 4,
    name: "Nasi Kerabu",
    image: "/products/nasi-kerabu.jpg",
    description:
      "A vibrant blue rice dish from Kelantan, served with fresh herbs, salted egg, fried fish or chicken, and coconut-based gravy.",
    course: "Lunch or dinner",
    origin: "Malaysia (Kelantan)",
    price: "RM 9.00",
  },
  {
    id: 5,
    name: "Nasi Ayam",
    image: "/products/nasi-ayam.jpg",
    description:
      "Fragrant rice cooked in chicken broth, served with roasted or steamed chicken, chili sauce, and soy sauce.",
    course: "Lunch or dinner",
    origin: "Malaysia, Singapore, Hainan (China)",
    price: "RM 7.50",
  },
];
