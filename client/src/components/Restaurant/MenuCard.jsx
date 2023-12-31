import { Button, Card } from "@mui/material";
import React, { useState } from "react";

const MenuCard = ({ item }) => {
  return (
    <Card className="p-5 lg:flex items-center justify-between box">
      <div className="lg:flex items-center lg:space-x-5">
        <img className="w-[7rem] h-[7rem] object-cover" src={item.imageUrl} />
        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
          <p className="font-semibold text-xl">{item.title}</p>
          <p className="">{item.price}</p>
        </div>
      </div>
      <div>
        <Button className="uppercase">Add to cart</Button>
      </div>
    </Card>
  );
};

export default MenuCard;
