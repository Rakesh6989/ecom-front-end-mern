import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const CardData = [
  {
    id: 1,
    icon: <LockOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "100% Secure Payments",
    Description: "Moving your card details to a separate place",
  },
  {
    id: 2,
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "TrustPay",
    Description: "100% Payment Protection.Easy Return Policy",
  },
  {
    id: 3,
    icon: <HelpCenterOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Help Center",
    Description:
      "Got a Question? Look no Further Browse our FAQ or submit your query here.",
  },
  {
    id: 4,
    icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Easy Return",
    Description:
      "incase if you want to replace or return,we happily accept and assist you better",
  },
];
const carddatatwo = [
  {
    id: 1,
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Express Delivery",
    Description: "Ships in 24 Hours",
  },
  {
    id: 2,
    icon: <SecurityOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Brand Warranty",
    Description: "100% Original products",
  },
  {
    id: 3,
    icon: <LocalOfferOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Exciting Deals",
    Description: "On all prepaid orders",
  },
  {
    id: 4,
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 50, color: "#E7010A" }} />,
    headtext: "Secure Payments",
    Description: "SSL / Secure certificate",
  },
];

export { CardData, carddatatwo };
