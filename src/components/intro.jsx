import Markdown from 'markdown-to-jsx';
import INTRO from '../markdown/Intro.md'
import { useEffect, useState } from "react";



const IntroComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(INTRO)
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

export default IntroComponent
