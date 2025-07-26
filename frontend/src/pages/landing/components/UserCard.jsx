import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Mail, MoreVertical } from "lucide-react";
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
    <motion.div className="p-2">
      <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg max-w-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="h-12 w-12 ring-2 ring-primary/30 ring-offset-2 ring-offset-background hover:ring-primary/50 transition-all duration-300">
                  {imageUrl ? (
                    <AvatarImage
                      src={imageUrl}
                      alt={name}
                      className="object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-lg font-bold">
                      {initials || "U"}
                    </AvatarFallback>
                  )}
                  <motion.span
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </Avatar>
              </motion.div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                    {name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 text-[10px]"
                  >
                    Active
                  </Badge>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors group"
                >
                  <Mail className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium truncate max-w-[180px]">
                    {email}
                  </span>
                </motion.div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/5 active:bg-white/10 transition-all"
                >
                  <MoreVertical className="h-4 w-4" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-background/95 backdrop-blur-xl border-white/10 rounded-lg shadow-xl w-36"
              >
                <DropdownMenuItem className="text-sm hover:bg-white/5 focus:bg-white/5 rounded-md transition-colors">
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm hover:bg-white/5 focus:bg-white/5 rounded-md transition-colors">
                  Send Message
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 focus:bg-red-500/10 rounded-md transition-colors">
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
