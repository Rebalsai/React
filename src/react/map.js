function Map (){

    //Array of objects
    // const arr = ["sai","sugar","Live"]

    //Array of multiple values
    const arr =[
        {
            id:1,
            title:"venkat"
        },
        {
            id:2,
            title:"sugar"
        },
        {
            id:3,
            title:"live"
        },
        {
            id:4,
            title:"welcome"
        }
    ]

    return(
        <>
        {/* {
            arr.map(
                (value)=><li>{value}</li>
            )
        } */}

        {
            arr.map(
                //value loki pina vuna object asing avutundi
                //key also use key means property,key defined the index position 
                (value)=><li>{value.id} {value.title}</li>
            )
        }
        </>
    )
}
export default Map;