// ==UserScript==
// @name        WME Closure Details
// @namespace   http://www.tomputtemans.com/
// @description Provide access to all closure details within the closures list
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @icon        data:image/png;base64,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
// @version     1.0.4
// @grant       none
// ==/UserScript==

function init(e) {
  if (e && e.user === null) {
    return;
  }
  if (document.getElementById('user-info') === null) {
    setTimeout(init, 500);
    return;
  }
  if (typeof W.loginManager === 'undefined' || W.app.modeController === 'undefined' || W.selectionManager === 'undefined') {
    setTimeout(init, 300);
    return;
  }
  if (!W.loginManager.user) {
    W.loginManager.events.register('login', null, init);
    W.loginManager.events.register('loginStatus', null, init);
    // Double check as event might have triggered already
    if (!W.loginManager.user) {
      return;
    }
  }

  // Deal with events mode
  if (W.app.modeController) {
    W.app.modeController.model.bind('change:mode', function(model, modeId) {
      if (modeId === 0) {
        observeContentsPane();
      }
    });
  }
  observeContentsPane();
}
init();

function observeContentsPane() {
  if (!W.selectionManager.getSelectedFeatures) {
    W.selectionManager.getSelectedFeatures = W.selectionManager.getSelectedItems;
  }
  function handleMutations(mutations) {
    mutations.forEach(function(mutation) {
      var closureBlocks = mutation.target.querySelectorAll('.closure-item');
      var selectedIDs = W.selectionManager.getSelectedFeatures().filter(function(obj) {
        return obj.model.type == 'segment';
      }).map(function(obj) {
        return obj.model.attributes.id;
      });
      var selectedClosures = W.model.roadClosures.getObjectArray().filter(function(closure) {
        return selectedIDs.indexOf(closure.segID) != -1;
      });
      for (var i = 0; i < closureBlocks.length; i++) {
        var closureBlock = closureBlocks[i];
        var buttons = closureBlock.querySelectorAll('a');
        for (var j = 0; j < buttons.length; j++) {
          buttons[j].addEventListener('click', function() {
            var tooltip = document.querySelector('body .tooltip');
            if (tooltip) {
              tooltip.parentNode.removeChild(tooltip);
            }
          });
        }
        var matchedClosure = selectedClosures.find(function(closure) {
          return getLocalizedTime(closure.startDate) == getTimeFromBlock(closureBlock.querySelector('.start-date')) &&
            getLocalizedTime(closure.endDate) == getTimeFromBlock(closureBlock.querySelector('.end-date'));
        });
        if (matchedClosure) {
          var description = '<div>';
          if (matchedClosure.reason !== '') {
            description = '<strong style="font-size:120%">' + matchedClosure.reason + '</strong>';
          } else {
            description = '<em style="font-size:120%">No description set</em>';
          }
          description += '<table style="border-width:0;text-align:left"><tbody><tr><th style="text-align:right;padding-right:0.4em">Created by</th><td>' + getUsername(matchedClosure.createdBy) + '</td></tr><tr><th style="text-align:right;padding-right:0.4em">Created on</th><td>' + I18n.l('time.formats.long', matchedClosure.createdOn) + '</td></tr>';
          if (matchedClosure.updatedBy) {
            description += '<tr><th style="text-align:right;padding-right:0.4em">Updated by</th><td>' + getUsername(matchedClosure.updatedBy) + '</td></tr>';
          }
          if (matchedClosure.updatedOn) {
            description += '<tr><th style="text-align:right;padding-right:0.4em">Updated on</th><td>' + I18n.l('time.formats.long', matchedClosure.updatedOn) + '</td></tr>';
          }
          description += '<tr><td colspan="2" style="text-align:center"><em>' + (matchedClosure.permanent ? 'Ignores traffic' : 'Listens to traffic') + '</em></td></tr></tbody></table></div>';
          $(closureBlock).tooltip({
            placement: 'right',
            container: 'body',
            trigger: 'hover',
            html: true,
            title: description
          });
        }
      }
    });
    if (document.querySelector('.contents .main')) {
      (new MutationObserver(handleMutations)).observe(document.querySelector('.contents .main'), {
        childList: true
      });
    }
  }
  (new MutationObserver(handleMutations)).observe(document.querySelector('.contents'), {
    childList: true
  });
}

function getTimeFromBlock(node) {
  return node.querySelector('.date').textContent + ' ' + node.querySelector('.time').textContent;
}

function getLocalizedTime(date) {
  var splitDate = date.split(' ');
  return I18n.l('date.formats.default', splitDate[0]) + ' ' + splitDate[1];
}

function getUsername(id) {
  var user = W.model.users.get(id);
  if (user) {
    return user.userName;
  } else {
    return id + '(user not loaded)';
  }
}