import React from 'react'
import { render} from 'react-dom'

const Hi = () => {
  return <div>Hello there</div>
}

render(<Hi />, document.getElementById("app"))
