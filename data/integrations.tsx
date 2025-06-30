import { Icon } from "@/types/integration";
import {
  FaFigma,
  FaTwitter,
  FaDropbox,
  FaSlack,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";
import { SiAirtable } from "react-icons/si";

export const iconsIntegrations: Icon[] = [
  { id: "figma", icon: <FaFigma /> },
  { id: "twitter", icon: <FaTwitter /> },
  { id: "dropbox", icon: <FaDropbox /> },
  { id: "airtable", icon: <SiAirtable /> },
  { id: "snapchat", icon: <FaSnapchat /> },
  { id: "slack", icon: <FaSlack /> },
  { id: "facebook", icon: <FaFacebook /> },
  { id: "instagram", icon: <FaInstagram /> },
];

