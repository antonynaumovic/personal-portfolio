import type { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiBlueprint,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiReact,
  SiUnity,
  SiUnrealengine,
  SiCplusplus,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobexd,
  SiBlender,
  SiAdobe,
  SiRender,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { BiSolidTShirt } from "react-icons/bi";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  react: SiReact,
  unity: SiUnity,
  csharp: TbBrandCSharp,
  cplusplus: SiCplusplus,
  unrealengine: SiUnrealengine,
  blueprint: PiBlueprint,
  adobexd: SiAdobexd,
  adobephotoshop: SiAdobephotoshop,
  adobelightroom: SiAdobelightroom,
  blender: SiBlender,
  substancepainter: SiAdobe,
  substancedesigner: SiAdobe,
  marvelousdesigner: BiSolidTShirt,
  marmosettoolbag: SiRender,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
