import { HStack ,Image, Text} from '@chakra-ui/react'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
   <HStack>
     <Image src={logo} boxSize='' />
     <Text>Navbar</Text>
   </HStack>
  )
}

export default Navbar