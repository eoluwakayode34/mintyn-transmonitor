import React, {useMemo} from 'react'
import { useTable, usePagination } from 'react-table'
// import REGISTERED_TRUCK from '../../util/data/registered-trucks.json'
import color from '../../util/color'
// import {COLUMNS} from './column'
import { 
    Table,
    Thead,
    Tbody,
    Icon,
    Flex,
    Text,
    Button,
    Input,
    Tr,
    Th,
    Td,
    Box,
    DarkMode,
    LightMode,
    useColorModeValue
    } from '@chakra-ui/react'


    import {IoChevronForwardOutline,  IoChevronBackOutline} from 'react-icons/io5'
    import {HiChevronDoubleLeft , HiChevronDoubleRight} from 'react-icons/hi'

const AppTable = ({COLUMNS, DATA}) => {
    const textColor = useColorModeValue('#565656','#565656')
    const background = useColorModeValue('white', 'blackAlpha.100')

    const columns = useMemo(() => COLUMNS, [COLUMNS])
    const data = useMemo(() => DATA, [DATA])
    
   const tableInstance =  useTable({
         columns,
        data
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        pageCount,
        pageOptions,
        state,
        page,
        prepareRow
    } = tableInstance

    const {pageIndex} = state

    return (
        <LightMode>
        <Flex width='100%' flexDir='column'>
        <Table  width='100%' variant="simple"  textAlign='center' {...getTableProps()} >
            <Thead  width='100%' bg={color.gray300}>
                {
                    headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <Th  textAlign='center'textTransform='uppercase' {...column.getHeaderProps()} >{column.render(('Header'))}</Th>

                            ))}
                    </Tr>
                    )
                      
                   )
                }
               
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)

                        return (
                            <Tr {...row.getRowProps()}  >

                                {
                                    row.cells.map(cell => {
                                            return (<Td textTransform='capitalize' textAlign='center' 
                                            color={textColor} 
                                            {...cell.getCellProps()}>
                                                    {cell.render(('Cell'))}
                                            </Td>
)
                                    })
                                }
                        </Tr>
                        )
                    })
                }
               

            </Tbody>
        </Table>
                <Flex flexWrap='wrap' px={['1rem','1.5rem','2rem']}  py={['.5rem','1rem','1.5rem']} flex='1' alignItems='center' justifyContent='space-between'>
                    <Flex flex='1' mr='2rem'>
                        <Text color={textColor} fontSize='14px'>
                            
                        <Box>
                            <Text color={textColor}>
                          Page{' '} 
                          </Text>
                          
                          <Box>
                          {pageIndex + 1} of {pageOptions.length}
                              </Box>

                              <Box>
                                  {' '}
                              </Box>
                        </Box>
                        </Text>
                    </Flex>

                    <Flex flex={['3','2','1','1']}>
                        
                        <Flex justifyContent='space-evenly' alignItems='center' >
                        <Text fontSize='14px'                                              color={textColor} > Go to Page</Text>

                            <Input display='flex' mx='1rem' textAlign='center' alignItems='center'                                             color={textColor} 
 justifyContent='center' type='number'  flex='1' width='4rem'  p={0} defaultValue={pageIndex + 1}
 bg={background}                onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} />
                        </Flex>
                           


                           <Flex  ml='auto' alignItems='center'>

                    <Button as='Flex' mx={1} borderRadius='100%' height='40px' width='20px' onClick={() => gotoPage(0)} disabled={!canPreviousPage} >
                    <Icon size='10px' as={HiChevronDoubleLeft  }  color={textColor} />
</Button>

                    <Button mx={1} borderRadius='100%' height='40px' width='20px' onClick={() => previousPage()} disabled={!canPreviousPage} >
                    <Icon size='10px'                                             color={textColor} 
 as={IoChevronBackOutline} />

                        </Button>
                    <Button mx={1} borderRadius='100%' height='40px' width='20px' onClick={() => nextPage()} disabled={!canNextPage} >
                        <Icon  size='10px' as={IoChevronForwardOutline} color={textColor} />
                        
                    </Button>
                    <Button mx={1} borderRadius='100%' height='40px' width='20px' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} >
                    <Icon size='10px' as={HiChevronDoubleRight  } color={textColor}  />
</Button>
                           </Flex>
                        

                    </Flex>
                </Flex>
        </Flex>
        </LightMode>
    )
}

export default AppTable