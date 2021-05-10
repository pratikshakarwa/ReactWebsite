import React from "react"
import {
  FaCcStripe,
  FaCreditCard,
  FaAlipay,
  FaHospital,
  FaIndustry,
  FaAddressCard,
  FaCloud,
  FaReact,
  FaMale,
} from "react-icons/fa"
export default [
  {
    page: "solutions",
    label: "Bank & Finance",
    url: `/solutions/BankAndFinance`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "solutions",
    label: "Health & Life Sciences",
    url: `/solutions/HelthAndLife`,
    icon: <FaHospital className="icon" />,
  },
  {
    page: "solutions",
    label: "Media & Entertainment",
    url: `/solutions/MediaAndEnter`,
    icon: <FaIndustry className="icon" />,
  },
  {
    page: "service",
    label: "Application service",
    url: `/service/Application`,
    icon: <FaAddressCard className="icon" />,
  },
  {
    page: "service",
    label: "Bigdata & Analytics",
    url: `/service/BigAndAna`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "service",
    label: "Cloud Service",
    url: `/service/Cloud`,
    icon: <FaCloud className="icon" />,
  },
  {
    page: "service",
    label: "Infrastructure",
    url: `/service/Infrastructure`,
    icon: <FaIndustry className="icon" />,
  },
  {
    page: "service",
    label: "Mobility",
    url: `/service/Mobility`,
    icon: <FaIndustry className="icon" />,
  },
  {
    page: "service",
    label: "RRAAS",
    url: `/service/RRAAS`,
    icon: <FaReact className="icon" />,
  },

  {
    page: "service",
    label: "SoftwareAsset",
    url: `/service/SoftwareAsset`,
    icon: <FaCcStripe className="icon" />,
  },

  {
    page: "service",
    label: "Staffing Solution",
    url: `/service/staffing`,
    icon: <FaMale className="icon" />,
  },
]
