import React ,{useState,useEffect}from 'react'

const Logs = () => {
    const[logs,setLogs]=useState([])
    const [loading,setLoading]=useState(false)

    console.log(logs);


useEffect(() => {
   getLog()
}, [])

    const getLog=async()=>{
        setLoading(true)
        const res=await fetch('/logs')
        const data=await res.json()
        setLogs(data)
        setLoading(false)

    }
    return (
        <ul className="collection with-header">
        <li className="collection-header"><h4 className="center">Developer Logs</h4></li>
        {!loading && logs.length === 0 ? (<p className="center">There are currently no developer logs</p>
):(logs.map(log=><li>{log.message}</li>))}
      </ul>
    )
}

export default Logs