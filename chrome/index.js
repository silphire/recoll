(function() {
  $("#calendar").ready(function() {
  });


  $("#history_content").ready(function() {
    // ロードされたばかりの時は、とりあえず最新の履歴を表示しておく。
  });

  $(document).ready(function() {
    $.datepicker.setDefaults({
      showOn: "both", 
      onSelect: function(date, inst) {
	loadHistoryAt(date);
      }
    });

    $("#calendar").datepicker();
  });

  function loadHistoryAt(date) {
  }
})();
