function PropsFunction (props){

    return(<>
         <h1>this is {props.name}</h1>
         <h2>Email:{props.email}</h2>
         <h3>adress:{props.other.adress}</h3>
    </>
    )
}
export default PropsFunction;