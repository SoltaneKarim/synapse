import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

const PartnerHolder = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
        Partners
      </h2>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Card className="w-96 overflow-hidden">
          <List className="h-full overflow-y-auto">
            <ListItem className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem> <ListItem className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default PartnerHolder;
