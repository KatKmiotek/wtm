import Markdown from 'markdown-to-jsx';
import TOOLS from '../markdown/Tools.md'
import { useEffect, useState } from "react";



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
        <Markdown children={content.md}/>
      </div>
    )
}

export default ToolsComponent
