import RequestLine from "../RequestLine/RequestLine";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";
import "./RequestList.css";
import helpers from "../../services";
import { FaTrash } from "react-icons/fa";

const RequestList = ({
  requests,
  setSelectedRequest,
  setSelectedRequestID,
  selectedRequestID,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleConfirmDelete = () => {
    helpers.deleteAllRequests();
    setShowDeleteModal(false);
  };

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
        <>
          <div
            className="delete-all-button"
            onClick={() => setShowDeleteModal(true)}
          >
            <FaTrash /> DELETE ALL
          </div>

          <ConfirmModal
            isOpen={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={handleConfirmDelete}
            title="Delete All Requests?"
            message="Are you sure you want to delete all requests? This action cannot be undone."
            confirmButtonTitle="Delete All"
          />
        </>
      )}
    </div>
  );
};

export default RequestList;
