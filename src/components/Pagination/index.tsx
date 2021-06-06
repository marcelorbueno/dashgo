import { Stack, Box, Text } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - siblingsCount - 1, currentPage - 1)
    : []
  
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
      <strong>{(currentPage - 1) * registersPerPage + 1}</strong> - <strong>{totalCountOfRegisters < (currentPage * registersPerPage) ? totalCountOfRegisters : currentPage * registersPerPage}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction={["column", "row"]} spacing="2">
        { currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            ) }
          </>
        )}
        { previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        { nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        { (currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + siblingsCount + 1) < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            ) }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}