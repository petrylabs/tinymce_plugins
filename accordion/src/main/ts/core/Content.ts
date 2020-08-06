const getHtml = function (data) {
  return (`
    <snt-accordion>
      <div slot="summary">${data.summary}</div>
      <div slot="details">${data.details}</div>
    </snt-accordion>
  `);
};

const insertContent = function (editor, data) {

  editor.focus();

  const selectedNode = editor.selection.getNode();
  const accordion = selectedNode.closest('snt-accordion');

  if (accordion) {
      // console.dir(data);
      accordion.querySelector('[slot=summary]').innerText = data.summary;
      accordion.querySelector('[slot=details]').innerText = data.details;

  } else {
    const html = getHtml(data);
    editor.insertContent(html);
  }
};

const getContent = function (editor) {
  const selectedNode = editor.selection.getNode();
  const accordion = selectedNode.closest('snt-accordion');
  const summary = accordion ? accordion.querySelector('[slot=summary]').innerText : '';
  const details = accordion ? accordion.querySelector('[slot=details]').innerText : '';
  return {
    summary,
    details
  };
};
export default {
  getContent,
  insertContent
};