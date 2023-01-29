import Markdown from 'markdown-to-jsx';
import ABOUT from '../markdown/About.md'
import { useEffect, useState } from "react";



const AboutComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(ABOUT)
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

export default AboutComponent
