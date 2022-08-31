// import lazyframe from "lazyframe"
import React, { useEffect } from "react"

const WorkPreview = ({ project }) => {
  useEffect(() => {
    lazyframe(".lazyframe", {
      lazyload: true,
      autoplay: false,
    })
  })
  return (
    <div>
      <div className="project-preview">
        <div
          className="lazyframe"
          data-vendor={project.dataVendor}
          data-title={project.dataTitle}
          data-src={project.dataSrc}
          data-ratio="16:9"
          //data-initinview="true"
          // data-autoplay="false"
        ></div>
      </div>
    </div>
  )
}

export default WorkPreview
