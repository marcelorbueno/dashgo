import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcelo Bueno</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          marcelo.bueno@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Marcelo Bueno" src="https://github.com/marcelorbueno.png" />
    </Flex>
  )
}