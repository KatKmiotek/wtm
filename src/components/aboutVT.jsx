import Markdown from 'markdown-to-jsx';
import ABOUTVT from '../markdown/AboutVT.md'
import { useEffect, useState } from "react";



const AboutVTComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(ABOUTVT)
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

export default AboutVTComponent
