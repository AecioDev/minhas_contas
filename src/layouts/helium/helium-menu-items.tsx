import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";
import {
  PiCurrencyCircleDollarFill,
  PiShoppingCart,
  PiCurrencyDollar,
  PiCreditCard,
  PiFolderLock,
  PiCalendarPlus,
  PiNewspaperClippingDuotone,
  PiCodesandboxLogoDuotone,
} from "react-icons/pi";
import CrmDashIcon from "@core/components/icons/crm-icon";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: "Overview",
  },
  {
    name: "CRM",
    href: "#",
    icon: <CrmDashIcon />,
    dropdownItems: [
      {
        name: "CRM",
        href: routes.crm.dashboard,
        icon: <CrmDashIcon />,
      },
      {
        name: "Event Calendar",
        href: routes.crm.eventCalendar,
        icon: <PiCalendarPlus />,
      },
    ],
  },
  {
    name: "Financial",
    href: routes.financial.dashboard,
    icon: <PiCurrencyCircleDollarFill />,
  },
  {
    name: "E-Commerce",
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCart />,
  },
  {
    name: "E-Commerce",
    href: "#",
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
      {
        name: "Product Details",
        href: routes.eCommerce.productDetails(DUMMY_ID),
      },
      {
        name: "Create Product",
        href: routes.eCommerce.createProduct,
      },
      {
        name: "Edit Product",
        href: routes.eCommerce.ediProduct(DUMMY_ID),
      },
      {
        name: "Categories",
        href: routes.eCommerce.categories,
      },
      {
        name: "Create Category",
        href: routes.eCommerce.createCategory,
      },
      {
        name: "Edit Category",
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        name: "Orders",
        href: routes.eCommerce.orders,
      },
      {
        name: "Order Details",
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        name: "Create Order",
        href: routes.eCommerce.createOrder,
      },
      {
        name: "Edit Order",
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        name: "Reviews",
        href: routes.eCommerce.reviews,
      },
      {
        name: "Shop",
        href: routes.eCommerce.shop,
      },
      {
        name: "Cart",
        href: routes.eCommerce.cart,
      },
      {
        name: "Checkout & Payment",
        href: routes.eCommerce.checkout,
      },
    ],
  },
  {
    name: "Invoice",
    href: "#",
    icon: <PiCurrencyDollar />,
    dropdownItems: [
      {
        name: "List",
        href: routes.invoice.home,
      },
      {
        name: "Details",
        href: routes.invoice.details(DUMMY_ID),
      },
      {
        name: "Create",
        href: routes.invoice.create,
      },
      {
        name: "Edit",
        href: routes.invoice.edit(DUMMY_ID),
      },
    ],
  },
  {
    name: "Roles & Permissions",
    href: routes.rolesPermissions,
    icon: <PiFolderLock />,
  },
  {
    name: "Point of Sale",
    href: routes.pos.index,
    icon: <PiCreditCard />,
  },
  {
    name: "Invoice Builder",
    href: routes.invoice.builder,
    icon: <PiNewspaperClippingDuotone />,
  },
  {
    name: "Image Viewer",
    href: routes.imageViewer,
    icon: <PiCodesandboxLogoDuotone />,
    badge: "NEW",
  },
  {
    name: "Search & Filters",
  },
];
