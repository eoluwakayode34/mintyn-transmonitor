import React from 'react'
import {Text, useColorModeValue} from '@chakra-ui/react'
import { color as colors } from '../../utils/color'
const PrimaryText = ({children, align='left',         px=['33px']
, fontSize = ['14px','15px','16px'], fontWeight = '400', color = colors.dark,  ...otherProps}) => {

    const textColor = useColorModeValue('#484848','blackAlpha.800')

    return (
        <Text textAlign={align} 
        lineHeight='140%'
        fontWeight={fontWeight}
        letterSpacing={.2}
        color={color}
        fontFamily={'Poppins'}
        px={px}
        fontSize={fontSize} {...otherProps} >

            {children}  
        </Text>

    )
}


export default PrimaryText