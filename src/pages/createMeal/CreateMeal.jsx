import { useForm } from "@mantine/form";
import { Select, NumberInput, Button } from "@mantine/core";
import api from "../../api/axios";
import TodaySugarDisplay from "../../../Components/TodaySugarDisplay";
import { healthEventBus } from "../../events/healthEvents";
const CreateMeal = () => {
  const MealForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      foodName: "",
      portion_consumed: "",
      mealTime: "",
      portionSize: "",
    },
  });

  // const [todayLog, setTodayLog] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    // const token = localStorage.getItem("token");
    // console.log(token);
    try {
      const response = await api.post(`/api/meals`, values);
      healthEventBus.dispatchEvent(new Event("health-updated"));
      console.log("from backend:", response.data.data);
      // if (response) {
      //   setTodayLog(true);
      // }
    } catch (error) {
      console.error("Error creating meal:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={MealForm.onSubmit(handleSubmit)}
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
        <Select
          label="Food Item:"
          placeholder="Select one option:"
          data={[
            {
              group: "Staples",
              items: [
                "roti",
                "chapati (whole wheat)",
                "rice",
                "pulao",
                "poha",
                "idli",
                "dosa",
                "upma",
                "bread (white)",
                "bread (brown)",
              ],
            },
            {
              group: "Vegetables / Sabji",
              items: [
                "boiled potato",
                "carrot",
                "beetroot",
                "bhindi (okra)",
                "baingan (brinjal)",
                "cabbage (cooked)",
                "cauliflower (cooked)",
                "palak (spinach, cooked)",
                "lauki (bottle gourd)",
                "tinda",
                "parwal (pointed gourd)",
                "gobi aloo (cauliflower & potato curry)",
                "mixed veg curry",
                "sambar",
              ],
            },
            {
              group: "Fruits",
              items: [
                "banana",
                "apple",
                "mango",
                "papaya",
                "grapes",
                "sweet lime",
                "orange juice",
              ],
            },
            {
              group: "Dairy & Beverages",
              items: [
                "milk (toned)",
                "lassi (sweet)",
                "tea (with sugar)",
                "coffee (with sugar)",
                "soft drink (cola)",
              ],
            },
            {
              group: "Sweets & Snacks",
              items: ["biscuits (glucose)", "kheer", "halwa (gajar)"],
            },
            {
              group: "Dal & Legumes",
              items: ["dal (cooked)"],
            },
          ]}
          clearable
          searchable
          nothingFoundMessage="Nothing found..."
          checkIconPosition="left"
          {...MealForm.getInputProps("foodName")}
        />

        <Select
          label="Meal Time:"
          placeholder="select one option:"
          data={["Breakfast", "Lunch", "Dinner", "Snack"]}
          clearable
          searchable
          nothingFoundMessage="Nothing found... "
          checkIconPosition="left"
          {...MealForm.getInputProps("mealTime")}
        />

        <Select
          label="Portion Sizes"
          placeholder="select one option"
          data={[
            {
              group: "Breads",
              items: [
                "roti",
                "chapati",
                "paratha",
                "puri",
                "naan",
                "dosa",
                "idli",
              ],
            },
            {
              group: "Rice & Grains",
              items: [
                "rice_katori",
                "pulao_katori",
                "biryani_plate",
                "poha_plate",
                "upma_plate",
              ],
            },
            {
              group: "Dal & Curries",
              items: [
                "dal_katori",
                "sambar_katori",
                "sabji_katori",
                "mixed_veg_plate",
                "paneer_curry_katori",
                "chole_katori",
                "rajma_katori",
              ],
            },
            {
              group: "Vegetables",
              items: [
                "potato_medium",
                "onion_medium",
                "tomato_medium",
                "cucumber_medium",
                "carrot_medium",
                "bhindi_cup",
                "palak_plate",
              ],
            },
            {
              group: "Fruits",
              items: [
                "banana_small",
                "banana_large",
                "apple_medium",
                "mango_medium",
                "orange_medium",
                "grapes_cup",
                "papaya_cup",
              ],
            },
            {
              group: "Dairy & Protein",
              items: [
                "milk_glass",
                "curd_bowl",
                "paneer_piece",
                "egg",
                "chicken_piece",
                "fish_piece",
              ],
            },
            {
              group: "Snacks & Sweets",
              items: [
                "samosa",
                "pakora_piece",
                "jalebi_piece",
                "laddoo",
                "gulab_jamun_piece",
                "kheer_bowl",
                "halwa_bowl",
              ],
            },
            {
              group: "Utensils & Measures",
              items: [
                "katori_small",
                "katori_medium",
                "katori_large",
                "tablespoon",
                "teaspoon",
                "glass_small",
                "glass_medium",
                "glass_large",
                "cup",
                "slice_bread",
              ],
            },
          ]}
          clearable
          searchable
          nothingFoundMessage="Nothing found..."
          checkIconPosition="left"
          {...MealForm.getInputProps("portionSize")}
        />

        <NumberInput
          label="Portion Consumed"
          description="eg : If you consumed 2 katoris of rice, enter 2"
          placeholder="Enter a Number"
          {...MealForm.getInputProps("portion_consumed")}
        />

        <Button type="submit" style={{ marginTop: "2%" }}>
          Create Meal
        </Button>
      </form>
      <TodaySugarDisplay/>
    </div>
  );
};
export default CreateMeal;
