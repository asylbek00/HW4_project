import { Title } from "../components/Title";
import { Activity } from "../components/Activity";
import { Url } from "../components/Url";
import './Container.css'


const data = [
  {
    activity: "Акын, прозаик",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSHWHag0CNByVNcc92nZjXSaFUGjGP75wkyBlzP_W&s",
    title: "Алыкул Осмонов",
  },
 
];

export function Container() {
  return (
    <div className="container">
      <Activity s1 = {data[0].activity}/>
      <Url s2 = {data[0].image}/>
      <Title s3 = {data[0].title}/>
    </div>
  );
}
