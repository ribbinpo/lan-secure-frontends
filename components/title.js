const title = ({ name, children }) => {
  return (
    <div className="flex justify-between text-lg font-bold">
      {name}
      {children}
    </div>
  );
};

export default title;