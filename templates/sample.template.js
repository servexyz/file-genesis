/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-09T20:26:20-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T10:39:41-08:00
 */

export const SAMPLE_TEMPLATE = `
  ${"sample.template.js"}
  import React from 'react';
  import PropTypes from 'prop-types';
  export default class ${component} extends React.Component {
    static defaultProps = {
      place: 'holder'
    }
    static propTypes = {
      place: React.PropTypes.string.isRequired
    }
    state = {
      foo: 'bar'
    }
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          { this.state.foo }
        </div>
      )
    }
  }
`;
