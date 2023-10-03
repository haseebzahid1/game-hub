import { HStack ,Image, Text} from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
   <HStack justifyContent={'space-between'}>
     <Image src={logo} boxSize='' />
      <ColorModeSwitch />
   </HStack>
  )
}

export default Navbar