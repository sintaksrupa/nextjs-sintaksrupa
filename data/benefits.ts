import { type IconType } from "react-icons";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHandshake, FaHeart } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";

type KeyOfBenefit = {
  icon: IconType;
  title: string;
  description: string;
};

export const keyOfBenefits: KeyOfBenefit[] = [
  // PROFESIONAL
  {
    icon: FaHandshake,
    title: "Profesional",
    description: "Setiap karya dikerjakan sesuai kebutuhanmu.",
  },
  // HEMAT
  {
    icon: RiDiscountPercentFill,
    title: "Hemat",
    description: "Kualitas premium tanpa bikin kantong bolong.",
  },
  // CEPAT
  {
    icon: AiFillThunderbolt,
    title: "Cepat",
    description: "Fast respon dan sigap membantu kebutuhanmu.",
  },
  // PUAS
  {
    icon: FaHeart,
    title: "Puas",
    description: "Bebas revisi sampai benar-benar cocok di hati.",
  },
];
