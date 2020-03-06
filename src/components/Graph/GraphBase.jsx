import React, {
  useRef,
  createRef,
  useEffect
} from 'react';
import { Chart } from 'chart.js';
import PropTypes from 'prop-types';

const GraphBase = props => {
  const refGraph = createRef();
  const graph = useRef();

  useEffect(() => {
    const {
      type,
      title,
      labels,
      datasets,
      DataProps,
      OptionProps
    } = props;

    if (refGraph.current) {
      if (graph.current) graph.current.destroy();
      graph.current = new Chart(refGraph.current, {
        type,
        data: {
          labels,
          datasets,
          ...DataProps
        },
        options: {
          title: {
            display: true,
            text: title
          },
          responsive: true,
          ...OptionProps
        }
      });
    }
  }, [refGraph, props]);

  return <canvas ref={refGraph} />;
};

GraphBase.propTypes = {
  type: PropTypes.oneOf([
    'line',
    'bar',
    'radar',
    'pie',
    'doughnut',
    'polarArea',
    'bubble',
    'scatter',
    'area'
  ]).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasets: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
  DataProps: PropTypes.shape({}),
  OptionProps: PropTypes.shape({})
};

GraphBase.defaultProps = {
  DataProps: {},
  OptionProps: {}
};

export default GraphBase;
