import Markdown from 'markdown-to-jsx';
import ABOUT from '../markdown/About.md'
import { useEffect, useState } from "react";



const AboutMeComponent = ()=> {

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
        <div>
        <Markdown children={content.md}/>
        </div>
      </div>
    )
}

export default AboutMeComponent
