var Record = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },
  recordRow: function() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
      </tr>
    );
  },
  renderedRecord: function() {
  if (this.state.edit === true) {
    return this.recordForm();
  } else {
    return this.recordRow();
  }
},

render: function() {
  return this.renderedRecord();
}
});
