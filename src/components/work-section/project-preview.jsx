const WorkPreview = ({ project }) => {
  // useEffect(() => {
  //   lazyframe(".lazyframe", {
  //     lazyload: true,
  //     autoplay: false,
  //   })
  // })
  return (
    <div>
      <div className="project-preview">
        {/* <div
          className="lazyframe"
          data-vendor={project.dataVendor}
          data-title={project.dataTitle}
          data-src={project.dataSrc}
          data-ratio="16:9"
          //data-initinview="true"
          // data-autoplay="false"
        ></div> */}
        <lite-vimeo
          // shadow="false"
          videoid={project.dataSrc}
          autoload
        ></lite-vimeo>
      </div>
    </div>
  )
}

export default WorkPreview
