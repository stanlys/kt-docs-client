import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import SignpostIcon from "@mui/icons-material/Signpost";
import DraftsIcon from "@mui/icons-material/Drafts";

export const formFieldsDelivery = {
  orgname: {
    name: "orgname",
    required: true,
    label: "Наименование организации",
    icon: ShareLocationIcon,
  },
  website: {
    name: "website",
    required: false,
    label: "Сайт для отслеживания",
    icon: SignpostIcon,
  },
  phone: {
    name: "phone",
    required: false,
    label: "Номер телефона",
    icon: DraftsIcon,
  },
};
