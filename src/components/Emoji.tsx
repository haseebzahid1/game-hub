import { Image, ImageProps } from "@chakra-ui/react";

import bullsEye from '../assets/bulls-eye.jfif'
import thumbsUp from '../assets/thumbs-up.jfif'
import meh from '../assets/meh.jfif'

interface Props {
    rating: number
}

const Emoji = ({rating}: Props) => {
    if(rating < 3) return null

    const emojiMp: {[key:number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize:'25px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize:'25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize:'25px'},
    }
  return (
    <Image {...emojiMp[rating]} marginTop={1} />
  )
}

export default Emoji