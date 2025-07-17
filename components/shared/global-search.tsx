"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { popularCategories, popularTags } from "@/constants";
import { Badge } from "../ui/badge";

export default function GlobalSearch() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <div className="bg-blue-300/10 hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-2 px-3 py-2">
            <span>Search</span>
            <Search className="size-5" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="container max-w-6xl mx-auto py-12 space-y-4">
            <DrawerTitle>Search</DrawerTitle>

            <Input placeholder="Type to search blog" />

            <div className="flex flex-col space-y-2 mt-4">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <div className="flex flex-wrap gap-2">
                {popularCategories.map((category, index) => (
                  <Badge variant={'secondary'} key={index}>{category.name}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Badge variant={'secondary'} key={index}>{tag.name}</Badge>
                ))}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
