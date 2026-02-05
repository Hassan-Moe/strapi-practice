import { createNavigation } from "next-intl/navigation";
import { routing } from "./rounting";

export const {
  Link,
  getPathname,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing);
