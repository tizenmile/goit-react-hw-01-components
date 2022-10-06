import css from "./Statistics.module.css"
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {stats.map(stat =>
                    <li className={css.titleL} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}</span>
                    </li>)}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}