import RequestLine from "../RequestLine/RequestLine";
import "./RequestList.css";
import helpers from "../../services";
import { FaTrash } from "react-icons/fa";

const RequestList = ({
  requests,
  setSelectedRequest,
  setSelectedRequestID,
  selectedRequestID,
}) => {
  return (
    <div className="request-nav">
      <div className="request-options">
        Options go here for live/pause and search
      </div>
      <div className="request-header">Requests</div>
      <ul className="request-list">
        {requests.map((req) => {
          return (
            <RequestLine
              key={req.id}
              request={req}
              setSelectedRequest={setSelectedRequest}
              setSelectedRequestID={setSelectedRequestID}
              selectedRequestID={selectedRequestID}
            />
          );
        })}
      </ul>
      {requests.length > 0 && (
        <div className="delete-all-button" onClick={helpers.deleteAllRequests}>
          <FaTrash /> DELETE ALL
        </div>
      )}
    </div>
  );
};

export default RequestList;
