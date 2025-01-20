import "./newsLetter.css";
const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <h1>Get Exclusive offers On your Email</h1>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter yor email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
