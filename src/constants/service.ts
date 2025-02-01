import Image1 from "@assets/images/thumbnail/일거수일투족.png";
import Image2 from "@assets/images/thumbnail/wishwesee.png";
import Image3 from "@assets/images/thumbnail/spillthetea.png";
import Image4 from "@assets/images/thumbnail/paykids.png";

import DetailImage1 from "@assets/images/detail/일거수일투족.png";
import DetailImage2 from "@assets/images/detail/wishwesee.png";
import DetailImage3 from "@assets/images/detail/spillthetea.png";
import DetailImage4 from "@assets/images/detail/paykids.png";

export const Service = [
  {
    id: 1,
    title: "일거수일투족",
    content:
      "나의 일거수일투족을 기록하고, 쌓여가는 기록들로 나만의 뉴스를 만들어보세요!",
    image: Image1,
  },
  {
    id: 2,
    title: "WishWesee",
    content: "초대를 더 특별하게! 디지털 초대장 WishWesee",
    image: Image2,
  },
  {
    id: 3,
    title: "Spill the tea",
    content: "당신의 이야기가 특별해지는 곳",
    image: Image3,
  },
  {
    id: 4,
    title: "PayKids",
    content: "우리 아이의 첫 금융 선생님",
    image: Image4,
  },
];

export const ServiceDetailImages: Record<string, string> = {
  "1": DetailImage1,
  "2": DetailImage2,
  "3": DetailImage3,
  "4": DetailImage4,
};
