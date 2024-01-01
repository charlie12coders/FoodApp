import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { MenuCardData } from "../../Data/MenuCardData";
const categories = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice And Biryani",
  "Breads",
  "Accompaniments",
  "Dessert",
];
const foodType = ["Vegetarian Only", "Non - Vegetarian Only", "Both"];

const Restaurant = () => {
  const [SelectedCategory] = useState(0);
  const item = JSON.parse(localStorage.getItem("itemData"));
  const MenuItem = MenuCardData.map((item) => item);
  const handleCateogryChange = () => {};
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10 uppercase">{`Home/India/Negi Restrauant/2/Order Online`}</h3>
        <div>
          <img
            className="w-full h-[70vh] object-cover"
            src={item.imageUrl}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold uppercase">{item.name}</h1>
          <p className="uppercase text-2xl text-gray-500">{item.description}</p>
          <p className="uppercase py-3 text-orange-500">
            Open Now 10:30 am - 12 midnight (Today)
          </p>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <Card className="p-5 space-y-5 lg:sticky top-28">
            <div className="">
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={SelectedCategory}
                  onChange={handleCateogryChange}
                ></RadioGroup>
                {categories.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio />}
                    label={item}
                    sx={{ color: "gray" }}
                  />
                ))}
              </FormControl>
            </div>
            <Divider />
            <div className="">
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="foodtype"
                  value={SelectedCategory}
                  onChange={handleCateogryChange}
                ></RadioGroup>
                {foodType.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio />}
                    label={item}
                    sx={{ color: "gray" }}
                  />
                ))}
              </FormControl>
            </div>
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {MenuItem.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
