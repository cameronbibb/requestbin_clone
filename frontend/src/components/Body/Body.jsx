const Body = ({ body }) => {
  return (
    <>
      <b>{"Body"}</b>
      <pre>{JSON.stringify(body)}</pre>
    </>
  );
};

export default Body;
