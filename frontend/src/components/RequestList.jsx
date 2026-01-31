import RequestLine from "./RequestLine";
import "./RequestList.css";

const RequestList = ({ requests, setSelectedRequest }) => {
  return (
    <ul className="request-list">
      {requests.map((req) => {
        // {
        //   console.log(req);
        // }
        return (
          <RequestLine
            key={req.id}
            request={req}
            setSelectedRequest={setSelectedRequest}
          />
        );
      })}
    </ul>
  );
};

export default RequestList;
