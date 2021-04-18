import { useMediaQuery } from "react-responsive";

type screenType = "isDesktop" | "isDesktopTablet" | "isTabletPhone" | "isPhone";

export const useScreenType = (): screenType => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isDesktopTablet = useMediaQuery({ minWidth: 1265 });
  const isTabletPhone = useMediaQuery({ minWidth: 800 });

  if (isDesktop) return "isDesktop";
  if (isDesktopTablet) return "isDesktopTablet";
  if (isTabletPhone) return "isTabletPhone";
  return "isPhone";
};
