// add org-mode tags from Drafts app tags

var content = draft.content;
var orgTags = '';
var titleBreak = content.indexOf("\n");

editor.new();

if (content.trim().length > 0) {
	var title = content.slice(0, titleBreak);
	var oldTitle = title;	
	var body = content.slice(titleBreak + 1);
	
	if (draft.tags.length > 0) {
		orgTags = ':';
		for (tagIndex in draft.tags) {
			orgTags = orgTags + draft.tags[tagIndex] + ':';
		}
	}

	title = title + ' ' + orgTags;

	draft.content = title + '\n' + body;
} else {
	alert('Draft has no content.');
}