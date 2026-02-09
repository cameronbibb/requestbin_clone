import helpers from "../../services";

const SharedDetails = ({ request }) => {
  return (
    <>
      <div className="request-details">
        <p>
          <b>HTTP Request:</b> {request.payload.method}{" "}
          {helpers.removeBinFromPath(request.payload.path)}{" "}
          {request.date.toJSON()}
        </p>
      </div>
    </>
  );
};

export default SharedDetails;
