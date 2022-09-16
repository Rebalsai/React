import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Parameter () {

    const { id } = useParams();

    let navigation = useNavigate();

    const backToHome =()=>{
        navigation("/screen5/:id")
    }
    return(
        <>
        <p>the id Name is :{id}</p>
        <button onClick={backToHome}>GoToScreen5</button>
        </>
    )
}
export default Parameter;