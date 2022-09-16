function PresentDate(){
    debugger
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const day = weekday[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

    return(
        <>
        <h1>Today is : {day}</h1>
        <h2>Month is : {month}</h2>
        <h2>Today date is : {date}</h2>
        <h2>year is : {year}</h2>
        </>
    )
}
export default PresentDate;