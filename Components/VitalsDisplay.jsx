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
      <Accordion.Control>
        {new Date(item.date).toLocaleDateString()}
      </Accordion.Control>
      <Accordion.Panel>
        <div>
          {item.bloodSugarLevel ? <span>Blood Sugar Level : </span> : null}
          {item?.bloodSugarLevel}
        </div>
        <div>
          {item.fastingOrPostMeal ? <span>Fasting/PostMeal : </span> : null}
          {item?.fastingOrPostMeal}
        </div>
        <div>
          {item.bpSystolic ? <span>BloodPressure(Systolic) : </span> : null}
          {item?.bpSystolic}
        </div>
        <div>
          {item.bpDiastolic ? <span>BloodPressure(Diastolic) : </span> : null}
          {item?.bpDiastolic}
        </div>
        <div>
          {item.weight ? <span>Weight : </span> : null}
          {item?.weight}
        </div>
        <div>
          {item.height ? <span>Height : </span> : null}
          {item?.height}
        </div>
        <div>
          {item.steps ? <span>Steps : </span> : null}
          {item?.steps}
        </div>
        <div>
          {item.stressLevel ? <span>Stress Level : </span> : null}
          {item?.stressLevel}
        </div>
        <div>
          {item.notes ? <span>Notes : </span> : null}
          {item?.notes}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
console.log(items);

  return <Accordion>{items}</Accordion>;
};
export default VitalsDisplay;
