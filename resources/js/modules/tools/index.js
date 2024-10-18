import Format from './Format'
import Heading1 from './Headings/Heading1'
import Heading2 from './Headings/Heading2'
import Heading3 from './Headings/Heading3'
import Separator from './Separator'
import Blockquote from './Blockquote'
import Bold from './TextStyling/Bold'
import Italic from './TextStyling/Italic'
import Strikethrough from './TextStyling/Strikethrough'
import Underline from './TextStyling/Underline'
import ClearFormat from './TextStyling/ClearFormat'
import CodeBlock from './CodeBlock'
import AlignCenter from './TextAlignment/AlignCenter'
import AlignLeft from './TextAlignment/AlignLeft'
import AlignRight from './TextAlignment/AlignRight'
import Image from './Image'
import OrderedList from './OrderedList'
import BulletList from './BulletList'
import Table from './Table'
import Link from './Link'
import Undo from './History/Undo'
import Redo from './History/Redo'

export default {
    format: Format,
    heading1: Heading1,
    heading2: Heading2,
    heading3: Heading3,
    blockquote: Blockquote,
    codeBlock: CodeBlock,
    image: Image,
    table: Table,
    bold: Bold,
    italic: Italic,
    underline: Underline,
    clearFormat: ClearFormat,
    strikethrough: Strikethrough,
    alignCenter: AlignCenter,
    alignLeft: AlignLeft,
    alignRight: AlignRight,
    orderedList: OrderedList,
    bulletList: BulletList,
    link: Link,
    undo: Undo,
    redo: Redo,
    // Visual divider between tools, has a shorthand representation of '|'.
    separator: Separator,
    '|': Separator
}
