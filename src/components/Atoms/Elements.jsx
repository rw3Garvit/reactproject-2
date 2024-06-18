let Button = ({ content, classs, onClick }) => (
  <button className={classs} onClick={onClick}>
    {content}
  </button>
);

let H1 = () => <h1>Hello world</h1>;

export { Button, H1 };
