import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Center,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { useState } from "react";

const Feature = ({ heading, text, unit, handler }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
      <FormControl mr="5%" mt="10px">
        <InputGroup>
          <Input
            id={heading}
            placeholder=""
            type="number"
            onChange={(e) => handler(e, heading)}
          />
          {unit && <InputRightAddon children={unit} />}
        </InputGroup>
      </FormControl>
    </GridItem>
  );
};

export default function gridListWithCTA() {
  const features = [
    { id: "n", unit: "kg/ha", text: "Nutrient Nitrogen (N)" },
    {
      id: "p",
      unit: "kg/ha",
      text: "Nutrient Phosphate (P2O5)",
    },
    { id: "k", unit: "kg/ha", text: "Nutrient Potash (K2O)" },

    { id: "land", unit: "'000ha", text: "Agricultural cropland" },
    { id: "tractors", text: "Number of tractors" },
  ];

  const [values, setValues] = useState({});
  const handler = (e, id) => {
    setValues({ ...values, [id]: e.target.value });
  };

  const calculate = () => {
    let n = 3.990908 * 10 ** 6;
    let land = 1.226748 * 10 ** 6;
    let tractor = 3.080173 * 10 ** 6;
    let k = -3.239037 * 10 ** 6;
    let p = -9.387758 * 10 ** 6;

    for (const [key, value] of Object.entries(values)) {
      values[key] = parseFloat(value);

      if (value < 0) {
        alert("seems like there's a negative number, pls do not be naughty!");
        return;
      }
    }

    if (Object.keys(values).length !== 5) {
      alert("missing some values pls fill in properly");
    } else {
      let output =
        n * values.n +
        land * values.land +
        tractor * values.tractors +
        k * values.k +
        p * values.p;

      output = Math.abs(output);

      alert(`Output: ${output}! Wow! That's a lot! As high as our DDW score!`);
    }
  };

  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        {features.map((feature) => (
          <>
            <Feature
              heading={feature.id}
              text={feature.text}
              unit={feature.unit}
              handler={handler}
            />
          </>
        ))}
      </Grid>

      <Center mt={"10"}>
        <Button onClick={calculate}>Calculate Output!</Button>
      </Center>
    </Box>
  );
}
