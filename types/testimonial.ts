import { ReactElement } from "react";

export interface Testimonial {
  id: number;
  name: string;
  username: string;
  platform: string;
  icon: ReactElement;
  avatar: string;
  content: string;
  title: string;
}