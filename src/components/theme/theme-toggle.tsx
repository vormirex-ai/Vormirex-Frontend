import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleTheme } from "@/store/slice/themeSlice";

export function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "light" ? (
        <FaMoon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <IoSunny className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
