import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import Dot from "../assets/img/icon/dot.png";

export function ArticleCard() {
  return (
    <Card className="border-none overflow-hidden shadow-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 h-52 rounded-2xl"
      >
        <img
          className=""
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="pt-4 pl-0 pb-1">
        <div className="flex items-center gap-2">
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 text-md font-Roboto font-bold"
          >
            <a href="#" className="flex items-center">
              The Best Way to Layer Your Skincare Products
            </a>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 pl-12">
        <div className="flex items-center pb-0 ">
          <Typography className="font-Roboto text-sm ">
            Redouane Khlifah
          </Typography>
        </div>
        <div className="flex items-center gap-2 pt-0">
          <Typography className="font-Roboto text-sm "> 123 views </Typography>
          <img className="w-2" src={Dot} alt="" />
          <Typography className="font-Roboto text-sm "> 3 days ago </Typography>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
