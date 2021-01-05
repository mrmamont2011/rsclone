import $ from 'jquery';

/**
 * Render new look of filter select
 * @return void
 */

export default function initRenderFilter() {
  $('select').each(function filterSelect() {
    const $this = $(this);
    const numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    const $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    const $list = $('<ul />', {
      class: 'select-options',
    }).insertAfter($styledSelect);

    for (let i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        rel: $this.children('option').eq(i).val(),
      }).html(`${$this.children('option').eq(i).text()} <span class="filter-circle filter-circle_${i}"></span>`).appendTo($list);
    }

    const $listItems = $list.children('li');

    $styledSelect.on('click', function toSelectOption(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function addActiveClass() {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.on('click', function clickToOption(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });

    $(document).on('click', () => {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
}
