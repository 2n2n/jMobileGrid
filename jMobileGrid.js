function make_table(data, columns) {
  var table = this;

  function _render_data(row) {
    var tbody = this;
    $.each(row, function(k, v) {
      var $tr = $("<tr/>");
      $.each(columns, function(colKey) {
        var $td = $("<td/>")
        var value = typeof this.formatter == "function" ? this.formatter(v[this.field], v, k) : v[this.field] || '';
        $td.html(value);
        $tr.append($td);
      });
      tbody.append($tr);
    });
    return tbody;

  }

  var tbody = $("<tbody/>");
  this.append(_render_data.call(tbody, data))
  debugger;


}

var data = [{
  clientID: 1,
  firstName: 'anthony',
  lastName: 'Lloveras'
}, {
  clientID: 2,
  firstName: 'Iris',
  lastName: 'Mahilum'
}]

var columns = [{
  field: 'clientID',
  title: 'id'
}, {
  field: 'firstName',
  title: 'Name',
  formatter: function(v, r, i) {
    return v + " " + r.lastName
  }
}]


$.fn.makeTbl = function() {
  make_table.call(this, data, columns)
  return this;
}

