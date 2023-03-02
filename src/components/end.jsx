import Markdown from 'markdown-to-jsx';
import END from '../markdown/End.md'
import { useEffect, useState } from "react";



const EndComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(END)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return (
      <>
      <div className="App-header">
        <Markdown children={content.md} />
      </div>
        <div className='tag'>#WTMDareToBe</div>
      </>
    )
}

export default EndComponent
