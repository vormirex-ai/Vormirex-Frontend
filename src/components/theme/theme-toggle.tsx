import { FaMoon } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";
import { Button } from "../ui/button";
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <FaMoon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <IoSunny className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
