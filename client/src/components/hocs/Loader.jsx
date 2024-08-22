import { DNA } from "react-loader-spinner";
import Row from "react-bootstrap/Row";


export default function Loader({ children, isLoading }) {
  return isLoading ? (
    <Row className="justify-content-center">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Row>
  ) : (
    children
  );
}
