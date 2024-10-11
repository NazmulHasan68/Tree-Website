import {Helmet} from "react-helmet";
export default function PageTitle(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </div>
  )
}
