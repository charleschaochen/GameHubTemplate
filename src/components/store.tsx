import React from "react";
import Sidebar from "./layout/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "Crates" | "Bundles" | "Currency" | "Items";
}

const storeItems: StoreItem[] = [
  {
    id: "1",
    name: "Legendary Crate",
    description: "Contains rare and legendary items with increased drop rates",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948",
    category: "Crates",
  },
  {
    id: "2",
    name: "Season Pass Bundle",
    description: "Get the premium battle pass plus 25 tier skips",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
    category: "Bundles",
  },
  {
    id: "3",
    name: "5000 Coins",
    description: "Premium in-game currency for purchasing exclusive items",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e4",
    category: "Currency",
  },
  {
    id: "4",
    name: "Starter Pack",
    description:
      "Perfect for new players - includes essential items and boosts",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b",
    category: "Bundles",
  },
  {
    id: "5",
    name: "Elite Weapon Skin",
    description: "Exclusive animated weapon skin with special effects",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    category: "Items",
  },
  {
    id: "6",
    name: "Mystery Box",
    description: "Try your luck with this mysterious container",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948",
    category: "Crates",
  },
];

export default function Store() {
  const categories = Array.from(
    new Set(storeItems.map((item) => item.category)),
  );

  return (
    <div className="min-h-screen flex bg-gray-900">
      <Sidebar activeItem="store" />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Store</h1>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="bg-gray-800 text-white border-gray-700 overflow-hidden hover:border-[#FFB800] transition-colors"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription className="text-gray-400 mt-2">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-[#FFB800]">
                          {item.price}
                        </span>
                        <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Purchase
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
