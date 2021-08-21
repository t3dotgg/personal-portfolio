import Link from "next/link";
import { LogoLink, NarutoFace, NavigationWrapper } from "./styles";

export const Navigation = () => (
  <NavigationWrapper>
    <Link href="/" passHref>
      <LogoLink>Tiger Abrodi</LogoLink>
    </Link>
    <NarutoFace />
  </NavigationWrapper>
);
