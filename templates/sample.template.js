/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-09T20:26:20-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-10T12:01:32-08:00
 */

/*
NOTE: The component below was copied from https://github.com/servexyz/component-generator-lib/blob/master/src/templates.js
The purpose of generator-generator is not to manage templates...
Simply being used for testing purposes here.

Only thing that needs to be replaced for a successful run here is "$Component"...
If it's replaced with the correct component name, then this works.

TODO: defined taggedLiteral function
*/

export const SAMPLE_TEMPLATE = taggedLiteral`
  import React from 'react';
  import PropTypes from 'prop-types';
  export default class ${Component} extends React.Component {
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
