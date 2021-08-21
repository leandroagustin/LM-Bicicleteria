import "./Loading.css";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
          <Spinner
            animation="grow"
            className="loading-spinner" />
  );
};

export default Loading;