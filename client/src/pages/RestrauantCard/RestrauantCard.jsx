import { Card, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
const RestrauantCard = ({ Carditem, id }) => {
  const navigate = useNavigate();
  const navaigateData = () => {
    navigate(`/restaurant/${Carditem.city}/${Carditem.name}/${id}`);
    localStorage.setItem("itemData", JSON.stringify(Carditem));
  };
  return (
    <Card className="m-5 w-[18rem] productcard">
      <div onClick={navaigateData}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={Carditem.imageUrl}
        />
      </div>
      <div className="p-4 textpart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{Carditem.name}</p>
          <p className="text-gray-500 text-sm">
            {Carditem.description.length > 40
              ? Carditem.description.substring(0, 40) + "..."
              : Carditem.description}
          </p>
        </div>
        <div>
          <IconButton>
            {id % 2 === 0 ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestrauantCard;
