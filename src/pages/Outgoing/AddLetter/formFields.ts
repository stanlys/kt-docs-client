import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import BusinessIcon from "@mui/icons-material/Business";
import Person2Icon from "@mui/icons-material/Person2";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SignpostIcon from "@mui/icons-material/Signpost";
import DescriptionIcon from "@mui/icons-material/Description";
import DraftsIcon from "@mui/icons-material/Drafts";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

export const formFields = {
  sender: {
    name: "sender",
    required: false,
    label: "Отправитель",
    icon: TransferWithinAStationIcon,
    finder: true,
  },
  receiver: {
    name: "receiver",
    required: false,
    label: "Получатель",
    icon: Person2Icon,
    finder: true,
  },
  letterTitle: {
    name: "letterTitle",
    required: false,
    label: "Заголовок письма",
    icon: DraftsIcon,
  },
  letterType: {
    name: "letterType",
    required: false,
    label: "Тип документа",
    icon: DraftsIcon,
  },
  letterDescription: {
    name: "letterDescription",
    required: false,
    label: "Краткое описание отправления",
    icon: DescriptionIcon,
  },
  inNumber: {
    name: "inNumber",
    required: false,
    label: "Входящий номер",
    icon: DescriptionIcon,
  },
  executor: {
    name: "executor",
    required: true,
    label: "Исполнитель",
    icon: Person2Icon,
  },
  responseToIncoming: {
    name: "responseToIncoming",
    required: false,
    label: "Ответ на входящий",
    icon: MoveToInboxIcon,
  },
};
