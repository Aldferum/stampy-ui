import {ArrowRight} from '~/components/icons-generated'

export const ContentBoxMain = () => {
  return (
    <div className="main-container primary bordered">
      <div className="content-box-description primary">
        <p>New to AI Safety?</p>
        <span className="content-box-quick-read">
          Something about <br /> reading and quick
        </span>
        <a href="/9OGZ" className="unstyled teal">
        <div className="content-box-button">
            Start here
          <ArrowRight className="img-2" />
        </div>
        </a>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c2daf90ad8594e0b7c3748f83751e577ae52f13fcb7f897a573cb95458884c?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
        className="content-box-right-icon"
        alt="AI Safety Image"
      />
    </div>
  )
}
