import React, { useState } from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { BASE_URL } from "../../util/vars";

const AddActivity = () => {
  const [formData, setFormData] = useState({
    activityName: '',
    startDate: '',
    totalWork: '',
    numberOfLabour: '',
    labourEfficiency: ''
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tasks/addTask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast({
        title: "Task added successfully",
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });

      setFormData({
        activityName: '',
        startDate: '',
        totalWork: '',
        numberOfLabour: '',
        labourEfficiency: ''
      });
    } catch (error) {
      toast({
        title: `Error: ${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} p={2}>
      <Box as="form" onSubmit={handleSubmit} p={{ base: 8, md: 10, lg: 10 }} borderWidth="1px" borderRadius="lg" w={{ base: "100%", md: "80%", lg: "50%" }} mt={20}>
        <Input
          name="activityName"
          placeholder="Activity Name"
          value={formData.activityName}
          onChange={handleChange}
          mb={3}
          required
        />
        <Input
          name="startDate"
          type="date"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          mb={3}
          required
        />
        <Input
          name="totalWork"
          placeholder="Total Work"
          type="number"
          value={formData.totalWork}
          onChange={handleChange}
          mb={3}
          required
        />
        <Input
          name="numberOfLabour"
          placeholder="Number of Labour"
          type="number"
          value={formData.numberOfLabour}
          onChange={handleChange}
          mb={3}
          required
        />
        <Input
          name="labourEfficiency"
          placeholder="Labour Efficiency"
          type="number"
          value={formData.labourEfficiency}
          onChange={handleChange}
          mb={3}
          required
        />
        <Button type="submit" bg={"#2a68a2"} _hover={{ bg: "#75a3c1" }} color="white" size={"sm"}>
          Add activity
        </Button>
      </Box>
    </Box>
  );
};

export { AddActivity };
