'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2 } from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
  const [active] = useState(false)



  return (
    <footer className="flex-center items-center py-24 flex-col container mx-auto max-w-2xl space-y-12">
      <h1 className="text-5xl max-md:text-3xl font-creteRound text-center">
        Get Latest posts delivered right to your inbox
      </h1>

      <div className="grid max-md:grid-cols-1 grid-cols-3 md:gap-2 w-full">
        <Input className="w-full col-span-2" placeholder="Your email adress" />

        <Button variant={active ? 'default' : 'outline'}>
          <User2 className="size-4 me-2" />
          <span>Join today</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
