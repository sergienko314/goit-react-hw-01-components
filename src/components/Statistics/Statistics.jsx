import style from './Statistics.module.css'
import PropTypes from 'prop-types';


export function Statistics({ data, title }) {
  return (<section className = {style.statistics}>
    {title && <h2 className = {style.title} >{title}</h2>}
    < ul className = { style.statList } >
    {
      data.map(({ id, label, percentage }) => (
        <li key={id} className={style.item} style={{ backgroundColor:generateRandomColor()}}>
          <span className = {style.label} >{label}</span>
          <span className = {style.percentage}>{percentage}%</span>
        </li>)
      )}
  </ul>
  </section>)
}

function generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
  
Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string
  }))

}