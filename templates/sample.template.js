/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-09T20:26:20-08:00
 * @Email:  me@alechp.com
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T16:18:44-08:00
 */

const multiline = require("multiline");
const SAMPLE_TEMPLATE = multiline(() => {/*
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
*/});

module.exports = {
  TEMPLATE: SAMPLE_TEMPLATE
};
