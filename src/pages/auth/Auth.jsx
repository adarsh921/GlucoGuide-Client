import {
  Button,
  // Checkbox,
  // Group,
  // NativeSelect,
  // NumberInput,
  Paper,
  // PasswordInput,
  // TextInput,
  Flex,
  Center,
  Avatar,
  Title,
  useMantineTheme,
  Loader,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IconUser } from "@tabler/icons-react";
import axios from "axios";
import "./auth.css";
import "../../assets/profile.webp";
import { AuthContext } from "../../context/AuthContext";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const setIsAuthenticated = useContext(AuthContext).setIsAuthenticated;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/chiefboard");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    gender: "",
    diabetesType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "name is required!!";
    if (!formData.email) newErrors.email = "email is required!!";
    if (!formData.password) newErrors.password = "password is required!!";
    if (!formData.age) newErrors.age = "age is required!!";
    if (!formData.gender) newErrors.gender = "gender is required!!";
    if (!formData.diabetesType)
      newErrors.diabetesType = "diabetesType is required!!";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    // console.log(formData.gender);
    // console.log(formData.diabetesType);
    try {
      e.preventDefault();
      const validationErrors = validate();
      setError(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/register`,
          formData,
          { withCredentials: true },
        );
        setIsAuthenticated(true);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log(formData);
        localStorage.setItem("username", formData.username);
        if (response.data.token) {
          navigate("/chiefboard");
        }
      }
    } catch (error) {
      console.log("Error in registering user!");
      console.log("Error:", error);
    } finally {
      console.log("finally block ran!");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="md"
          shadow="xl"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "30%",
            padding: "1%",
          }}
          className="flex"
        >
          <Avatar color="blue" radius="xl" size="lg">
            <IconUser size="1rem" />
          </Avatar>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="input"
            placeholder="Username"
          />
          {error.name ? (
            <p style={{ margin: 0, color: "red" }}>{error.name}</p>
          ) : null}
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />
          {error.email ? (
            <p style={{ margin: 0, color: "red" }}>{error.email}</p>
          ) : null}
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />
          {error.password ? (
            <p style={{ margin: 0, color: "red" }}>{error.password}</p>
          ) : null}
          {isLoading && <Loader type="bars" color="pink" />}
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            placeholder="Age"
            className="input"
          />
          {error.age ? (
            <p style={{ margin: 0, color: "red" }}>{error.age}</p>
          ) : null}
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {error.gender ? (
            <p style={{ margin: 0, color: "red" }}>{error.gender}</p>
          ) : null}
          <select name="diabetesType" id="dtype" onChange={handleChange}>
            <option value="">Select Diabetes Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="gestational">Gestational</option>
          </select>
          {error.diabetesType ? (
            <p style={{ margin: 0, color: "red" }}>{error.diabetesType}</p>
          ) : null}
          <Button type="submit" className="neumorphic-button">
            Register
          </Button>
        </Flex>
      </form>
      <span>Already registered?--</span>
      <Link to="/login">
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default Auth;
