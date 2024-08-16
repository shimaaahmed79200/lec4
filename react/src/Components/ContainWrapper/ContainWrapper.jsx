import "./ContainWrapper.css";
import Card from "../Card/Card";
import Calc from '../../assets/images/icon-calculator.svg';
import Karma from "../../assets/images/icon-karma.svg";
import Supervisor from '../../assets/images/icon-supervisor.svg';
import Team from "../../assets/images/icon-team-builder.svg";
function ContainWrapper(){
    return (
        <div id="ContainWrapper">
            <div id="Supervisor" className="c1">
            <Card  CardTitle="Supervisor" CardIcon={Supervisor} pragraph="Uses data from past Project to provide better delivery estimation" ></Card>
            </div>
            
            <div id="Cardy">
                <div id="Team">
                <Card CardTitle="Team" CardIcon={Team} pragraph="Uses data from past Project to provide better delivery estimation" ></Card>
                </div>
                <div id="Karma">
                <Card CardTitle="Karma" CardIcon={Karma} pragraph="Uses data from past Project to provide better delivery estimation" ></Card>
                </div>
            
            </div>
            <div  className="c1" id="Calculator">
            <Card  CardTitle="Calculator" CardIcon={Calc} pragraph="Uses data from past Project to provide better delivery estimation" ></Card>
            </div>
            
            
        </div>
    )
}
export default ContainWrapper;