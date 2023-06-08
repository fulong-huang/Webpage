

export default function HelpPage(){
    return (
        <>
            <h1> Help Page </h1>
            <h3> commands will be ran using current running process </h3>
            <p> [to]:&nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;
                time out current process, go to next process</p>
            <p> [cr #1]: &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;create a process with priority '#1' </p>
            <p> [de #1]: &nbsp;&nbsp;&nbsp;&nbsp; delete process '#1' (must be descendent)</p>
            <p> [rq #1 #2]: &nbsp;request '#2' amount of resource '#1'</p>
            <p> [rl #1 #2]: &nbsp;&nbsp;release '#2' amount of resource '#1'</p>
        </>
    )
}

