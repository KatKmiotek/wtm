import Markdown from 'markdown-to-jsx';
import TOOLS from '../markdown/Tools.mdx'
import { useEffect, useState } from "react";

// const Image = ({ src, alt, ...props }) => (
//   <img src={src} {...props} alt={alt}/>
// );
// const options = {
//   overrides: {
//     img: { component: Image }
//   }
// };


const ToolsComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(TOOLS)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return (
      <div className="text-block">
        <Markdown children={content.md} />
      </div>
    )
}

export default ToolsComponent
