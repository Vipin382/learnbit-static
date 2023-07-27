import { IconType } from "react-icons";
import { BiUsb } from "react-icons/bi";
import { MdComputer, MdPhonelink } from "react-icons/md";

export interface IFeatureCard {
  title: string;
  content: string;
  Icon: IconType;
}

export enum ChooseSide {
  LEFT,
  RIGHT,
}

export interface IChooseCard {
  title: string;
  content: string;
  icon: string;
  side: ChooseSide;
}

export const CHOOSE_DATA: IChooseCard[] = [
  {
    title: "Powerful development environment",
    content:
      "A Powerful Code Editor that supports a wide range of programming languages, as well as a terminal that gives you the same level of control and functionality as you would have on a local machine.",
    icon: "/assets/ellipse1.svg",
    side: ChooseSide.LEFT,
  },
  {
    title: "Real-time shared workspace",
    content:
      "A concise workspace for each individual that is shared with the mentor to monitor and collaborate in real-time.",
    icon: "/assets/ellipse2.svg",
    side: ChooseSide.RIGHT,
  },
  {
    title: "A.I. pair programming",
    content:
      "A powerful AI coding pal to help you code with more efficiency and speed.",
    icon: "/assets/ellipse3.svg",
    side: ChooseSide.LEFT,
  },
  {
    title: "Remote classroom friendly tools",
    content:
      "Decide to take a class remotely? No worries. Our platform is equipped with video and audio sharing, screen sharing, chat and all the other basic tools you'd expect but better.",
    icon: "/assets/ellipse4.svg",
    side: ChooseSide.RIGHT,
  },
  {
    title: "Holistic grading system",
    content:
      "A revolutionary new grading system that looks into all aspects of a budding coder and making sure they're on the right track.",
    icon: "/assets/ellipse5.svg",
    side: ChooseSide.LEFT,
  },
  {
    title: "Space-time complexity analyses",
    content:
      "Performance analysis gives you the rundown on memory consumption and program speed.",
    icon: "/assets/ellipse6.svg",
    side: ChooseSide.RIGHT,
  },
];

export const FEATURE_DATA: IFeatureCard[] = [
  {
    title: "Powerful Devolopment Environment",
    content:
      "A Powerful Code Editor that supports a wide range of programming languages, as well as a terminal that gives you the same level of control and functionality as you would have on a local machine.",
    Icon: MdComputer,
  },
  {
    title: "Real-time Shared Workspace",
    content:
      "A concise workspace for each individual that is shared with the mentor to monitor and collaborate in real-time",
    Icon: MdPhonelink,
  },
  {
    title: "Remote Friendly classroom tools",
    content:
      "Decide to take a class remotely? No worries. Our platform is equipped with video and audio sharing, screen sharing, chat and all the other basic tools you'd expect but better. ",
    Icon: BiUsb,
  },
];
