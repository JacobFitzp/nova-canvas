import Format from './Format'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Separator from './Separator'
import Blockquote from './Blockquote'
import Bold from './Bold'
import Italic from './Italic'
import Strikethrough from './Strikethrough'
import Underline from './Underline'
import CodeBlock from './CodeBlock'
import AlignCenter from './AlignCenter'
import AlignLeft from './AlignLeft'
import AlignRight from './AlignRight'
import Image from './Image'

export default {
    format: Format,
    heading1: Heading1,
    heading2: Heading2,
    heading3: Heading3,
    blockquote: Blockquote,
    codeBlock: CodeBlock,
    image: Image,
    bold: Bold,
    italic: Italic,
    underline: Underline,
    strikethrough: Strikethrough,
    alignCenter: AlignCenter,
    alignLeft: AlignLeft,
    alignRight: AlignRight,
    // Visual divider between tools, has a shorthand representation of '|'.
    separator: Separator,
    '|': Separator
}
