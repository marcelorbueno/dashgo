import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcelo Bueno</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            marcelo.bueno@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcelo Bueno" src="https://github.com/marcelorbueno.png" />
    </Flex>
  )
}