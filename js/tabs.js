
  // Esto activa los botones de pestaña
  var tabTriggerList = document.querySelectorAll('[data-bs-toggle="tab"]');
  tabTriggerList.forEach(function (tabTrigger) {
    tabTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      var tabTarget = document.querySelector(tabTrigger.getAttribute('data-bs-target'));
      var tabPaneList = document.querySelectorAll('.tab-pane');
      tabPaneList.forEach(function (tabPane) {
        tabPane.classList.remove('show', 'active');
      });
      tabTarget.classList.add('show', 'active');
    });
  });

  