import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ label, stats = [] }) => {
  return (
    <section className={css.statistics}>
      {stats.length > 0 ? (
        <>
          {label ? <h2 className={css.title}>{label}</h2> : null}
          <ul className={css.statList}>
            {stats.map(el => (
              <li
                key={el.id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{el.label}</span>
                <span className={css.percentage}>{el.percentage}%</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={css.paragraph}>No stats</p>
      )}
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
