import { Paper } from "@mantine/core";
const BreakFast = ({meals}) =>{
    console.log(meals);
    
    return(
        <Paper>
            {`Breakfast:${meals}`}
        </Paper>
    )
}
export default BreakFast;