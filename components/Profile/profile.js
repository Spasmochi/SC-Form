import Card from "../Section/card";
import Username from "./username";
import About from "./about";
import Photo from "./photo";
import CoverPhoto from "./coverphoto";

function profile() {
  return (
    <Card
      title="Profile"
      sub="This information will be displayed publicly so be careful what you share."
      label="Username"
    >
      <Username />
      <About />
      <Photo />
      <CoverPhoto />
    </Card>
  );
}

export default profile;
