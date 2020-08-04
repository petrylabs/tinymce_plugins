const getHtml = function (data) {
  return (`
    <details>
      <summary class="summary">${data.summary}</summary>
      <span class="details">${data.details}</span>
    </details>
  `)
}

const insertContent = function (editor, data) {
  editor.focus();

  const selectedNode = editor.selection.getNode();
  const accordion = selectedNode.closest('details');

  if(accordion) {
      console.dir(data);
      accordion.querySelector('.summary').innerText = data.summary;
      accordion.querySelector('.details').innerText = data.details;

  } else {
    const html = getHtml(data);
    editor.insertContent(html);
  }
}



const getContent = function (editor) {
  const selectedNode = editor.selection.getNode();
  const accordion = selectedNode.closest('details');
  const summary = accordion ? accordion.querySelector('.summary').innerText : '';
  const details = accordion ? accordion.querySelector('.details').innerText : '';
  return {
    summary: summary,
    details: details
  }
};

export default {
  getContent,
  insertContent
};