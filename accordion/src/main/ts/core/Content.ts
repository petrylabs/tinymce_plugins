const getHtml = function (data) {
  return (`
    <details>
      <summary>${data.summary}</summary>
      <span>${data.details}</span>
    </details>
  `)
}

const insertContent = function (editor, data) {
  editor.focus();

  const selectedNode = editor.selection.getNode();
  const isAccordion = selectedNode.tagName === 'DETAILS';

  if(isAccordion) {
    console.log("accordion");
  } else {
    const html = getHtml(data);
    editor.insertContent(html);
  }
}

const getContent = function (editor) {
  const selectedNode = editor.selection.getNode();
  const accordion = selectedNode.closest('details');
  const summary = accordion.querySelector('.summary').innerText;
  const details = accordion.querySelector('.details').innerText;
  return {
    summary: summary,
    details: details
  }
};

export default {
  getContent,
  insertContent
};