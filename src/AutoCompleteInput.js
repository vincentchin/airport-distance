import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import './AutoCompleteInput.css';

export default class AutoCompleteInput extends Component {

  render(){
    return(
      <div className="AutoCompleteInput">
        <AutoComplete
          hintText={this.props.labelText}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.data}
          onNewRequest={this.props.onBlurInput}
          fullWidth={true}
          maxSearchResults={8}
        />
      </div>
    );
  }
}

