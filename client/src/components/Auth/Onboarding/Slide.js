/** @format */

import React from "react";
import { Dimensions } from "react-native";
import { Box, Text } from "native-base";
// import { Box, Text } from "../../../misc/theme";

const { width, height } = Dimensions.get("window");

function Slide({ title, body }) {
  return (
    <Box
      {...{ width }}
      justifyContent="center"
      alignItems="center"
      marginTop={10}>
      <Box
        height={300}
        width={300}
        borderWidth={1}
        marginBottom={10}
        marginTop={4}></Box>
      <Box justifyContent="center" alignItems="center" paddingHorizontal={10}>
        <Text fontSize="xl" fontWeight={700} lineHeight={20} marginBottom={2}>
          {title}
        </Text>
        <Text textAlign="center" fontSize="sm">
          {body}
        </Text>
      </Box>
    </Box>
  );
}

export default Slide;
