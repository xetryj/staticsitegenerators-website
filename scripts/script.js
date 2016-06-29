(function() {
  $(function() {
    var initPopups, initSort;
    initSort = function() {
      return $('.table.sortable').tablesort().on('tablesort:complete', initPopups).find('th.numeric-sort').data('sortBy', function(th, td, sorter) {
        return parseInt(td.data('sort-value'), 10);
      }).end().floatThead({
        useAbsolutePositioning: false,
        zIndex: 10
      });
    };
    initPopups = function() {
      return $('.project.title').popup().popup('setting', 'delay', 0).popup('setting', 'duration', 0).popup('setting', 'position', 'top left').popup('setting', 'inline', false);
    };
    initSort();
    initPopups();
    return $('.service-buttons-container').attr('src', '/buttons.html');
  });

}).call(this);
