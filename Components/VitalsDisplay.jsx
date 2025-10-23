import { useEffect } from "react";
import { Accordion } from "@mantine/core";
const VitalsDisplay = ({ values }) => {
  // useEffect(()=>{
  //     const getVitals = async ()=>{

  //     }
  // },[])
  console.log(values);
 
  const items = values.map((item) => (
    <Accordion.Item key={item._id} value={item.date || "date"}>
      {console.log(values)}
      {console.log(item.date)}
      <Accordion.Control>{new Date(item.date).toLocaleDateString()}</Accordion.Control>
      <Accordion.Panel>coming soon...</Accordion.Panel>
    </Accordion.Item>
  ));
  
  return (
    <Accordion>{items}</Accordion>
  )
};
export default VitalsDisplay;
