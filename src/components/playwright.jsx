import Markdown from 'markdown-to-jsx';
import PLAYWRIGHT from '../markdown/Playwright.md'
import { useEffect, useState } from "react";

const PlaywrightComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(PLAYWRIGHT)
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

export default PlaywrightComponent
