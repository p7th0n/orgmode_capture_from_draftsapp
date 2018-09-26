   // insert org-mode code blocks
   //

   var p = Prompt.create();
   var beginBlock = '#+BEGIN_SRC';
   var endBlock = '#+END_SRC';
   var aLanguages = [
     "awk",
     "C",
     "cpp",
     "clojure",
     "css",
     "emacs-lisp",
     "forth",
     "gnuplot",
     "haskell",
     "io",
     "js",
     "latex",
     "lisp",
     "makefile",
     "matlab",
     "org",
     "perl",
     "python",
     "R",
     "ruby",
     "sass",
     "scala",
     "scheme",
     "sed",
     "shell",
     "sql",
     "sqlite",
     "groovy",
     "julia",
     "mathematica",
     "tcl",
     "elixir",
     "http",
     "ipython",
     "kotlin",
     "mongo",
     "prolog",
     "typescript"
   ];
   p.title = 'Insert code block';
   p.isCancellable = true;

   p.addPicker('selLanguage', 'select language:', [aLanguages], [10]);
   p.addButton('Ok');

   var result = p.show();

   if (result) {
	   var selectedLanguage = aLanguages[p.fieldValues['selLanguage']];
	   var codeBlock = beginBlock + ' ' + selectedLanguage + '\n\n' + endBlock;
	
	   var selRange = [draft.selectionStart, draft.selectionLength];
	   var text = draft.content;

	   // insert code block
	   draft.content = text.substring(0, selRange[0]) + codeBlock + text.substring(selRange[0] + selRange[1]);
	   var selEditorRange = editor.getSelectedRange();
	   var insertPoint = codeBlock.length - endBlock.length - 1;
	   alert(codeBlock);
	   editor.activate();
	   editor.setSelectedRange(selEditorRange[0] + insertPoint, 0);	
   }
