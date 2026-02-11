import HeadersAndQuery from "../HeadersAndQuery/HeadersAndQuery";
import SharedDetails from "../SharedDetails/SharedDetails";
import Body from "../Body/Body";
import "./RequestDetails.css";

const RequestDetails = ({ request }) => {
  // console.log(Object.entries(request.payload));

  /*

Shared details component(Method Path Time)
Header component
QueryParams component (if exists)
Body component (if exists)

*/

  return (
    <div className="request-details-container">
      <SharedDetails request={request} />
      <HeadersAndQuery type={"Headers"} obj={request.payload.headers} />
      {request.payload.query && (
        <HeadersAndQuery
          type={"Query Parameters"}
          obj={request.payload.query}
        />
      )}
      {request.payload.body && <Body body={request.payload.body} />}
    </div>
  );
};

export default RequestDetails;
