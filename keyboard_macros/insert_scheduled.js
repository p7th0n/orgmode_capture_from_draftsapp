      // Org-mode insert scheduled or deadline date & time

      var p = Prompt.create();
      var aScheduleTypes = ['SCHEDULED:', 'DEADLINE:'];

      p.title = 'Scheduled or deadline?';
      p.isCancellable = true;

      p.addSelect('scheduleSelect', 'select type:', aScheduleTypes, ['SCHEDULED:'], false);
      p.addDatePicker('scheduled', 'select date:', new Date(), {'mode': 'dateAndTime'});
      p.addButton('Ok');

      var result = p.show();

      if (result) {

        var dateString = new Date(p.fieldValues['scheduled']);
        // format date/time for org-mode
        var orgDate = dateString.toISOString().slice(0, 10);
        var orgTime = dateString.toLocaleTimeString('en-US', {hour12: false});
        var orgDay = dateString.toLocaleDateString('en-US', {weekday: 'short'});
        var scheduleType = p.fieldValues['scheduleSelect'];
        var orgScheduled = scheduleType + ' <' + orgDate + ' ' + orgDay + ' ' + orgTime + '>\n';
        var orgScheduledLength = orgScheduled.length - 1;
        // get insert position & draft content
        var selRange = [draft.selectionStart, draft.selectionLength];
        var text = draft.content;
        // insert scheduled tag
        draft.content = text.substring(0, selRange[0]) + orgScheduled + text.substring(selRange[0] + selRange[1]);
        var selEditorRange = editor.getSelectedRange();
        alert(orgScheduled);
        editor.activate();
        editor.setSelectedRange(selEditorRange[0] + orgScheduledLength, 0);
      }
