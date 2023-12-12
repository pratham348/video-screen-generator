import { useState } from "react"
import ReactPlayer from "react-player"
import { Badge, Button, InputGroup, InputGroupText, Input } from "reactstrap"

const App = () => {
 const [videos, setVideos] = useState([])
 const [url, setUrl] = useState("")
 const [numberOfVideos, setNumberOfVideos] = useState(0)

 const handleInputChange = (e) => {
  setNumberOfVideos(e.target.value)
 }

 const handleUrlChange = (e) => {
  setUrl(e.target.value)
 }

 const handleGenerateVideos = () => {
  const newVideos = Array.from({ length: numberOfVideos }, (_, index) => ({
   id: index,
   url: url,
   playing: true
  }))
  setVideos(newVideos)
 }

 const handleTogglePlayPause = () => {
  setVideos((prevVideos) =>
   prevVideos.map((video) => ({ ...video, playing: !video.playing }))
  )
 }

 return (
  <div className="container">
   <div className="title">
    <h1>
     Video screen generator <span></span>{" "}
    </h1>
    <Badge color="primary" pill>
     New
    </Badge>
   </div>
   <div>
    <InputGroup>
     <InputGroupText>Number of Videos</InputGroupText>
     <Input type="number" value={numberOfVideos} onChange={handleInputChange} />
    </InputGroup>

    <br />
    <InputGroup>
     <InputGroupText>Video URL</InputGroupText>
     <Input type="text" value={url} onChange={handleUrlChange} />
    </InputGroup>

    <br />
    <Button
     color="primary"
     size=""
     onClick={handleGenerateVideos}
     block
     outline
    >
     Generate Videos
    </Button>

    <br />
    <Button
     color="primary"
     size=""
     onClick={handleTogglePlayPause}
     block
     outline
    >
     Toggle Play/Pause
    </Button>
   </div>
   <div className="d-flex flex-wrap">
    {videos.map((video) => (
     <div key={video.id} style={{ width: "320px", margin: "10px" }}>
      <ReactPlayer
       url={video.url}
       playing={video.playing}
       width="100%"
       height="100%"
      />
     </div>
    ))}
   </div>
  </div>
 )
}

export default App
