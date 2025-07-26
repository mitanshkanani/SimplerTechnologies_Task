import React, { useState } from "react";
import { Link as Lk } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeProvider";
import {
  Moon,
  Sun,
  Home,
  Info,
  Mail,
  UserPlus,
  Menu,
  Sparkles,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "../../../components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils"; // if you're using clsx or similar

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: (
      <motion.div
        whileHover={{
          scale: 1.05,
          color: "hsl(var(--primary))",
        }}
        animate={{
          y: [0, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Home size={18} className="mr-2" />
      </motion.div>
    ),
  },
  {
    to: "/about",
    label: "About",
    icon: (
      <motion.div
        whileHover={{
          scale: 1.05,
          color: "hsl(var(--primary))",
        }}
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Info size={18} className="mr-2" />
      </motion.div>
    ),
  },
  {
    to: "/contact",
    label: "Contact",
    icon: (
      <motion.div
        whileHover={{
          scale: 1.05,
          color: "hsl(var(--primary))",
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Mail size={18} className="mr-2" />
      </motion.div>
    ),
  },
  {
    to: "/signup",
    label: "Sign Up",
    icon: (
      <motion.div
        whileHover={{
          scale: 1.05,
          color: "hsl(var(--primary))",
        }}
        animate={{
          x: [-1, 1, -1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <UserPlus size={18} className="mr-2" />
      </motion.div>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      }}
      className="bg-background/80 backdrop-blur text-foreground p-3 sticky top-0 z-50 border-b shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with floating animation */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight flex items-center gap-2"
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="text-primary" size={28} />
          </motion.div>
          <Lk to="/" className="hover:text-primary transition-colors">
            SimplerTech
          </Lk>
        </motion.div>

        {/* Desktop Nav with staggered animation */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex space-x-2 items-center"
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={link.to}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="relative"
            >
              <Lk
                to={link.to}
                className="flex items-center px-4 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-medium"
              >
                {link.icon}
                {link.label}
              </Lk>
            </motion.li>
          ))}

          {/* Enhanced theme toggle animation */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="ml-2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.span
                    key="moon"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    whileHover={{
                      scale: 1.05,
                      color: "hsl(var(--primary))",
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Moon size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <Sun size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.li>
        </motion.ul>

        {/* Mobile menu with enhanced animations */}
        <div className="md:hidden flex items-center">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  color: "hsl(var(--primary))",
                }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu size={26} />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-2 px-4 py-4 border-b">
                  <Sparkles className="text-primary" size={24} />
                  <span className="font-bold text-lg">SimplerTech</span>
                </div>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1 mt-4 px-4"
                >
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.to}
                      variants={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Lk
                        to={link.to}
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center px-3 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all font-medium"
                      >
                        {link.icon}
                        {link.label}
                      </Lk>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-auto px-4 py-2 border-t">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      toggleTheme();
                      setSheetOpen(false);
                    }}
                    aria-label="Toggle theme"
                    className="w-full"
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
