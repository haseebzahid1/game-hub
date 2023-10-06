import { HStack ,Image, Text} from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
const Navbar = () => {
  return (
   <HStack justifyContent={'space-between'}>
     <Image src={logo} boxSize='' />
     <SearchInput />
      <ColorModeSwitch />
   </HStack>
  )
}

export default Navbar