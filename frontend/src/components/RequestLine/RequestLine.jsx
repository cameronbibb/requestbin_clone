import helpers from "../../services";
import "./RequestLine.css";
import { FaTimes } from "react-icons/fa";

const RequestLine = ({
  request,
  setSelectedRequest,
  setSelectedRequestID,
  selectedRequestID,
  binPath,
}) => {
  const path = helpers.removeBinFromPath(request.http_path);
  const method = request.http_method;
  const time = request.received_at;

  const handleGetRequestDetails = async (event) => {
    event.preventDefault();
    const req = await helpers.getRequest(request.id);
    req.date = helpers.convertDbTimetoDateObj(time);
    setSelectedRequest(req);
    setSelectedRequestID(request.id);
  };

  const handleDeleteRequest = (e) => {
    e.preventDefault();
    e.stopPropagation();
    helpers.deleteRequest(binPath, request.id);
  };

  return (
    <li
      className={`request_line_item ${selectedRequestID === request.id ? "selected" : ""}`}
    >
      <a href="#" onClick={handleGetRequestDetails} className="request_line">
        <div className="request_line_time">
          {helpers.convertDbTimetoDateObj(time).toLocaleTimeString()}
        </div>
        <div className={`request_line_method method-${method.toLowerCase()}`}>
          {method}
        </div>
        <div className="request_line_path">{path}</div>
        <FaTimes
          className="request_line_delete"
          onClick={handleDeleteRequest}
        />
      </a>
    </li>
  );
};

export default RequestLine;
