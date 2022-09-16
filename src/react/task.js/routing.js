import { Link } from "react-router-dom";

const TaskNav = () =>{

    return(
    <div>
           {/* to means home page */}
         <Link to="/crud">   Crud </Link>&emsp;
         <Link to="/address">  Address </Link>&emsp;
         <Link to="/qulification">  Qulification </Link>&emsp;

        
    </div>
    )
}
export default TaskNav;