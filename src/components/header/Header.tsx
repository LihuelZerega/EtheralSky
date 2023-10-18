import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { Logo } from "./subcomps/Logo";
import { AiOutlineSearch } from "react-icons/ai";

interface HeaderProps {
  onSearch: (query: string) => void;
}
export default function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  }
  
  return (
    <Navbar className="shadow-md bg-white">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4 select-none">
          <Logo />
          <p className="ml-2 font-bold text-transparent bg-gradient-to-r from-[#dc63e6] to-[#9964ec] bg-clip-text">
            Etheral Sky
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-xl h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
           value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Type to search..."
          size="sm"
          startContent={<AiOutlineSearch size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}
