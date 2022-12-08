const Alphabets = ()=>{
    let array = []
    for (let i = 65; i<=90;i++)
    {
        array.push(String.fromCharCode(i))
    }
    return (
            <div>
                {array.map((item)=><h1>{item}</h1>)}
            </div>
    )
}

export default Alphabets