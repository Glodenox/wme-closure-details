// ==UserScript==
// @name        WME Closure Details
// @namespace   http://www.tomputtemans.com/
// @description Provide access to all closure details within the closures list
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/.*$/
// @icon        data:image/png;base64,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
// @version     0.4
// @grant       none
// ==/UserScript==

function init(e) {
  if (e && e.user == null) {
    return;
  }
  if (document.getElementById('user-info') == null) {
    setTimeout(init, 500);
    return;
  }
  if (typeof Waze.loginManager === 'undefined' || Waze.app.modeController === 'undefined' || Waze.selectionManager === 'undefined') {
    setTimeout(init, 300);
    return;
  }
  if (!Waze.loginManager.hasUser()) {
    Waze.loginManager.events.register('login', null, init);
    Waze.loginManager.events.register('loginStatus', null, init);
    // Double check as event might have triggered already
    if (!Waze.loginManager.hasUser()) {
      return;
    }
  }

  // Deal with events mode
  if (Waze.app.modeController) {
    Waze.app.modeController.model.bind('change:mode', function(model, modeId) {
      if (modeId == 0) {
        observeContentsPane();
      }
    });
  }
  observeContentsPane();
}
init();

function observeContentsPane() {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      var closureBlocks = mutation.target.querySelectorAll('.closure-item');
      var selectedIDs = Waze.selectionManager.selectedItems.map(function(obj) {
        return obj.model.attributes.id;
      });
      var selectedClosures = Waze.model.roadClosures.getObjectArray().filter(function(closure) {
        return selectedIDs.indexOf(closure.segID) != -1;
      });
      for (var i = 0; i < closureBlocks.length; i++) {
        var closureBlock = closureBlocks[i];
        var startDate = getTimeFromClosure(closureBlock.querySelector('.start-date'));
        var endDate = getTimeFromClosure(closureBlock.querySelector('.end-date'));
        var match = selectedClosures.find(function(closure) {
          return I18n.parseDate(closure.startDate+':00').getTime() == startDate && I18n.parseDate(closure.endDate+':00').getTime() == endDate;
        });
        if (match) {
          var description = closureBlock.querySelector('.description');
          if (description.childNodes.length > 0) { // Already contains information or perhaps bug has been fixed
            continue;
          }
          var info = document.createElement('i');
          info.className = 'fa fa-fw fa-info-circle';
          info.style.cursor = 'pointer';
          info.dataset.toggle = 'tooltip';
          info.title = (match.permanent ? 'Ignores traffic' : 'Listens to traffic') + '<br/>Created by: ' + getUsername(match.createdBy) + '<br/>Created on: ' + I18n.l('time.formats.long', match.createdOn);
          if (match.updatedBy) {
            info.title += '<br/>Updated by: ' + getUsername(match.updatedBy) + '<br/>Updated on: ' + I18n.l('time.formats.long', match.updatedOn);
          }
          description.appendChild(info);
          $(info).tooltip({
            html: true
          });
          if (match.reason != '') {
            description.appendChild(document.createTextNode(match.reason));
          } else {
            var indent = document.createElement('i');
            indent.appendChild(document.createTextNode('No description set'));
            description.appendChild(indent);
          }
        }
      }
    });
  });
  observer.observe(document.querySelector('.contents'), {
    childList: true
  });
}

function getTimeFromClosure(node) {
  return I18n.parseDate(node.querySelector('.date').textContent + ' ' + node.querySelector('.time').textContent + ':00').getTime();
}

function getUsername(id) {
  var user = Waze.model.users.get(id);
  if (user) {
    return user.userName;
  } else {
    return id + '(user not loaded)';
  }
}