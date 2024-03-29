'use strict';
var questions = [];
for (var i = 0; i < 10; i++){
  questions[i] = {id: i + 1, topic:"id" + i}
}

var topics =[];
var topicsClicked = [];

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="inline"> Question # ${item.id}</span>
      <div class="question-controls">
        <button class="js-item-incorrect">
            <span class="button-label">incorrect</span>
        </button>
      </div>
    </li>`;
}

function generateAnswerItemsString(answerList) {
  console.log("Generating answer list element");

  const items = answerList.map((item) => generateItemElement(item));

  return items.join("");
}

function renderAnswerList() {
    const answerListItemsString = generateAnswerItemsString(questions);

  // insert that HTML into the DOM
  $('.js-answers-list').html(answerListItemsString);
}

function getItemIdFromElement(item) {
  console.log($(item).closest('li').data('item-id'));
  return $(item)
    .closest('li')
    .data('item-id');
}

function handleIncorrectClick () {
  $('.js-answers-list').on('click', '.js-item-incorrect', event => {
    console.log('`handleIncorrectClicked` ran');
    const id = getItemIdFromElement(event.currentTarget);
    if (topicsClicked.some(function hasTopic(element) {
      return element === id
    })){

    }
    else {
      topicsClicked.push(id)
      topics.push(generateTopicElement(STORE[id-1]));}
    renderTopicsList(topics);
  });
}

function generateTopicElement(item) {
  return `
    <li answerItemId= ${item.topic}>
      <span class="inline"> ${item.topic} <a href="https://asela-boteju.github.io/test-check/pdfs/${item.pdf}.pdf">Topic</a> </span>
    </li>`;
}

function generateTopicsItemsString(topicsList) {
  console.log("Generating topics list element");
  const items = topicsList.map((item) => generateTopicElement(item));
  return items.join("");
}

function renderTopicsList(id) {
  // insert that HTML into the DOM
  $('.js-topics-list').html(id);
  console.log(id)
}

function handleAnswerList() {
  renderAnswerList();
  handleIncorrectClick();
}

$(handleAnswerList)
