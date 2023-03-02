import Markdown from 'markdown-to-jsx';
import WORKSHOP from '../markdown/Workshop.md'
import { useEffect, useState } from "react";

const WorkshopComponent = ()=> {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(WORKSHOP)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return (
      <>
      <div className="text-block">
        <Markdown children={content.md}/>
      </div>
      <div className='tag'>#WTMDareToBe</div>
      </>
    )
}

export default WorkshopComponent
