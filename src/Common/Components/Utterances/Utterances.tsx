import React, { useRef, useEffect } from "react";

const Utterances = () => {
    const utterancesRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const utterances = document.createElement("script");
        utterances.setAttribute("src", "https://utteranc.es/client.js");
        utterances.setAttribute("async", "true");
        utterances.setAttribute("crossorigin", "anonymus");
        utterances.setAttribute("repo", "yymin1022/Blog_LR_Comments");
        utterances.setAttribute("theme", "github-light");
        utterances.setAttribute("issue-term", "pathname");
        utterancesRef.current.appendChild(utterances);
    }, []);

    return(
        <div ref={utterancesRef}></div>
    )
}

export default Utterances;