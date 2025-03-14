import * as S from "@styles/FooterStyle";
import LogoIcon from "@assets/icons/logo.svg?react";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import MailIcon from "@assets/icons/mail.svg?react";

const Footer = () => {
  return (
    <S.Container>
      <LogoIcon width={62} height={12} />
      <S.LinkWrap>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/depth_mju.co.kr")
          }
        >
          <InstagramIcon />
          <span>depth_mju.co.kr</span>
        </button>
        <button onClick={() => window.open("mailto:2022depth@gmail.com")}>
          <MailIcon />
          <span>2022depth@gmail.com</span>
        </button>
        <a href="https://www.depth-mju.co.kr" target="_blank">
          뎁스 홈페이지
        </a>
      </S.LinkWrap>
    </S.Container>
  );
};

export default Footer;
