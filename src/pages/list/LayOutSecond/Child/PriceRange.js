import style from './PriceRange.module.css';

function PriceRange({ title, price }) {
  return (
    <section className={style.priceBoxWrap}>
      <div className={style.title} style={{ marginRight: 0 }}>
        {title}
      </div>
      <section className={style.numberBoxWrap}>
        <input type="number" value={price} readOnly />
        <span>만원</span>
      </section>
    </section>
  );
}

export default PriceRange;
