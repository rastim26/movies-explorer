import './AddMore.css';


function AddMore({loadMore}) {
  return (
    <section className="more">
      <div className="more__container">
        <button type="button" onClick={loadMore} className="more__load">Eщё</button>
      </div>
    </section>
  );
}

export default AddMore;