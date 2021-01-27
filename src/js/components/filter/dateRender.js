/**
 * Jquery call for datepicker
 * @return void
 */

export default function dateRender() {
  // eslint-disable-next-line no-undef
  $('#filter-date').datepicker({
    clearButton: true,
    toggleSelected: false,
    range: true,
    multipleDatesSeparator: '-',
  });
}
