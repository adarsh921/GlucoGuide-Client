import { NumberInput, Select, Textarea, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import api from "../../api/axios";

const AddVitals = () => {
  const vitalsForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      bloodSugarLevel: "",
      fastingOrPostMeal: "",
      bpSystolic: "",
      bpDiastolic: "",
      weight: "",
      height: "",
      waistCircumference: "",
      steps: "",
      sleepHours: "",
      stressLevel: "",
      notes: "",
    },
  });

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await api.post(`/api/vitals`, values);
      console.log("from backend:", response.data.analysis);
    } catch (error) {
      console.error("Error creating meal:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={vitalsForm.onSubmit(handleSubmit)}
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "5%",
          border: "none",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "2%",
          borderRadius: "10px",
        }}
      >
        <NumberInput
          withAsterisk
          required
          label="blood sugar level"
          placeholder="Enter your sugar level(in mg/dL)"
          suffix="mg/dL"
          allowDecimal={true}
          {...vitalsForm.getInputProps("bloodSugarLevel")}
        />

        <Select
          withAsterisk
          required
          label="fasting or postMeal?"
          placeholder="select one option:"
          data={["fasting", "Post-meal"]}
          clearable
          searchable
          nothingFoundMessage="Nothing found... "
          checkIconPosition="left"
          {...vitalsForm.getInputProps("fastingOrPostMeal")}
        />
        <NumberInput
          withAsterisk
          required
          label="blood pressure(Systolic)"
          description="for eg:If your bp=120/80, then enter 120 here"
          placeholder="Enter your blood pressure(top number)"
          suffix="mm hg"
          allowDecimal={true}
          {...vitalsForm.getInputProps("bpSystolic")}
        />
        <NumberInput
          withAsterisk
          required
          label="blood pressure(Diastolic)"
          description="for eg:If your bp=120/80, then enter 80 here"
          placeholder="Enter your blood pressure(bottom number)"
          suffix="mm hg"
          allowDecimal={true}
          {...vitalsForm.getInputProps("bpDiastolic")}
        />
        <NumberInput
          withAsterisk
          required
          label="weight"
          placeholder="Enter your weight (in kg)"
          suffix="kg"
          allowDecimal={true}
          {...vitalsForm.getInputProps("weight")}
        />
        <NumberInput
          withAsterisk
          required
          label="height"
          placeholder="Enter your height (in meters)"
          suffix="m"
          allowDecimal={true}
          {...vitalsForm.getInputProps("height")}
        />
        <NumberInput
          label="Waist Circumference(optional)"
          placeholder="Enter the width of your waist(cm)"
          suffix="cm"
          allowDecimal={true}
          {...vitalsForm.getInputProps("waistCircumference")}
        />
        <NumberInput
          label="steps(optional)"
          placeholder="how many steps did you walked/ran"
          allowDecimal={true}
          {...vitalsForm.getInputProps("steps")}
        />
        <NumberInput
          label="sleepHours(optional)"
          placeholder="how many hours do you sleep?"
          allowDecimal={true}
          {...vitalsForm.getInputProps("sleepHours")}
        />
        <Select
          label="Stress Level(optional)"
          placeholder="select one option:"
          data={["Low", "Moderate", "High"]}
          clearable
          searchable
          nothingFoundMessage="Nothing found... "
          checkIconPosition="left"
          {...vitalsForm.getInputProps("stressLevel")}
        />
        <Textarea
          label="Notes(optional)"
          placeholder="Write a note on how are you feeling"
          {...vitalsForm.getInputProps("notes")}
        />

        <Button type="submit" style={{ marginTop: "2%" }}>
          Add Vitals
        </Button>
      </form>
    </div>
  );
};

export default AddVitals;

// export const addVitals = async (req, res) => {
//   try {
//     const {
//       userId,
//       bloodSugarLevel,
//       fastingOrPostMeal,
//       bpSystolic,
//       bpDiastolic,
//       weight,
//       height,
//       waistCircumference,
//       steps,
//       sleepHours,
//       stressLevel,
//       notes,
//     } = req.body;

//     if (!userId || !bloodSugarLevel || !fastingOrPostMeal) {
//       return res.status(400).json({
//         message: "userId, bloodSugarLevel and fastingOrPostMeal are required",
//       });
//     }
