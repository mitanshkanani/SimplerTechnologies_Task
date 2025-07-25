import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Mail, User, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

const UserCard = ({ name, email, imageUrl }) => {
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div className="ml-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-background/80 to-secondary/20 backdrop-blur-xl border-2 border-muted/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Avatar className="h-16 w-16 ring-2 ring-primary/40 ring-offset-2 ring-offset-background hover:ring-primary transition-all duration-300">
                  {imageUrl ? (
                    <AvatarImage
                      src={imageUrl}
                      alt={name}
                      className="object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-primary font-bold text-xl">
                      {initials || "U"}
                    </AvatarFallback>
                  )}
                  <motion.span
                    className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 ring-2 ring-background"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </Avatar>
              </motion.div>
              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    {name}
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-xs font-semibold animate-pulse"
                  >
                    Active
                  </Badge>
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </motion.p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors duration-300"
                >
                  <MoreVertical className="h-5 w-5" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-background/80 backdrop-blur-lg border-primary/20"
              >
                <DropdownMenuItem className="hover:bg-primary/10">
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Send Message
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 hover:bg-red-500/10">
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserCard;
