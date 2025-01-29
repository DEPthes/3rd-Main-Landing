import useMediaQuery from "./useMediaQuery";

export default function useDMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1136 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1135 });
  const isMobile = useMediaQuery({ maxWidth: 599 });
  const isLoading = !isDesktop && !isTablet && !isMobile;

  return { isDesktop, isTablet, isMobile, isLoading };
}
