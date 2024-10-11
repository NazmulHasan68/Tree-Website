import {Helmet} from "react-helmet";
export default function Error() {
  return (
    <div>
        <Helmet>
            <title>Error</title>
        </Helmet>
      <h1 className="mx-auto w-64 mt-20">OOh, This Page is not found . 404!</h1>
    </div>
  )
}
