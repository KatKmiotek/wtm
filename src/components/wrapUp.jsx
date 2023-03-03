import Markdown from 'markdown-to-jsx';
import WRAP_UP from '../markdown/WrapUp.md'
import { useEffect, useState } from "react";



const WrapUpComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(WRAP_UP)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return (
      <div className="text-block">
        <div>
        <Markdown children={content.md}/>
        </div>
      </div>
    )
}

export default WrapUpComponent
